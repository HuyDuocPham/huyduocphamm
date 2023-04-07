import Header from "./Header"
import SectionHero from "./SectionHero"
import SectionProducts from "./SectionProducts"
import SectionContact from "./SectionContact"
import Footer from "./Footer"
import Layout from "../../layouts/Guest"

const Landingpage = () => {

    return (
        <div>
            <Header />
            <SectionHero />
            <SectionProducts />
            <SectionContact />
            <Footer />
        </div>
    )
}

export default Landingpage