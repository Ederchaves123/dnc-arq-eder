import './ProjectsList.css'
import { useContext, useState, useEffect } from 'react'

//ASSETS
import LikedFilled from '../../assets/Icons/Likey.svg'
import LikedOutline from '../../assets/Icons/Like.svg'

//COMPONENTS
import Button from '../Button/Button'

//UTILS
import { getApiData } from '../../services/apiServices'

//CONTEXT
import { AppContext } from '../../contexts/AppContext'

function ProjectsList() {
    const appContext = useContext(AppContext)
    const [favProjects, setFavProject] = useState([])
    const [projects, setProjects] = useState([])

    const handleSavedProjects = (id) => {
        setFavProject((prevFavProjects) => {
            if (prevFavProjects.includes(id)) {
                const filterarray = prevFavProjects.filter ((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterarray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem ('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }

        fetchData()
    }, [])

useEffect(() => {
    const savedfavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
    if (savedfavProjects) {
        setFavProject(savedfavProjects)
    }
},[])

    return (
        <div className='projectslist-section'>
            <div className='projects-hero'>
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className='projects-grid container'>
                {
                    projects ?
                    projects.map((project) => (
                        <div key={project.id} className='projects-card d-flex jc-center al-center fd-column'>
                            <div className='thumb tertiary-background' style={{backgroundImage: `url(${project.thumb})`}}></div>
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                            <Button buttonStyle="unstyled" onClick={() => handleSavedProjects(project.id)}>
                            <img src={favProjects.includes(project.id) ? LikedFilled : LikedOutline} height="20px"></img>
                            </Button>
                        </div>
                    )) :null
                }
               
            </div>

        </div>


    )
}

export default ProjectsList