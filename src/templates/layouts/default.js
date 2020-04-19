import { h } from 'preact';
import Skip from '../components/skip';
import Header from '../components/header';
// import ExampleNavigation from '../components/example-navigation';
// import ExampleNavigationItem from '../components/example-navigation-item';
import Main from '../components/main';
import Footer from '../components/footer';

const Default = ({ children, section }) => <body>
    <Header>
        <Skip />
        {/* <ExampleNavigation ariaLabel={'Main navigation'}>
            <ExampleNavigationItem href="/" active={section === 'Home'}>Home</ExampleNavigationItem>
        </ExampleNavigation> */}
    </Header>
    <Main>
        { children }
    </Main>
    <Footer />
</body>;

export default Default;