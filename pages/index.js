import Page from '../components/base_page';

import { Home } from '../components/spa/home';
import { About } from '../components/spa/about';
import { Environment } from '../components/spa/environment';
import { Economy } from '../components/spa/economy';
import { News } from '../components/spa/news';
import { Rent } from '../components/spa/rent';
import { Shipping } from '../components/spa/shipping';

export default function Index() {
    return (
        <Page>
            <Home />
            <About />
            <Environment />
            <Economy />
            <News />
            <Rent />
            <Shipping />
        </Page>
    );
}
