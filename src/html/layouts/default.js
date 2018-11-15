import { h } from '../../../tools/dom';
import Head from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Logo from '../components/logo';
import PrimaryNav from '../components/navigation/primary';
import { ia } from '../../data';

const Default = ({ children, title }) => <html lang="en" class="no-webfonts no-js">
    <Head title={title} />
    <body>
        <Header title={title}>
            <a class="header__link" href="/"><Logo /></a>
            <PrimaryNav items={ia} active={title} />
        </Header>
        <main id="main">
            { children }
        </main>
        <Footer></Footer>
    </body>
    <script src="/static/js/app.js"></script>
</html>;

export default Default;