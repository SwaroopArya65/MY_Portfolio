import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
    return (
        <section>
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <div className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <FaBookReader />
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    <TimelineItem
                        title="Annada Collage Hazaribagh"
                        subject="Bachlor Of Computer Application"
                        date="2019 — 2022"
                        description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
                    />
                    <TimelineItem
                        title="Annada Collage Hazaribagh"
                        subject="ISC Class 12th"
                        date="2017 — 2018"
                        description="Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis."
                    />
                    <TimelineItem
                        title="Saraswati Shishu Vidya Mandir Barganda Giridih"
                        subject="Class 10th"
                        date="2010 — 2012"
                        description="Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."
                    />
                </ol>
            </div>

            <div className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <FaRegBookmark />
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>
                <ol className="timeline-list">
                    <TimelineItem
                        title="BrightCode Software Services jharkhand Pvt.Ltd"
                        project="School System"
                        date="Oct 19-2023 to Jan 19-2024"
                        description="Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
                    />
                    <TimelineItem
                        title="Brain4ce Education Solutions Pvt. Ltd."
                        project="Zomato Website Clone - Meal Website"
                        date="Aug 01-2023 to Oct 01-2023"
                        description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
                    />
                </ol>
            </div>

            <div className="skill">
                <h3 className="h3 skills-title">My skills</h3>
                <ul className="skills-list content-card">
                    <SkillItem title="Web design" value={80} />
                    <SkillItem title="Graphic design" value={70} />
                    <SkillItem title="React" value={90} />
                    <SkillItem title="Node Js" value={80} />
                    <SkillItem title="Express Js" value={75} />
                    <SkillItem title="MongoDB" value={77} />
                    <SkillItem title="MySQL" value={75} />
                    <SkillItem title="Java" value={80} />
                    <SkillItem title="HTML5" value={95} />
                    <SkillItem title="CSS" value={85} />
                    <SkillItem title="JavaScript" value={80} />
                    <SkillItem title="Bootstrap" value={78} />
                    <SkillItem title="Taildwind CSS" value={70} />
                    <SkillItem title="C++" value={80} />
                </ul>
            </div>
        </section>
    );
};

export default Resume;