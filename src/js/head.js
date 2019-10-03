import { AI } from './constants';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

{
    const appInsights = new ApplicationInsights({ config: {
        instrumentationKey: document.querySelector(`[${AI.META}]`).getAttribute(AI.META)
    } });
    appInsights.loadAppInsights();
}