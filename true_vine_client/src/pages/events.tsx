import { useState } from "react";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import time from "../assets/icons/time.svg";
import pin from "../assets/icons/pin.svg";
import christmasNight from "../assets/images/events/christmasnight.jpeg";
import christmasCarol from "../assets/images/events/christmascarol.jpeg";
import newYear from "../assets/images/events/newyear.jpeg";
import easterFeast from "../assets/images/events/easterfeast.jpeg";
import easter from "../assets/images/events/easter.jpeg";
import thanksgiving from "../assets/images/events/thanksgiving.jpeg";
import pentecost from "../assets/images/events/penticost.jpeg";
import foundersDay from "../assets/images/events/foundersday.jpeg";
import baptism from "../assets/images/events/baptism.jpeg";
import youthCamp from "../assets/images/events/youthcamp.jpeg";
import womenConference from "../assets/images/events/womenconference.jpeg";
import menRetreat from "../assets/images/events/menretreat.jpeg";

interface ChurchEvent {
    id: number;
    title: string;
    date: string;
    month: string;
    time: string;
    description: string;
    location: string;
    category: string;
    image: string;
}

function EventsPage() {
    const [selectedEvent, setSelectedEvent] = useState<ChurchEvent | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLearnMore = (event: ChurchEvent) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedEvent(null), 300); // allow fade out animation
    };

    const events: ChurchEvent[] = [
        {
            id: 1,
            title: "Christmas Celebration",
            date: "25",
            month: "December",
            time: "All Day",
            description: "Join us for a grand celebration of the birth of Christ with special services, carols, and festive fellowship.",
            location: "Main Church Hall",
            category: "Holiday",
            image: christmasNight
        },
        {
            id: 2,
            title: "Christmas Carol Night",
            date: "24",
            month: "December",
            time: "6:00 PM",
            description: "A beautiful evening of Christmas carols, hymns, and worship celebrating the season of joy and hope.",
            location: "Main Sanctuary",
            category: "Worship",
            image: christmasCarol
        },
        {
            id: 3,
            title: "New Year Prayer & Fasting",
            date: "1",
            month: "January",
            time: "7:00 AM - 6:00 PM",
            description: "Start the year with us in prayer, fasting, and intercession for God's guidance and blessings.",
            location: "Main Church Hall",
            category: "Prayer",
            image: newYear
        },
        {
            id: 4,
            title: "Easter Fasting Week",
            date: "1 - 8",
            month: "April",
            time: "Daily",
            description: "A week of spiritual preparation with daily fasting, prayers, and scripture meditation leading to Easter Sunday.",
            location: "Main Church Hall",
            category: "Fasting",
            image: easterFeast
        },
        {
            id: 5,
            title: "Easter Sunday Celebration",
            date: "9",
            month: "April",
            time: "7:00 AM & 10:00 AM",
            description: "Celebrate the resurrection of Christ with special sunrise service and main congregation gathering.",
            location: "Main Sanctuary",
            category: "Holiday",
            image: easter
        },
        {
            id: 6,
            title: "Thanksgiving Service",
            date: "15",
            month: "November",
            time: "10:00 AM",
            description: "A special service of thanksgiving, praise, and gratitude for God's blessings throughout the year.",
            location: "Main Sanctuary",
            category: "Worship",
            image: thanksgiving
        },
        {
            id: 7,
            title: "Pentecost Celebration",
            date: "19",
            month: "May",
            time: "All Day",
            description: "Celebrate the day of Pentecost with powerful worship, teachings on the Holy Spirit, and special prayers.",
            location: "Main Church Hall",
            category: "Holiday",
            image: pentecost
        },
        {
            id: 8,
            title: "Founder's Day Celebration",
            date: "10",
            month: "August",
            time: "9:00 AM",
            description: "Join us in celebrating the founding of True Vine Ministry with special messages, testimonies, and fellowship.",
            location: "Main Church Hall",
            category: "Anniversary",
            image: foundersDay
        },
        {
            id: 9,
            title: "Baptism Service",
            date: "First Sunday",
            month: "Monthly",
            time: "After Main Service",
            description: "Public baptism service for those who have accepted Jesus Christ as their personal savior.",
            location: "Baptismal Site",
            category: "Spiritual",
            image: baptism
        },
        {
            id: 10,
            title: "Youth Camp & Retreat",
            date: "15 - 18",
            month: "July",
            time: "All Day",
            description: "An exciting weekend getaway for our youth featuring games, spiritual teachings, and bonding activities.",
            location: "Retreat Center",
            category: "Youth",
            image: youthCamp
        },
        {
            id: 11,
            title: "Women's Conference",
            date: "20 - 22",
            month: "September",
            time: "All Day",
            description: "Empowering conference for women featuring inspiring speakers, workshops, and prayer sessions.",
            location: "Main Church Hall",
            category: "Women",
            image: womenConference
        },
        {
            id: 12,
            title: "Men's Retreat & Training",
            date: "10 - 12",
            month: "October",
            time: "All Day",
            description: "A spiritual retreat for men focused on leadership, faith, and personal growth with inspiring sessions.",
            location: "Retreat Center",
            category: "Men",
            image: menRetreat
        }
    ];

    return (
        <>
            <Header />
            <main className="bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
                    <div className="container mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-4">Church Events</h1>
                        <p className="text-lg opacity-90">Join us for special gatherings, celebrations, and spiritual experiences</p>
                    </div>
                </section>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-16">
                    {/* Events Grid */}
                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {events.map((event) => (
                                <div
                                    key={event.id}
                                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden group"
                                >
                                    {/* Image Banner with Date Overlay */}
                                    <div
                                        className="relative h-48 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${event.image})` }}
                                    >
                                        {/* Dark overlay for readability */}
                                        <div className="absolute inset-0 bg-black/40"></div>
                                        
                                        {/* Date and Category */}
                                        <div className="relative h-full flex items-end p-4">
                                            <div className="w-full">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-white">
                                                        <p className="text-4xl font-bold">{event.date}</p>
                                                        <p className="text-sm opacity-90">{event.month}</p>
                                                    </div>
                                                    <div>
                                                        <span className="inline-block bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full text-xs font-semibold text-white">
                                                            {event.category}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Event Details */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                                            {event.title}
                                        </h3>
                                        <div className="space-y-3 mb-4">
                                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                                <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                                                    <img src={time} alt="time" className="w-5 h-5 filter invert" />
                                                </div>
                                                <span className="font-semibold">{event.time}</span>
                                            </p>
                                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                                <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                                                    <img src={pin} alt="location" className="w-5 h-5 filter invert" />
                                                </div>
                                                <span className="font-semibold">{event.location}</span>
                                            </p>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {event.description}
                                        </p>
                                        <button 
                                            onClick={() => handleLearnMore(event)}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Upcoming Events CTA */}
                    <section className="mt-20 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
                        <p className="text-lg mb-6 opacity-90">
                            Mark your calendars and join us for these amazing events. Each event is designed to draw you closer to God and strengthen our community.
                        </p>
                        <p className="text-lg mb-4">For event details, registration, or inquiries, please contact us</p>
                        <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition">
                            Contact Us
                        </button>
                    </section>
                </div>

                {/* Event Modal */}
                {isModalOpen && selectedEvent && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <div 
                            className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity animate-fade-in"
                            onClick={closeModal}
                        ></div>
                        
                        {/* Modal Content */}
                        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
                            <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${selectedEvent.image})` }}>
                                <div className="absolute inset-0 bg-black/20"></div>
                                <button 
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center transition"
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        {selectedEvent.category}
                                    </span>
                                    <span className="text-gray-500 text-sm font-medium">
                                        {selectedEvent.month} {selectedEvent.date}
                                    </span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedEvent.title}</h2>
                                <div className="flex flex-col gap-3 mb-6 bg-gray-50 p-4 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <img src={time} alt="time" className="w-5 h-5 opacity-70" />
                                        <span className="text-gray-700 font-medium">{selectedEvent.time}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src={pin} alt="location" className="w-5 h-5 opacity-70" />
                                        <span className="text-gray-700 font-medium">{selectedEvent.location}</span>
                                    </div>
                                </div>
                                <div className="prose max-w-none text-gray-600">
                                    <p className="text-lg leading-relaxed mb-4">{selectedEvent.description}</p>
                                    <p>
                                        We invite you to join us for this special occasion. Our community comes together to celebrate, worship, and grow in faith. Please arrive a few minutes early to find seating. We look forward to seeing you there!
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <button onClick={closeModal} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition shadow-lg hover:shadow-xl">
                                        Close Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default EventsPage;