import { h } from '../../../tools/dom';
import DefaultLayout from '../layouts/default';
import Test from '../components/test';
/*
Import markdown/csv
*/

const HomePage = () => <DefaultLayout title={'Home'}>
    <h1>Home</h1>
    <Test />
    { Test() }
    { require('../components/test').default() }
</DefaultLayout>;

export default HomePage;