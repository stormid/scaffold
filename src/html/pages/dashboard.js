import { h, ghost } from '../../../tools/dom';
import DefaultLayout from '../layouts/default';
import Card from '../components/card';
import { xkcd } from '../../data';

const DashboardPage = () => xkcd().then(res => res.json()).then(data => new Promise(resolve => {
    console.log(data);
    resolve(<DefaultLayout title={'Dashboard'}>
        <div class="card__list">
        {
            data.map(strip => <Card
                href={strip.img}
                title={strip.title}
                summary={strip.alt}
            />)
        }
        </div>
    </DefaultLayout>);
}));

export default DashboardPage;