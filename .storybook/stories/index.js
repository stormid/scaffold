import { storiesOf } from '@storybook/html';
import { h } from '../../tools/dom';
import renderToString from 'preact-render-to-string/jsx';
import Header from '../../src/html/components/header';
import Navigation from '../../src/html/components/navigation/primary';
import ia from '../../src/config/ia';

storiesOf('Header', module)
  .addWithMarkup('Default', () => {
    return renderToString(<Header />);
  });

storiesOf('Primary navigation', module)
    .addWithMarkup('Default', () => renderToString(<Navigation items={ia} active={'Home'} />));