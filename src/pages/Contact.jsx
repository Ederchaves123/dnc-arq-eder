import Header from "../Components/Header/Header"
import Banner from "../Components/Banner/Banner"
import ContactForm from "../Components/ContactForm/ContactForm"
import Footer from "../Components/Footer/Footer"
import { useContext } from 'react'

//CONTEXT
import { AppContext } from '../contexts/AppContext'

function Contact () {
    const appContext = useContext(AppContext)
    return(
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.contact} image="houseContactImage.svg"></Banner>
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact