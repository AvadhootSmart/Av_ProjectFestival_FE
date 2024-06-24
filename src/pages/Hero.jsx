import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import Pager from "../components/Pager";
import CTA from "../components/CTA";

export default function Hero() {

    return (
        <>
            <div className="hero bg-[url('/festival.jpg')] bg-cover bg-center h-screen w-full">
                <Navbar />
                <Pager number="01" content="July 15-17, 2024 | Miami, FL" color = 'white' />
                <HeroText />
                <CTA text = 'buy tickets' color = 'white' />
            </div>
        </>
    );
}
