import React from 'react';

import EcoIcon from '@material-ui/icons/Eco';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import NatureIcon from '@material-ui/icons/Nature';
import PanToolIcon from '@material-ui/icons/PanTool';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';

import css from '../../styles/common.module.scss';

export function Environment() {
    return (
        <div id="environment" className={css.environmentalSection}>
            <h1>Environmental Benefit</h1>
            <h1>of Goats</h1>
            <div className={css.environmentalBody}>
                <div className={css.card}>
                    <div className={css.cardIcon}>
                        <FastfoodIcon fontSize="large" />
                    </div>
                    <div className={css.cardTitle}>
                        <p>Raise your own meat</p>
                    </div>

                    <div className={css.cardDetail}>
                        <p className={css.cardDetailFull}>
                            Raising goats for meat can be a great thing to do
                            for your own family, to provide for your food needs,
                            but it can also be a profitable small farm business.
                        </p>
                    </div>
                </div>
                <div className={css.card}>
                    <div className={css.cardIcon}>
                        <FormatColorFillIcon fontSize="large" />
                    </div>
                    <div className={css.cardTitle}>
                        <p>Produce milk</p>
                    </div>
                    <div className={css.cardDetail}>
                        <p className={css.cardDetailFull}>
                            Dairy goats give copious amounts of milk, usually
                            more than a family can use. You can make goat
                            cheese, goat yogurt, and whatever other dairy
                            products you can dream up.
                        </p>
                    </div>
                </div>
                <div className={css.card}>
                    <div className={css.cardIcon}>
                        <ViewAgendaIcon fontSize="large" />
                    </div>
                    <div className={css.cardTitle}>
                        <p>Produce soap</p>
                    </div>
                    <div className={css.cardDetail}>
                        <p className={css.cardDetailFull}>
                            Goat milk makes a wonderful, soft and mild soap that
                            is often used by people with sensitive skin.
                        </p>
                    </div>
                </div>
                <div className={css.card}>
                    <div className={css.cardIcon}>
                        <NatureIcon fontSize="large" />
                    </div>
                    <div className={css.cardTitle}>
                        <p>Make manure</p>
                    </div>
                    <div className={css.cardDetail}>
                        <p className={css.cardDetailFull}>
                            Okay, any animal does, but goat manure is great for
                            fertilizing your fields. An average goat produces
                            about 300 pounds of manure each year, and the feces
                            are in pellet form, which makes them easy to handle.
                        </p>
                    </div>
                </div>
                <div className={css.card}>
                    <div className={css.cardIcon}>
                        <LineStyleIcon fontSize="large" />
                    </div>
                    <div className={css.cardTitle}>
                        <p>Clear land</p>
                    </div>
                    <div className={css.cardDetail}>
                        <p className={css.cardDetailFull}>
                            Goats are great browsers and they love to eat weeds
                            and blackberry brambles. Pasture them on whatever
                            you want to clear out and let them act as living
                            brush hogs.
                        </p>
                    </div>
                </div>
                <div className={css.card}>
                    <div className={css.cardIcon}>
                        <ShoppingBasketIcon fontSize="large" />
                    </div>
                    <div className={css.cardTitle}>
                        <p>Use them as pack animals</p>
                    </div>
                    <div className={css.cardDetail}>
                        <p className={css.cardDetailFull}>
                            Goats can be trained to carry your gear on hikes,
                            and are especially suited to steep and rocky paths.
                            They can easily carry 20 to 30 percent of their body
                            weight.
                        </p>
                    </div>
                </div>
                <div className={css.card}>
                    <div className={css.cardIcon}>
                        <FireplaceIcon fontSize="large" />
                    </div>
                    <div className={css.cardTitle}>
                        <p>Use their dung as fuel</p>
                    </div>
                    <div className={css.cardDetail}>
                        <p className={css.cardDetailFull}>
                            Plenty of people all over the world use goat dung to
                            fuel fires. This is certainly an option for those of
                            us who are big on self-sufficiency.
                        </p>
                    </div>
                </div>
                <div className={css.card}>
                    <div className={css.cardIcon}>
                        <PanToolIcon fontSize="large" />
                    </div>
                    <div className={css.cardTitle}>
                        <p>Use their skin and hide</p>
                    </div>
                    <div className={css.cardDetail}>
                        <p className={css.cardDetailFull}>
                            Goat skins can be dried and tanned like leather and
                            used in any number of products, including goatskin
                            gloves.
                        </p>
                    </div>
                </div>
                <div className={css.card}>
                    <div className={css.cardIcon}>
                        <LocalOfferIcon fontSize="large" />
                    </div>
                    <div className={css.cardTitle}>
                        <p>Easy to train and handle</p>
                    </div>
                    <div className={css.cardDetail}>
                        <p className={css.cardDetailFull}>
                            Goats are social animals and they are easy to train.
                            They're easy to handle, even by children. They're a
                            good size compared to cows, and that size makes them
                            easier to handle as well.
                        </p>
                    </div>
                </div>
                <div className={css.card}>
                    <div className={css.cardIcon}>
                        <EcoIcon fontSize="large" />
                    </div>
                    <div className={css.cardTitle}>
                        <p>Wild Fire Protection</p>
                    </div>
                    <div className={css.cardDetail}>
                        <p className={css.cardDetailFull}>
                            Throughout California, goats were dining out. Above
                            the championship golf course at Pebble Beach, a herd
                            was systematically carving a 35-acre firebreak.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
