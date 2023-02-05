

export default function Project ({projectData}){
    const style ={
        backgroundImage: `url(${projectData.picture})`,
    }
    return(
        <a style={style} className="abc" href={projectData.liveLink} rel="noreferrer" target="_blank">
            {/* <img className="shit" src={projectData.picture} alt="tribute page" /> */}
            <p className="project-tile"><span className="code">&lt;</span> {projectData.title} <span className="code">/&gt;</span></p>
            {/* <div id="project-links">
                <i className="fa-brands fa-github"></i>
                <a id="github-link" href={projectData.githubLink}>GitHub</a>
            </div> */}
            <a id="github-link" target="_blank" rel="noreferrer" href={projectData.githubLink}>
            <div><i className="fa-brands fa-github" ></i>
                GitHub</div>
                <hr />
            </a>
        </a>
    )
}