import { storiesOf } from '@storybook/html';
import { h } from '../../tools/dom';
import renderToString from 'preact-render-to-string/jsx';
import Header from '../../src/templates/components/header';
import Logo from '../../src/templates/components/logo';
import Navigation from '../../src/templates/components/navigation/primary';
import Card, { Ghost, Empty } from '../../src/templates/components/card';
import { ia } from '../../src/data';
import '../../build/static/css/index.css';

storiesOf('Header', module)
  .addWithMarkup('Default', () => {
    return renderToString(<Header title={'Dashboard'}>
      <a class="header__link" href="#" aria-label="Home"><Logo /></a>
      <Navigation items={ia} active={'Dashboard'} />
  </Header>);
  });

storiesOf('Logo', module)
  .addDecorator(story => {
      return `<div style="background-color: #191919; justify-content: center; align-items: center; position: fixed; display: flex;top: 0; left: 0; right: 0; bottom: 0;">      
          ${story()}
      </div>`;
  })
  .addWithMarkup('Default', () => {
    return renderToString(<Logo />);
  });

storiesOf('Primary navigation', module)
  .addDecorator(story => {
    return `<div style="background-color: #191919; position: fixed; display: flex;top: 0; left: 0; right: 0; bottom: 0;">      
        <div style="max-height:65px;display:flex">${story()}</div>
    </div>`;
  })
  .addWithMarkup('Default', () => renderToString(<Navigation items={ia} />))
  .addWithMarkup('Active', () => renderToString(<Navigation items={ia} active={'Dashboard'} />));

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