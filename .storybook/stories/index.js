import { storiesOf } from '@storybook/html';
import { h } from '../../tools/dom';
import renderToString from 'preact-render-to-string/jsx';
// import Header from '../../src/html/components/header';
// import Navigation from '../../src/html/components/navigation/primary';
// import { ia } from '../../src/data';

// storiesOf('Header', module)
//   .addWithMarkup('Default', () => {
//     return renderToString(<Header />);
//   });

// storiesOf('Primary navigation', module)
//     .addWithMarkup('Default', () => renderToString(<Navigation items={ia} active={'Home'} />));

import anthology from '../anthology';

anthology.forEach(story => {
  storiesOf(story.component, module)
    .addWithMarkup('Default', () => {
      return renderToString(require(`../../src/html/components/${story.path ? story.path : story.component.toLowerCase()}`).default(story.props || {}));
    })
});