import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ActionImage from '../../../assets/CategoryImages/ActionImage.png';
import DramaImage from '../../../assets/CategoryImages/DramaImage.png';
import RomanceImage from '../../../assets/CategoryImages/RomanceImage.png';
import ThrillerImage from '../../../assets/CategoryImages/ThrillerImage.png';
import WesternImage from '../../../assets/CategoryImages/WesternImage.png';
import HorrorImage from '../../../assets/CategoryImages/HorrorImage.png';
import FantasyImage from '../../../assets/CategoryImages/FantasyImage.png';
import MusicImage from '../../../assets/CategoryImages/MusicImage.png';
import FictionImage from '../../../assets/CategoryImages/FictionImage.png';
import VectorImage from '../../../assets/CategoryImages/VectorImage.png';
import './CategoryPage.css'

const SelectCategoryPage = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const storedCategories = localStorage.getItem('selectedCategories');
        if (storedCategories) {
            setSelectedCategories(JSON.parse(storedCategories));
        }
    }, []);

    const handleCategoryClick = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories((prevSelectedCategories) =>
                prevSelectedCategories.filter((selectedCategory) => selectedCategory !== category)
            );
        } else {
            setSelectedCategories((prevSelectedCategories) => [...prevSelectedCategories, category]);
        }
    };

    useEffect(() => {
        localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    }, [selectedCategories]);


    const handleDeleteGenre = (genre) => {
        setSelectedCategories((prevSelectedCategories) =>
            prevSelectedCategories.filter((selectedCategory) => selectedCategory !== genre)
        );
    };

    const handleNextPage = () => {
        if (selectedCategories.length >= 3) {
        } else {
            setShowError(true);
        }
    };

    return (
        <div>
            <div className='category_container'>
                <div className='selected_category'>
                    <div id='heading_category'>
                        <h1>Super app</h1>
                    </div>
                    <div id='choose_category'>
                        <p>Choose your<br />entertainment<br />category</p>
                    </div>
                    <div id='selected_genres'>
                        {selectedCategories.length > 0 ? (
                            <div className="genre-list">
                                {selectedCategories.map((genre) => (
                                    <div key={genre} className="genre-item">
                                        <button
                                            className="delete-button"
                                            onClick={() => handleDeleteGenre(genre)}
                                        >
                                            <span className="genre-name">{genre}</span>
                                            <span id='x_id'> X</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No genres selected</p>
                        )}
                    </div>
                    <div id='condition_div'>
                        <img src={VectorImage} alt="error" id='vector_image' />
                        <span>Minimum 3 category required</span>
                    </div>
                </div>
                <div className="category-grid">
                    <div>
                        <button
                            className={`category-button ${selectedCategories.includes('Action') ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick('Action')}
                        >
                            <img src={ActionImage} alt="Action" className="category-image" />
                            {/* {selectedCategories.includes('Action') && (
                        <span className="close-button" onClick={() => handleCategoryClick('Action')}></span>
                    )} */}
                        </button>
                        <button
                            className={`category-button ${selectedCategories.includes('Drama') ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick('Drama')}
                        >
                            <img src={DramaImage} alt="Drama" className="category-image" />
                            {/* {selectedCategories.includes('Drama') && (
                        <span className="close-button" onClick={() => handleCategoryClick('Drama')}>

                        </span>
                    )} */}
                        </button>
                        <button
                            className={`category-button ${selectedCategories.includes('Romance') ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick('Romance')}
                        >
                            <img src={RomanceImage} alt="Romance" className="category-image" />
                            {/* {selectedCategories.includes('Romance') && (
                        <span className="close-button" onClick={() => handleCategoryClick('Romance')}>

                        </span>
                    )} */}
                        </button>
                    </div>
                    <div>
                        <button
                            className={`category-button ${selectedCategories.includes('Thriller') ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick('Thriller')}
                        >
                            <img src={ThrillerImage} alt="Thriller" className="category-image" />
                            {/* {selectedCategories.includes('Thriller') && (
                        <span className="close-button" onClick={() => handleCategoryClick('Thriller')}>
                        
                        </span>
                    )} */}
                        </button>
                        <button
                            className={`category-button ${selectedCategories.includes('Western') ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick('Western')}
                        >
                            <img src={WesternImage} alt="Western" className="category-image" />
                            {/* {selectedCategories.includes('Western') && (
                        <span className="close-button" onClick={() => handleCategoryClick('Western')}>
                        
                        </span>
                    )} */}
                        </button>
                        <button
                            className={`category-button ${selectedCategories.includes('Horror') ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick('Horror')}
                        >
                            <img src={HorrorImage} alt="Horror" className="category-image" />
                            {/* {selectedCategories.includes('Horror') && (
                        <span className="close-button" onClick={() => handleCategoryClick('Horror')}>
                        
                        </span>
                    )} */}
                        </button>
                    </div>
                    <div>
                        <button
                            className={`category-button ${selectedCategories.includes('Fantasy') ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick('Fantasy')}
                        >
                            <img src={FantasyImage} alt="Fantasy" className="category-image" />
                            {/* {selectedCategories.includes('Fantasy') && (
                        <span className="close-button" onClick={() => handleCategoryClick('Fantasy')}>
                        
                        </span>
                    )} */}
                        </button>
                        <button
                            className={`category-button ${selectedCategories.includes('Music') ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick('Music')}
                        >
                            <img src={MusicImage} alt="Music" className="category-image" />
                            {/* {selectedCategories.includes('Music') && (
                        <span className="close-button" onClick={() => handleCategoryClick('Music')}>
                        
                        </span>
                    )} */}
                        </button>
                        <button
                            className={`category-button ${selectedCategories.includes('Fiction') ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick('Fiction')}
                        >
                            <img src={FictionImage} alt="Fiction" className="category-image" />
                            {/* {selectedCategories.includes('Fiction') && (
                        <span className="close-button" onClick={() => handleCategoryClick('Fiction')}>
                        
                        </span>
                    )} */}
                        </button>
                    </div>
                    <div id='next_button'>
                        {showError && <p id='next_page_error'>Please select at least 3 categories.</p>}
                        <button className='delete-button' id='next_button_id' onClick={handleNextPage}>
                            Next Page
                        </button>
                        <Link to="/user-page">S</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectCategoryPage;