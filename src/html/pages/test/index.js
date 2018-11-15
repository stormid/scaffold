import { h } from '../../../../tools/dom';
import DefaultLayout from '../../layouts/default';
import Test from '../../components/test';

const TestPage = () => <DefaultLayout title={'Test'}>
    <h1>Services</h1>
    <Test />
    { Test() }
    { require('../../components/test').default() }
</DefaultLayout>;

export default TestPage;