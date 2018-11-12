import { storiesOf } from '@storybook/html';
import { h } from '../../tools/dom';
import renderToString from 'preact-render-to-string/jsx';
import Header from '../../src/html/components/header';
import Navigation from '../../src/html/components/navigation/primary';
import ia from '../../src/config/ia';

storiesOf('Header', module)
  .add('Default', () => {
    return renderToString(<Header />) + '<div id="main"></div>';
  });

storiesOf('Primary navigation', module)
    .add('Default', () => renderToString(<Navigation items={ia} active={'Home'} />));