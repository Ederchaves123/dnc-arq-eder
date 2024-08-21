import Header from "../Components/Header/Header"
import Banner from "../Components/Banner/Banner"
import ProjectsList from "../Components/ProjectsList/ProjectsList"
import Footer from "../Components/Footer/Footer"
import { useContext } from 'react'

//CONTEXT
import { AppContext } from '../contexts/AppContext'

function Projects () {
    const appContext = useContext(AppContext)
    return(
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.projects} image="houseProjectsImage.svg"></Banner>
        <ProjectsList />
        <Footer />
        </>
    )
}

export default Projects