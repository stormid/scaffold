import { setAddon, configure, addDecorator } from '@storybook/html';
import { checkA11y } from '@storybook/addon-a11y';

addDecorator(checkA11y);
configure(() => require('./stories/index.js'), module);