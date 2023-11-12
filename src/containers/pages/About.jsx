import CardAbout from "components/about/CardAbout"
import Header from "components/about/header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function About(){
    return(
        <Layout>
            <Navbar />
            <div className="pt-28">
                <Header />
                <CardAbout />
                
            </div>
                <Footer />
            
        </Layout>
    )
}
export default About