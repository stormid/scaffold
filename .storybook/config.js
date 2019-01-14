import { setAddon, configure, addDecorator } from '@storybook/html';
import { checkA11y } from '@storybook/addon-a11y';
import markupAddon from 'storm-storybook-markup';

addDecorator(checkA11y);
setAddon(markupAddon);
configure(() => require('./stories/index.js'), module);