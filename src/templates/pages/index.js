import { h } from 'preact';
import DefaultLayout from '@layouts/default';

export const title = 'Home';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout section={'Home'}>
    <figure>
        <img src="/static/img/test-jpg.jpg" />
        <figcaption>jpg</figcaption>
    </figure>
    <figure>
        <img src="/static/img/test-jpg.webp" />
        <figcaption>jpg -&gt; webp</figcaption>
    </figure>
    <figure>
     <img src="/static/img/test-png.png" />
        <figcaption>png</figcaption>
    </figure>
    <figure>
        <img src="/static/img/test-png.webp" />
        <figcaption>jpg -&gt; png</figcaption>
    </figure>
</DefaultLayout>;

export default HomePage;