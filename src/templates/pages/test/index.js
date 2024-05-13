import { h } from 'preact';
import DefaultLayout from '@layouts/default';

export const title = 'Home';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout>
    <div class="wrap">
        <h1>Test.</h1>
        <div class="grid">
            <div class="sm-6">
                <p>Test</p>
            </div>
            <div class="sm-6">
                <p>Test</p>
            </div>
        </div>
    </div>
</DefaultLayout>;

export default HomePage;