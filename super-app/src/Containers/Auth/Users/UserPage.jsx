import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserImage1 from '../../../assets/Page3/UserImage1.png';
import UserImage2 from '../../../assets/Page3/UserImage2-1.png';
import UserImage3 from '../../../assets/Page3/news.jpg';
import './UserPage.css';
import WeatherWidget from './WeatherWidget';
import NewsSection from './NewsSection';
import NotesSection from './NoteSection';

const UserPage = () => {
    const registrationData = JSON.parse(localStorage.getItem('registrationData'));
    const { name, email, username } = registrationData || {};
    const selectedCategories = JSON.parse(localStorage.getItem('selectedCategories'));

    return (
        <div>
            <div id="user_container">
                <div id="left_container">
                    <div id="left_container_up">
                        <div id='user_data'>
                            <div id="user_image">
                                <img src={UserImage1} alt="UserDetails" id='userImage1' />
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
                        </div>
                        <div id='weather_widget'>
                            <div id='weather_widget_div'>
                                <img src={UserImage2} alt="Forecast" id='image_fore' />
                                <div id='weather_reports'>
                                    <WeatherWidget />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='left_container_up_right'>
                        <div id='note_widget'>
                            <NotesSection />
                        </div>
                    </div>
                    <div id='left_container_up_right_right'>
                        <div id='image_div'>
                            <img src={UserImage3} alt="News" id='image_news' />
                        </div>
                        <div id='news_section'>
                            <NewsSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
