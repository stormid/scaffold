import { h } from '../../../tools/dom';
import Head from '../components/head';

const Login = ({ children, title }) => <html lang="en" class="no-webfonts no-js">
    <Head title={title} />
    <body>
        <main id="main">{ children }</main>
    </body>
</html>;

export default Login;