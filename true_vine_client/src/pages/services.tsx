import Header from "../components/common/header";
import Footer from "../components/common/footer";
import sunrise from "../assets/icons/sunrise.svg";
import church from "../assets/icons/church.svg";
import bible from "../assets/icons/bible.svg";
import prayer from "../assets/icons/prayer.svg";
import group from "../assets/icons/group.svg";
import cross from "../assets/icons/cross.svg";

interface Activity {
    day: string;
    events: {
        name: string;
        time: string;
        description: string;
        icon: string;
    }[];
}

function ServicesPage() {
    const activities: Activity[] = [
        {
            day: "Sunday",
            events: [
                {
                    name: "Early Service",
                    time: "7:00 AM",
                    description: "Begin your day in worship and prayer for a blessed morning",
                    icon: sunrise
                },
                {
                    name: "Main Service",
                    time: "10:00 AM",
                    description: "Join our main congregation for worship, preaching, and fellowship",
                    icon: church
                }
            ]
        },
        {
            day: "Monday",
            events: [
                {
                    name: "Bible Study",
                    time: "10:00 AM",
                    description: "Deep dive into scripture study and spiritual growth",
                    icon: bible
                }
            ]
        },
        {
            day: "Wednesday",
            events: [
                {
                    name: "Fellowship & Prayers",
                    time: "4:00 PM",
                    description: "Evening fellowship, prayer sessions, and community sharing",
                    icon: prayer
                }
            ]
        },
        {
            day: "Friday",
            events: [
                {
                    name: "Morning Devotion",
                    time: "6:00 AM",
                    description: "Start your Friday with prayer and scripture reflection",
                    icon: sunrise
                },
                {
                    name: "Evening Prayers",
                    time: "6:00 PM",
                    description: "Gather for evening prayers and worship before the night vigil",
                    icon: prayer
                },
                {
                    name: "Night Vigil",
                    time: "10:00 PM",
                    description: "Join us for a powerful night of prayer, worship, and spiritual breakthrough",
                    icon: church
                }
            ]
        },
        {
            day: "Ongoing",
            events: [
                {
                    name: "Sunday School",
                    time: "After Main Service",
                    description: "Christian education for children and adults",
                    icon: bible
                },
                {
                    name: "Youth Group",
                    time: "Fridays - 6:00 PM",
                    description: "Games, activities, and spiritual mentoring for youth",
                    icon: group
                },
                {
                    name: "Women's Ministry",
                    time: "Contact Church",
                    description: "Support, prayer, and community for women",
                    icon: prayer
                },
                {
                    name: "Men's Ministry",
                    time: "Contact Church",
                    description: "Leadership, mentoring, and spiritual development",
                    icon: group
                }
            ]
        }
    ];

    return (
        <>
            <Header />
            <main className="bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
                    <div className="container mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-4">Our Services & Activities</h1>
                        <p className="text-lg opacity-90">Join us for worship, fellowship, and spiritual growth</p>
                    </div>
                </section>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-16">
                    {/* Weekly Schedule */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Weekly Schedule</h2>
                        <div className="grid grid-cols-5 gap-8">
                            {activities.map((activity, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden"
                                >
                                    <div className="bg-linear-to-r from-blue-500 to-purple-500 text-white p-4">
                                        <h3 className="text-2xl font-bold">{activity.day}</h3>
                                    </div>
                                    <div className="p-6">
                                        {activity.events.map((event, eventIdx) => (
                                            <div key={eventIdx} className="mb-6 last:mb-0">
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center p-2">
                                                        <img src={event.icon} alt={event.name} className="w-8 h-8 filter brightness-0 invert" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-lg text-gray-900">{event.name}</h4>
                                                        <p className="text-blue-600 font-semibold text-sm">{event.time}</p>
                                                        <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                                                    </div>
                                                </div>
                                                {eventIdx < activity.events.length - 1 && (
                                                    <div className="border-t border-gray-200 mt-4 pt-4" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Quick Info Section */}
                    <section className="bg-white rounded-lg shadow-lg p-12 mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Join Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center p-3">
                                        <img src={group} alt="Community" className="w-10 h-10 filter brightness-0 invert" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Welcoming Community</h3>
                                <p className="text-gray-600">Experience the warmth of a caring, loving church family</p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center p-3">
                                        <img src={cross} alt="Growth" className="w-10 h-10 filter brightness-0 invert" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Spiritual Growth</h3>
                                <p className="text-gray-600">Grow in faith through inspiring messages and Bible study</p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center p-3">
                                        <img src={prayer} alt="Transformation" className="w-10 h-10 filter brightness-0 invert" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Life Transformation</h3>
                                <p className="text-gray-600">Experience personal and spiritual transformation through Christ</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
                        <p className="text-lg mb-6 opacity-90">
                            Come as you are. We welcome everyone with open hearts and open doors.
                        </p>
                        <p className="text-lg mb-4"><strong>True Vine Ministry</strong></p>
                        <p className="text-lg">For more information, visit our Connect page or contact us directly</p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default ServicesPage;