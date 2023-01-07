import Project from "./Project"
import { useSelector } from "react-redux"

export default function Projects(){
    const projects = useSelector(store=> store.projects)
    let projectsElements = [...projects].reverse().map(project =>{ return <Project key={project.id} projectData={{...project}}/>})
    return(
        <section id="projects">
        <div id="h2poo"><h2>These are some of my projects</h2></div>
        <div id="poop">
        <div id="act-projects">
            {projectsElements}
        </div>
        </div>
        <div id="pop"><a rel="noreferrer" href="https://codepen.io/FreeCodeCamp/" target="_blank"><button>Show all <span id="code2">&gt;</span></button></a></div>
    </section>
    )
}