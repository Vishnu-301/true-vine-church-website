import type { Request, Response } from "express";
import { clientServer as client } from "../lib/prisma.js";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.EMAIL_API_KEY!);

export const registerSubscriber = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const subscriber = await client.subscribers.create({ data: { email } });
        res.json({ success: true, subscriber });
    } catch (error: any) {
        if (error.code === 'P2002') {
            return res.status(201).json({ success: true, message: "Subscriber already exists" });
        }
        res.status(500).json({ error: error.message });
    }
}

export const broadcastEvent = async (req: Request, res: Response) => {
    try {
        const { subject, text, html }: any = req.body;

        // Fetch all emails from the database
        const subscribers = await client.subscribers.findMany({
            select: { email: true }
        });

        const emails = subscribers.map((sub: { email: string }) => sub.email);

        if (emails.length === 0) {
            return res.status(404).json({ success: false, message: "No subscribers found." });
        }

        // sending mails to all subscribers securely without exposing other emails
        const msg = {
            to: emails,
            from: process.env.EMAIL_SENDER || 'ifyifeanyi301@gmail.com', // Change to your verified sender
            subject: subject || 'Update from True Vine',
            text: text || 'A new update has been posted.',
            html: html || `<strong>${text || 'A new update has been posted.'}</strong>`,
        };

        try {
            await sgMail.sendMultiple(msg);
            console.log(`Broadcasting event to ${emails.length} subscribers.`);
        } catch (mailError: any) {
            console.error('SendGrid Error:', mailError);
            if (mailError.response) {
                console.error(mailError.response.body);
            }
            return res.status(500).json({ success: false, error: "Failed to send emails via SendGrid" });
        }

        res.json({
            success: true,
            message: "Events broadcasted successfully",
            recipientsCount: emails.length,
        });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}
