import Header from "../components/common/header";
import Footer from "../components/common/footer";

function MinistriesPage() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-12">
                <section className="mb-12">
                    <h2 className="text-4xl font-bold mb-6">Ministries</h2>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default MinistriesPage;