

export default function Project ({projectData}){
    const style ={
        backgroundImage: `url(${projectData.picture})`,
    }
    return(
        <a style={style} className="abc" href={projectData.liveLink} rel="noreferrer" target="_blank">
            {/* <img className="shit" src={projectData.picture} alt="tribute page" /> */}
            <p className="project-tile"><span className="code">&lt;</span> {projectData.title} <span className="code">/&gt;</span></p>
        </a>
    )
}