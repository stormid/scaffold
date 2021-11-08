import toggle from '@stormid/toggle';

document.querySelector('.js-toggle') && toggle('.js-toggle');
document.querySelector('.js-toggle__local') && toggle('.js-toggle__local', { local: true });