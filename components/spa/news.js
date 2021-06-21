import React from 'react';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Carousel from 'react-multi-carousel';

import css from '../../styles/common.module.scss';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const DATA = [
    {
        image: '/img/news9.png',
        date: 'July 09, 2021',
        title: 'Meet the BART goats:',
        detail: "BART is relying on a voracious herd of goats to graze on dry vegetation on BART's right-of-way property. Facing another dry, hot summer in the Bay Area, these goats are helping...",
        link: 'https://twitter.com/sfbart/status/1413216293990273026?s=12',
    },
    {
        image: '/img/news2.png',
        date: 'Jun 29, 2021',
        title: 'New York Farm Business Skyrockets With Snowshoeing Goats',
        detail: 'The initial grazing area is within SDG&E-owned transmission corridor property in Chula Vista, and other company locations...',
        link: 'https://www.nbcsandiego.com/news/local/goats-hired-by-sdge-for-wildfire-fighting-pilot-program/2598885/',
    },
    {
        image: '/img/news6.jpg',
        date: 'Jun 26, 2021',
        title: 'Using Goats to Prevent Wildfires',
        detail: 'The new kids on the block were at dinner, several hundred of them, chomping, chomping, punctuated by an occasional bleat. The arid hillside in our suburban...',
        link: 'https://www.smithsonianmag.com/science-nature/using-goats-to-prevent-wildfires-51327045/',
    },
    {
        image: '/img/news8.png',
        date: 'Jun 26, 2021',
        title: 'Study Finds Goats Can Understand Human Gestures Like Pointing',
        detail: 'According to a new study in the journal Frontiers in Psychology, goats can interpret human cues, such as the pointing gesture...',
        link: 'https://people.com/pets/goats-can-understand-human-pointing/',
    },
    {
        image: '/img/news1.jpg',
        date: 'May 07, 2021',
        title: 'Goats Hired by SDG&E for Wildfire-Fighting Pilot Program',
        detail: "The utility's Goat Grazing pilot program utilizes the animals to clear brush and other vegetation-ignition sources around electric...",
        link: 'https://www.nbcsandiego.com/news/local/goats-hired-by-sdge-for-wildfire-fighting-pilot-program/2598885/',
    },
    {
        image: '/img/news5.png',
        date: 'April 16, 2021',
        title: 'Hungry Firefighting Goats are Helping California Prepare for the 2021 Wildfire Season',
        detail: 'After the San José State University (SJSU) Fire Weather Research Laboratory announced...',
        link: 'https://people.com/pets/hungry-firefighting-goats-help-prevent-california-wildfires/',
    },
    {
        image: '/img/news7.png',
        date: 'March 31, 2020',
        title: 'Wild Mountain Goats Take Over Streets of Welsh Town as Residents Self-Isolate Amid Coronavirus',
        detail: 'As people across the globe are remaining indoors during the ongoing novel coronavirus...',
        link: 'https://people.com/pets/wild-mountain-goats-wales-take-over-welsh-town-coronavirus/',
    },
];

const sortedData = DATA.sort(function (a, b) {
    return b.date - a.date;
});

export function News() {
    return (
        <div id="news" className={css.newsSection}>
            <h1 className={css.newsTitle}>Recent News</h1>
            <div className={css.newsBody}>
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    autoPlay={true}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass={css.carousel_container}
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {sortedData.map((data, i) => {
                        const key = `news-article{$i}`;
                        return (
                            <div className={css.newsCard} key={key}>
                                <div className={css.newsCardImage}>
                                    <img
                                        className={css.newsImage}
                                        src={data.image}
                                    />
                                </div>
                                <div className={css.newsDate}>
                                    <AccessTimeIcon
                                        className={css.newsAccessTime}
                                    />
                                    <p>{data.date}</p>
                                </div>
                                <p className={css.newsCardTitle}>
                                    {data.title}
                                </p>
                                <p className={css.newsCardDetail}>
                                    {data.detail}
                                </p>

                                <a
                                    target="_blank"
                                    href={data.link}
                                    className={css.readNews}
                                >
                                    <div className={css.newsRead}>
                                        <VisibilityIcon />
                                        Read
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}
