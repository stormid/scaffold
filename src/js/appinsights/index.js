import { ApplicationInsights } from '@microsoft/applicationinsights-web';

{
    const appInsights = new ApplicationInsights({ config: {
        instrumentationKey: document.querySelector(`[data-ai]`).getAttribute('data-ai')
    } });
    appInsights.loadAppInsights();
}