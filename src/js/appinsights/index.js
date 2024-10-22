import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const connectionString = document.querySelector(`[data-ai]`)?.getAttribute('data-ai');
if (connectionString) {
    const appInsights = new ApplicationInsights({ config: { connectionString } });
    appInsights.loadAppInsights();
    appInsights.trackPageView();
}
