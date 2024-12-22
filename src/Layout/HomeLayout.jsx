import React from 'react';
import Slider from '../components/Slider';
import Stats from '../components/Stats';
import LanguageCategories from '../components/LanguageCategories';

const HomeLayout = () => {
    return (
        <div>
            <Slider></Slider>
            <div className='w-11/12 mx-auto'>
            <Stats></Stats>
            <LanguageCategories></LanguageCategories> 
            </div>
        </div>
    );
};

export default HomeLayout;