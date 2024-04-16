// import React from 'react'
import { GiClawSlashes } from "react-icons/gi";
import { GiMailbox } from "react-icons/gi";
import { GiPhone } from "react-icons/gi";
import { GiCalendar } from "react-icons/gi";
import { GiLayeredArmor } from "react-icons/gi";


const Aside = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src="/public/images/arya.jpg" alt="" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name">Arya Swaroop</h1>
                    <p className="title">Full stack developer</p>
                </div>
                <button className="info_more-btn">
                    <span>show Contact</span>
                    <GiClawSlashes />
                </button>
            </div>

            {/* Contact Info */}
            <div className="sidebar-info_more">
                <hr className="separator2" />
                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            {<GiMailbox />}
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:aryaswaroop027@gmail.com" className="contact-link">aryaswaroop027@gmail.com</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            {<GiPhone />}
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">PHONE</p>
                            <a href="tel:(+91) 8340168072" className="contact-link">(+91) 83 4016 8072</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            {<GiCalendar />}
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">BIRTHDAY</p>
                            <time dateTime="2002-08-21" className="contact-link">Augest 21 2002</time>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            {<GiLayeredArmor />}
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">LOCATION</p>
                            <address>Namkum Shadhabhar, Ranchi</address>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside
