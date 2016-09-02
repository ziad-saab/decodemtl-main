import React from 'react';

import CourseHero from '../modules/CourseHero';
import CourseOverview from '../modules/CourseOverview';
import CourseTuitionDates from'../modules/CourseTuitionDates';
import CourseCurriculum from '../modules/CourseCurriculum';
import FormOptin from '../modules/FormOptin';
import CourseInstructor from '../modules/CourseInstructor';
import SecondaryNav from '../navigation/SecondaryNav';
import CourseTestimonial from '../modules/CourseTestimonial';
import CourseSchedule from '../modules/CourseSchedule';
import CourseProjectsSlider from '../modules/CourseProjectsSlider';

import tuitionDates from '../../../config/tuitionDates';
import subjects from '../../../config/subjects';
import instructors from '../../../config/instructors';
import testimonials from '../../../config/testimonials';
import projects from '../../../config/projects';

import instructorImage from '../../assets/images/profile-team-ziad.jpg';



const Courses = React.createClass({
    getInitialState() {
        return {
            secondaryNav: false
        };
    },
    componentDidMount() {
        window.addEventListener('scroll', this._handleScroll);
    },
    componentWillUnmount() {
        window.removeEventListener('scroll', this._handleScroll);
    },
    _handleScroll(e) {
        const headerWrapper = this._hero._headerWrapper;
        const scrollPosition = headerWrapper.offsetTop + headerWrapper.offsetHeight;
        if(window.innerWidth < 800) {
            this.setState({
                secondaryNav: false
            });
            return;
        }
        if(window.scrollY > scrollPosition && !this.state.secondaryNav) {
            this.setState({
                secondaryNav: true
            })
        } else if (window.scrollY < scrollPosition && this.state.secondaryNav) {
            this.setState({
                secondaryNav: false
            });
        }
    },
    render() {
        return (
            <div>
                <SecondaryNav display={this.state.secondaryNav}/>
                <CourseHero ref={hero => {this._hero = hero}}/>
                <CourseOverview/>
                <CourseTuitionDates tuitionDates={tuitionDates}/>
                <CourseCurriculum subjects={subjects}/>
                <FormOptin/>
                <CourseTestimonial src={instructorImage} {...testimonials['Captain Planet']}/>
                <CourseSchedule/>
                <CourseProjectsSlider projects={projects}/>
                <CourseInstructor {...instructors['Ziad Saab']} src={instructorImage}/>
            </div>
        );
    }
});

export default Courses;


