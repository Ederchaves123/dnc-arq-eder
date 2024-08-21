import Header from "../Components/Header/Header"
import Banner from "../Components/Banner/Banner"
import AboutUs from "../Components/About/AboutUs"
import Footer from "../Components/Footer/Footer"
import { useContext } from 'react'

//CONTEXT
import { AppContext } from '../contexts/AppContext'


function About () {
    const appContext = useContext(AppContext)

    return(
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.about} image="houseAboutImage.svg"></Banner>
        <AboutUs />
        <Footer />
        </>
    )
}

export default About