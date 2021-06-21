import React from 'react';

import SearchIcon from '@material-ui/icons/Search';

import css from '../../styles/common.module.scss';

export function Shipping() {
    return (
        <div id="shipping" className={css.shippingSection}>
            <div className={css.shippingStripe}></div>
            <div className={css.shippingBody}>
                <h2>
                    Looking for shipping solutions instead? Check out the
                    complete shipping solution at{' '}
                    <a href="https://www.easypost.com">EasyPost.com</a>
                </h2>
            </div>
        </div>
    );
}
