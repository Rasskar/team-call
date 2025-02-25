import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import '../../../css/Pages/Dashboard.css';
import { ICONS } from '../../Components/Icons/Icons';

const Dashboard = () => {
    const { message } = usePage().props;

    return (
        <div>
            {/* Start Sidebar */}
            <div className="sidebar-container">
                <h2 className="progect-name-text">Team Call</h2>
                <ul className="sidebar-menu">
                    <li className="active">
                        <a href="">
                            <i className='bx bxs-dashboard'></i>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bxs-group'></i>
                            <p>Groups</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bxs-calendar'></i>
                            <p>Calendar</p>
                        </a>
                    </li>
                </ul>
            </div>
            {/* End Sidebar */}

            {/* Start Content Container */}
            <div className="content-container">
                {/* Start Title Container */}
                <div className="title-container">
                    <h2>Dashboard</h2>
                    <a href="" className="add-call-button">
                        <i className='bx bx-plus'></i>
                    </a>
                </div>
                {/* End Title Container */}

                {/* Start Card List Container */}
                <div className="call-list-container">
                    <a href="" className="call-container">
                        <div className="image-container">
                            <img className="icon" src={ICONS.googleMeet}/>
                        </div>
                        <div className="call-info-container">
                            <h4 className="title">Title Meet</h4>
                            <p className="description">We discuss our test card, how it will look and how it will work.
                                This is an important card.</p>
                            <span className="time">13:00 - 14:00</span>
                        </div>
                    </a>

                    <a href="" className="call-container">
                        <div className="image-container">
                            <img className="icon" src={ICONS.telegram}/>
                        </div>
                        <div className="call-info-container">
                            <h4 className="title">Title Meet</h4>
                            <p className="description">We discuss our test card, how it will look and how it will work.
                                This is an important card.</p>
                            <span className="time">13:00 - 14:00</span>
                        </div>
                    </a>

                    <a href="" className="call-container">
                        <div className="image-container">
                            <img className="icon" src={ICONS.zoom}/>
                        </div>
                        <div className="call-info-container">
                            <h4 className="title">Title Meet</h4>
                            <p className="description">We discuss our test card, how it will look and how it will work.
                                This is an important card.</p>
                            <span className="time">13:00 - 14:00</span>
                        </div>
                    </a>
                </div>
                {/* End Card List Container */}
            </div>
            {/* End Content Container */}

            {/* Start Mobile Menu */}
            <div className="mobile-menu">
                <a href="" className="active">
                    <i className='bx bxs-dashboard'></i>
                </a>
                <a href="">
                    <i className='bx bxs-group'></i>
                </a>
                <a href="">
                    <i className='bx bxs-calendar'></i>
                </a>
            </div>
            {/* End Mobile Menu */}
        </div>
    );
};

export default Dashboard;
