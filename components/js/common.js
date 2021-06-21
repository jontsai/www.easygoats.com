import { GoogleAnalytics } from './google/analytics';

import { GOOGLE_ANALYTICS_ID } from '../../constants/settings.js';

export function CommonJS() {
    const jsx = <GoogleAnalytics trackingId={GOOGLE_ANALYTICS_ID} />;
    return jsx;
}
