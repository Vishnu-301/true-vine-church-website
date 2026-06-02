import { useState } from "react";
import { baseURL } from "../config/api";

export default function Dashboard() {
    const [formData, setFormData] = useState({
        subject: "",
        text: "",
        html: "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<"success" | "error" | "">();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleBroadcast = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        if (!formData.subject.trim() || (!formData.text.trim() && !formData.html.trim())) {
            setMessageType("error");
            setMessage("Please fill in at least Subject and either Text or HTML content.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${baseURL}/api/broadcast-event`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok || data.success) {
                setMessageType("success");
                setMessage("✓ Event broadcasted successfully to all subscribers!");
                setFormData({ subject: "", text: "", html: "" });
                setTimeout(() => setMessage(""), 3000);
            } else {
                setMessageType("error");
                setMessage(data.message || "Failed to broadcast event. Please try again.");
            }
        } catch (error) {
            setMessageType("error");
            setMessage("An error occurred. Please try again.");
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Event Dashboard</h1>
                <p className="text-gray-600 mb-8">Compose and broadcast events to all subscribers</p>

                <form onSubmit={handleBroadcast} className="space-y-6">
                    {/* Subject Field */}
                    <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                            Subject *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Enter event subject (e.g., 'New Service Launch')"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Text Content Field */}
                    <div>
                        <label htmlFor="text" className="block text-sm font-semibold text-gray-700 mb-2">
                            Plain Text Content
                        </label>
                        <textarea
                            id="text"
                            name="text"
                            value={formData.text}
                            onChange={handleChange}
                            placeholder="Enter the plain text version of your event"
                            rows={5}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* HTML Content Field */}
                    <div>
                        <label htmlFor="html" className="block text-sm font-semibold text-gray-700 mb-2">
                            HTML Content (Optional)
                        </label>
                        <textarea
                            id="html"
                            name="html"
                            value={formData.html}
                            onChange={handleChange}
                            placeholder="Enter HTML formatted content for rich emails (optional)"
                            rows={5}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                        />
                        <p className="text-xs text-gray-500 mt-2">
                            Example: &lt;h2&gt;Hello!&lt;/h2&gt;&lt;p&gt;This is formatted HTML&lt;/p&gt;
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400"
                    >
                        {loading ? "Broadcasting..." : "Broadcast Event"}
                    </button>
                </form>

                {/* Message Display */}
                {message && (
                    <div
                        className={`mt-6 p-4 rounded-lg text-sm ${
                            messageType === "success"
                                ? "bg-green-100 text-green-700 border border-green-300"
                                : "bg-red-100 text-red-700 border border-red-300"
                        }`}
                    >
                        {message}
                    </div>
                )}

                {/* Info Box */}
                <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <h3 className="font-semibold text-blue-900 mb-2">ℹ️ About Broadcasting</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Events will be sent to all active subscribers</li>
                        <li>• HTML content is optional; plain text will be used as fallback</li>
                        <li>• Recipients will not see each other's email addresses</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
