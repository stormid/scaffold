import { h } from '../../../../tools/dom';
import DefaultLayout from '../../layouts/default';
import Test from '../../components/test';

const ServicesPage = () => <DefaultLayout title={'Sefvices'}>
    <h1>Services</h1>
    <Test />
    { Test() }
    { require('../../components/test').default() }
</DefaultLayout>;

export default ServicesPage;