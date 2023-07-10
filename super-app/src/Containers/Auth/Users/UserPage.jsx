import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserImage1 from '../../../assets/Page3/UserImage1.png';
import UserImage2 from '../../../assets/Page3/UserImage2.png';
import UserImage3 from '../../../assets/Page3/UserImage3.png';
import './UserPage.css';

const UserPage = () => {
    const registrationData = JSON.parse(localStorage.getItem('registrationData'));
    const { name, email, username } = registrationData || {};
    const selectedCategories = JSON.parse(localStorage.getItem('selectedCategories'));

    return (
        <div>
            <div id="user_container">
                <div id="left_container">
                    <div id="left_container_up">
                        <div id="user_image">
                            <img src={UserImage1} alt="UserDetails" id='userImage1' />
                        </div>
                        <div id="data_category">
                            <div id="user_data_buttons">
                                {name && email && username && (
                                    <div className="user-data">
                                        <p className='actual_data'>{name}</p>
                                        <p className='actual_data'>{email}</p>
                                        <p className='actual_data' id='username_bold'>{username}</p>
                                    </div>
                                )}
                            </div>
                            <div className="category-list data-categories" id="genre-list">
                                {selectedCategories && selectedCategories.length > 0 ? (
                                    selectedCategories.map((category, index) => (
                                        <button key={index} id='buttons_div'>{category}</button>
                                    ))
                                ) : (
                                    <p>No categories selected</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div id='left_container_down'>
                        <img src={UserImage2} alt="Forecast" id='image_fore'/>
                    </div>
                </div>
                <div id='right_container'>
                    <img src={UserImage3} alt="MountEverest" id='image_mount'/>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
