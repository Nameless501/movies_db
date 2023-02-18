import './ProjectTimeline.css';

function ProjectTimeline() {
    return (
        <div className='project-timeline'>
            <div className='project-timeline__timeline project-timeline__timeline_type_backend' >
                <span className='project-timeline__timeline-title' >
                    1 неделя
                </span>
            </div>
            <p className='project-timeline__title project-timeline__title_type_backend' >
                Back-end
            </p>
            <div className='project-timeline__timeline project-timeline__timeline_type_frontend' >
                <span className='project-timeline__timeline-title' >
                    4 недели
                </span>
            </div>
            <p className='project-timeline__title project-timeline__title_type_frontend' >
                Front-end
            </p>
        </div>
    );
}

export default ProjectTimeline;