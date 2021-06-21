import React from 'react';

import SearchIcon from '@material-ui/icons/Search';

import css from '../../styles/common.module.scss';

export function Rent() {
    return (
        <div id="rent" className={css.rentSection}>
            <div className={css.rentStripe}></div>
            <div className={css.rentBody}>
                <div className={css.rentBodyLeft}>
                    <h2>The best goat rental services on Yelp!</h2>
                    <p>
                        Discover the best offers and affordable prices of goat
                        rent for city grazing, farming, wildfire prevention etc.
                    </p>
                </div>
                <div className={css.rentBodyRight}>
                    <a
                        target="_blank"
                        href="https://www.yelp.com/search?find_desc=goat%20rental&find_loc=San%20Francisco%2C%20CA"
                        className={css.rentBodySearch}
                    >
                        <SearchIcon />
                        <p className={css.rentSearchText}>Search</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
