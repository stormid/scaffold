import { storiesOf } from '@storybook/html';
import { h } from '../../tools/dom';
import renderToString from 'preact-render-to-string/jsx';
import Header from '../../src/html/components/header';
import Logo from '../../src/html/components/logo';
import Navigation from '../../src/html/components/navigation/primary';
import Card, { Ghost, Empty } from '../../src/html/components/card';
import { ia } from '../../src/data';
import '../../build/static/css/index.css';

storiesOf('Header', module)
  .addWithMarkup('Default', () => {
    return renderToString(<Header />);
  });

storiesOf('Logo', module)
  .addWithMarkup('Default', () => {
    return renderToString(<Logo />);
  });

storiesOf('Primary navigation', module)
    .addWithMarkup('Default', () => renderToString(<Navigation items={ia} active={'Home'} />));

storiesOf('Card', module)
  .addWithMarkup('Loading', () => {
    return renderToString(<Ghost />);
  })
  .addWithMarkup('Empty', () => {
    return renderToString(<Empty />);
  })
  .addWithMarkup('Card', () => {
    return renderToString(<Card href={'#'} title={'Headline'} summary={'Lorem ipsum dolor amet, lorem ipsum dolor amet.'} />);
  });

// import anthology from '../anthology';

// anthology.forEach(story => {
//   storiesOf(story.component, module)
//     .addWithMarkup('Default', () => {
//       return renderToString(require(`../../src/html/components/${story.path ? story.path : story.component.toLowerCase()}`).default(story.props || {}));
//     })
// });