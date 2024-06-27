import Footer from "./components/Footer";
import About from "./pages/About";
import Attractions from "./pages/Attractions";
import Hero from "./pages/Hero";
import LocationDets from "./pages/LocationDets";
import Schedule from "./pages/Schedule";
import TicketInfo from "./pages/TicketInfo";

function App() {
    return (
        <>
            <Hero />
            <About />
            <Attractions />
            <TicketInfo/>
            <LocationDets/>
            <Schedule/>
            <Footer/>

        </>
    );
}

export default App;
