import { h } from 'preact';
import Skip from '../components/skip';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

const Default = ({ children, title }) => <body>
    <Header title={title}>
        <Skip />
    </Header>
    <Main>
        { children }
    </Main>
    <Footer />
</body>;

export default Default;