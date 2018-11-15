import { h, ghost } from '../../../tools/dom';
import DefaultLayout from '../layouts/default';
import Test from '../components/test';
import Card from '../components/card';
/*
Import markdown/csv
*/

const HomePage = () => <DefaultLayout title={'Home'}>
    <h1>Home</h1>
    {ghost(<Card title={'Test'} summary={'Lorem ipsum dolor amet'} />, <div>Loading...</div>, true)}
    <Test />
    { Test() }
    { require('../components/test').default() }
</DefaultLayout>;

export default HomePage;