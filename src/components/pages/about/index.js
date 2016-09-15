import React from 'react';

import Hero from '../../../components/modules/Hero';
import GenericTextModule from '../../../components/modules/GenericTextModule';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';
import QuoteModule from '../../../components/modules/QuoteModule';
import Overview from '../../../components/modules/Overview';

import quoteBackground from '../../../assets/images/module-bg-about-quote.jpg';

const About = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {

        const p1 = [
            (<p className="text-measure">Traditional schools teach in old ways, and we knew there was a better way. We want to inspire and motivate people to reach their potential, to step outside their comfort zone, and ultimately pursue work they love.</p>),
        ];

        const p2 = [

            {text: 'Quality over quantity'},
            {text: 'Passion (Both in our staff and our students)'},
            {text: 'Don’t take things to seriously (You can learn and have fun at the same time)'},
            {text: 'Outcomes (Your success is our priority)'},
            {text: 'Creativity, innovation, and hardwork'},
        ];

        const p3 = [
            <ul className="petal-icon-list">
                <li><span className="petal-icon" aria-hidden="true" />Project based teaching</li>
                <li><span className="petal-icon" aria-hidden="true" />No grades, tests, or exams</li>
                <li><span className="petal-icon" aria-hidden="true" />Learn from your mistakes</li>
                <li><span className="petal-icon" aria-hidden="true" />Your hardwork will pay off</li>
            </ul>
        ];

        const contentLeft = (
            (<p className="text-measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aperiam, autem corporis cupiditate dicta dolorem ea fugit incidunt maxime nemo odio perspiciatis, porro quidem quis repellat soluta totam. Placeat, vel.</p>)
        );

        const contentRight = (
            <img src="https://unsplash.it/900/540?image=0" alt=""/>
        );
        return (
            <div>
                <Hero moduleTitle={'made in'} jumboTitle={'montreal'} text={""} subText={''}/>
                <OneHalfColumn mainTitle={'How we started'} text={''} contentLeft={contentLeft} contentRight={contentRight}/>
                <GenericTextModule title={'Why we do it'} subTitle={''} paragraphs={p1}/>
                <Overview overview={p2} title='Our values'/>
                <QuoteModule background={quoteBackground}/>
                <GenericTextModule title={'Our teaching methodology'} paragraphs={p3}/>
            </div>
        );
    }
});

export default About;