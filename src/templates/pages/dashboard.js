import { h } from '../../../tools/dom/h';
import DefaultLayout from '../layouts/default';
import Test from '../components/test';
import Card, { Ghost, Empty } from '../components/card';

const DashboardPage = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(<DefaultLayout title={'Dashboard'}>
        <div class="card__list">
            <Card><Test wtf={'JSX component'} /></Card>
            <Card>{ Test({ wtf: 'Invoke component as function' }) }</Card>
            <Card>{ require('../components/test').default({ wtf: 'Require and invoke component as commonjs module' }) }</Card>
            <Card>{ (({ wtf }) => { return <Test wtf={wtf} />; })({ wtf: 'Component in an iife' }) }</Card>
            <Card>Text node</Card>
            <Ghost />
            <Empty />
        </div>
    </DefaultLayout>);
    }, 500);
});

export default DashboardPage;