import { Navbar } from '@/components/navbar/Navbar';
import { Hero } from '@/components/hero/Hero';
import { Approach } from '@/components/approach/Approach';
import { Pillars } from '@/components/pillars/Pillars';
import { Method } from '@/components/method/Method';
import { Community } from '@/components/community/Community';
import { About } from '@/components/about/About';
import { Footer } from '@/components/footer/Footer';
import { DiagnosticSection } from '@/components/diagnostic/DiagnosticSection';

const Home = () => {
    return (
        <div className="min-h-screen bg-white relative">
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* Approach Section */}
            <Approach />

            {/* Pillars Section */}
            <Pillars />

            {/* Method Section */}
            <Method />

            {/* Community Section */}
            <Community />

            {/* About Section */}
            <About />

            {/* Diagnostic Section */}
            <DiagnosticSection />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
