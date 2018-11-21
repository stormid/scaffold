import { h } from '../../../tools/dom/h';
import DefaultLayout from '../layouts/default';
import Card from '../components/card';
import { resource } from '../../data';

const DashboardPage = () => resource().then(res => res.json()).then(data => new Promise(resolve => {
    resolve(<DefaultLayout title={'Dashboard'}>
        <div class="card__list">
        {
            data.title.map(datum => <Card
                href={datum['@uri']}
                title={`${datum.titleweb}, ${datum.authorweb}`}
                // summary={datum.flapcopy}
            />)
        }
        </div>
    </DefaultLayout>);
}));

export default DashboardPage;