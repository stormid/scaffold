import { configure, addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import { withMarkup } from '@stormid/storybook-html-addon-markup';
// import '../src/css/index.scss';

addDecorator(withA11y);
addDecorator(withMarkup);
configure(require.context('./stories', true, /\.stories\.js$/), module);