import { useState } from "react";
import { baseURL } from "../../config/api";

export default function SubscriptionBox() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<"success" | "error" | "">();

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch(`${baseURL}/api/register-subscriber`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok || data.success) {
                setMessageType("success");
                setMessage("✓ Thank you for subscribing!");
                setEmail("");
                setTimeout(() => setMessage(""), 3000);
            } else {
                setMessageType("error");
                setMessage(data.message || "Subscription failed. Please try again.");
            }
        } catch (error) {
            setMessageType("error");
            setMessage("An error occurred. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-12 px-4 bg-linear-to-r from-blue-50 to-purple-50">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Connected</h3>
                <p className="text-gray-600 text-sm mb-6">
                    Subscribe to receive updates about our latest events and announcements.
                </p>

                <form onSubmit={handleSubscribe} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400"
                    >
                        {loading ? "Subscribing..." : "Subscribe"}
                    </button>
                </form>

                {message && (
                    <div
                        className={`mt-4 p-3 rounded text-sm ${
                            messageType === "success"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }`}
                    >
                        {message}
                    </div>
                )}
            </div>
        </section>
    );
}
