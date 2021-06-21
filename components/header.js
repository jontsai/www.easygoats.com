import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import Nav from 'react-bootstrap/Nav';

import MenuIcon from '@material-ui/icons/Menu';

import css from '../styles/header.module.scss';

import { NAV_LINKS } from '../constants/nav_links.js';

export function Header({ children }) {
    const router = useRouter();
    const navItemsJSX = NAV_LINKS.map((link, index) => {
        const classes = classNames({
            [css.active]: link.url === router.pathname,
        });
        const target = link.url.substring(0, 4) === 'http' ? '_blank' : null;
        return (
            <Nav.Item key={`link-${index}`}>
                <Nav.Link href={link.url} className={classes} target={target}>
                    {link.name}
                </Nav.Link>
            </Nav.Item>
        );
    });

    const [menu, setMenu] = useState(`${css.smallHeaderHidden}`);

    const handleClick = () => {
        if (menu == `${css.smallHeaderHidden}`) {
            setMenu(`${css.smallHeader}`);
        } else if (menu == `${css.smallHeader}`) {
            setMenu(`${css.smallHeaderHidden}`);
        }
    };

    return (
        <div className={css.Topheaders}>
            <div className={css.headers}>
                <div className={css.logo}>
                    <img className={css.logoImg} src="/img/logo.png" />
                </div>
                <div className={css.header}>
                    <Nav>{navItemsJSX}</Nav>
                </div>
                <div className={menu}>
                    <img
                        src="/img/smalllogo.png"
                        className={css.headerLeftImg}
                        alt="logo"
                    />
                    {navItemsJSX}
                </div>
                <button className={css.smallMenu} onClick={handleClick}>
                    <MenuIcon style={{ fontSize: 50 }} />
                </button>
            </div>
        </div>
    );
}
