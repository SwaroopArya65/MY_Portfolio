
const TimelineItem = ({ title, subject, project, date, description }) => {
    return (
        <li className="timeline-item">
            <h4 className="h4 timeline-item-title">{title}</h4>
            <span>{subject}</span>
            <span>{project}</span>
            <span>{date}</span>
            <p className="timeline-text">{description}</p>
        </li>
    )
}

export default TimelineItem
