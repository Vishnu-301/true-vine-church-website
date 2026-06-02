import type { Request, Response } from "express";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.EMAIL_API_KEY!);

export const sendContactMessage = async (req: Request, res: Response) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        const msg = {
            to: process.env.EMAIL_SENDER || "true.vine@gmail.com",
            from: process.env.EMAIL_SENDER || "true.vine@gmail.com",
            replyTo: email,
            subject: `[True Vine Contact] ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1d4ed8;">New Contact Message — True Vine Church</h2>
                    <table style="width:100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td><td style="padding: 8px 0; color: #4b5563;">${name}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td><td style="padding: 8px 0; color: #4b5563;">${email}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td><td style="padding: 8px 0; color: #4b5563;">${subject}</td></tr>
                    </table>
                    <hr style="border: 1px solid #e5e7eb; margin: 16px 0;" />
                    <h3 style="color: #374151;">Message</h3>
                    <p style="color: #4b5563; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
                </div>
            `,
        };

        await sgMail.send(msg);
        console.log(`Contact message received from ${name} <${email}>`);

        res.json({ success: true, message: "Your message has been sent. We'll get back to you shortly!" });
    } catch (error: any) {
        console.error("Contact form error:", error);
        res.status(500).json({ success: false, error: "Failed to send message. Please try again." });
    }
};
