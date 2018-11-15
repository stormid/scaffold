import { h, ghost } from '../../../tools/dom';
import DefaultLayout from '../layouts/default';
import Card from '../components/card';
import { xkcd } from '../../data';
const DashboardPage = () => <DefaultLayout title={'Dashboard'}>
    <div class="card__list">
    {
        xkcd.map(strip => <Card
            img={strip.img}
            title={strip.title}
            summary={strip.alt}
        />)
    }
    </div>
    {/* {ghost(<Card title={'Test'} summary={'Lorem ipsum dolor amet'} />, <div>Loading...</div>, true)} */}
</DefaultLayout>;

export default DashboardPage;