import React from 'react';
import css from '../../styles/common.module.scss';

export function About() {
    return (
        <div id="about" className={css.aboutSection}>
            <h1 className={css.aboutTitle}>About Goats</h1>
            <div className={css.aboutBody}>
                <div className={css.leftAboutBody}>
                    <p>
                        The domestic goat or simply goat (Capra aegagrus hircus)
                        is a subspecies of C. aegagrus domesticated from the
                        wild goat of Southwest Asia and Eastern Europe. The goat
                        is a member of the animal family Bovidae and the
                        subfamily Caprinae, meaning it is closely related to the
                        sheep. There are over 300 distinct breeds of goat. It is
                        one of the oldest domesticated species of animal,
                        according to archaeological evidence that its earliest
                        domestication occurred in Iran at 10,000 calibrated
                        calendar years ago.
                    </p>
                    <p>
                        Goats have been used for milk, meat, fur, and skins
                        across much of the world. Milk from goats is often
                        turned into goat cheese.
                    </p>
                    <p>
                        Female goats are referred to as does or nannies, intact
                        males are called bucks or billies, and juvenile goats of
                        both sexes are called kids. Castrated males are called
                        wethers. While the words hircine and caprine both refer
                        to anything having a goat-like quality, hircine is used
                        most often to emphasize the distinct smell of domestic
                        goats.
                    </p>
                </div>
                <div className={css.rightAboutBody}>
                    <img className={css.rightAboutImg} src="/img/about.jpg" />
                </div>
            </div>
        </div>
    );
}
