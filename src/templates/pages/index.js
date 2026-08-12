import DefaultLayout from '@layouts/default';
import Example, { Ghost, Empty, ErrorState } from '@components/example';

export const title = 'Home';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout>
    <div class="wrap">
        <h1>Hello world.</h1>
        <Ghost />
        <Empty />
        <ErrorState />
        <Example href={'#'}
            title={'Quick brown fox'}
            summary={'Jumps over the lazy dog'} />
    </div>
</DefaultLayout>;

export default HomePage;