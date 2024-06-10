import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css'
import SkillItem from '../SkillItem/SkillItem';
import './Skills.scss';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import java from '../../assets/java.png';
import js from '../../assets/js.png';
import linux from '../../assets/linux.png';
import nodejs from '../../assets/nodejs.png';
import photoshop from '../../assets/photoshop.png';
import python from '../../assets/python.png';
import react from '../../assets/react.png';
import router from '../../assets/router.png';
import springboot from '../../assets/springboot.png';
import windows from '../../assets/windows.png';

export default function Skills () {
    return (
        <div className='skills'>
            <Swiper
                modules={ [Autoplay] }
                slidesPerView={ 8 }
                loop={ true }
                autoplay={ {
                    delay: 2000,
                } }
                spaceBetween={ 30 }
                breakpoints={ {
                    1600: {
                        slidesPerView: 8
                    },
                    1200: {
                        slidesPerView: 6
                    },
                    992: {
                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 3
                    },
                    576: {
                        slidesPerView: 2
                    },
                    0: {
                        slidesPerView: 1
                    }
                } }
            >
                <SwiperSlide><SkillItem skill={ "HTML" } img={ html } /></SwiperSlide>
                <SwiperSlide><SkillItem skill={ "CSS" } img={ css } /></SwiperSlide>
                <SwiperSlide><SkillItem skill={ "JavaScript" } img={ js } /></SwiperSlide>
                <SwiperSlide><SkillItem skill={ "React.js" } img={ react } /></SwiperSlide>
                <SwiperSlide><SkillItem skill={ "Node.js" } img={ nodejs } /></SwiperSlide>
                <SwiperSlide><SkillItem skill={ "Java" } img={ java } /></SwiperSlide>
                <SwiperSlide><SkillItem skill={ "Spring Boot" } img={ springboot } /></SwiperSlide>
                <SwiperSlide><SkillItem skill={ "Python" } img={ python } /></SwiperSlide>
                <SwiperSlide><SkillItem skill={ "Photoshop" } img={ photoshop } /></SwiperSlide>
                <SwiperSlide><SkillItem skill={ "Linux" } img={ linux } /></SwiperSlide>
                <SwiperSlide><SkillItem skill={ "Windows Server" } img={ windows } /></SwiperSlide>
                <SwiperSlide><SkillItem skill={ "Computer Networks" } img={ router } /></SwiperSlide>
            </Swiper>
        </div>
    );
}
