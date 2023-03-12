import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Contact from '../components/Contact'
import CarouselBox from "../components/CarouselBox";
import ScrollUp from "../components/ScrollUp";

const Home = () => {
    return (
        <main>
            <h2>Home Page</h2>
            <Hero/>
            <Services/>
            <Contact/>
            <Footer/>
            <ScrollUp/>
        </main>

);
};
export default Home;