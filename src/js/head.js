import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { AI } from './constants';

{
  const appInsights = new ApplicationInsights({
    config: {
      instrumentationKey: document.querySelector(`[${AI.META}]`).getAttribute(AI.META),
    },
  });
  appInsights.loadAppInsights();
}
