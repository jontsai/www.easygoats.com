import React from 'react';

import css from '../../styles/common.module.scss';

export function Economy() {
    return (
        <div id="economy" className={css.economySection}>
            <h1>Economic Use</h1>
            <div className={css.economybody}>
                <div className={css.leftEconomy}>
                    <p>
                        The business of goat farming has been gaining a lot of
                        popularity these days. There is significant demand for
                        goat products, and they also need less investment and
                        provide high profit margin in a short time period. These
                        are known to be the main reasons behind rising
                        popularity of this business.
                    </p>
                    <p>
                        Being a profitable business, goat farming makes a great
                        source of income for millions of entrepreneurs across
                        the world. But you need to consider some important
                        things before you venture into this business. You should
                        determine the size of your project for goat farming,
                        i.e. number of goats you can keep, your target market,
                        and location like a goat farm. These choices vary by the
                        capital you actually have in hand and size of target
                        market.
                    </p>
                    <a
                        href="https://www.ogscapital.com/article/goat-farming-business-plan-template/"
                        target="_blank"
                    >
                        Goat Farming Business Plan Templates
                    </a>
                </div>
                <div className={css.rightEconomy}>
                    <img
                        className={css.rightEconomyImg}
                        src="/img/economygraph.png"
                    />
                    <p>
                        sample economic profit forcast predicted by
                        ogscapital.com in 2014
                    </p>
                </div>
            </div>
        </div>
    );
}
