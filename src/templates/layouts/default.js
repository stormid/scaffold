import { Fragment, h } from 'preact';
import Skip from '@components/skip';
import Header from '@components/header';
import Main from '@components/main';
import Footer from '@components/footer';

const Default = ({ children }) => <Fragment>
    <Header>
        <Skip />
    </Header>
    <Main>
        { children }
    </Main>
    <Footer />
</Fragment>;

export default Default;