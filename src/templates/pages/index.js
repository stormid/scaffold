import DefaultLayout from '@layouts/default';
import Heading from '@components/heading';
import Example, { Ghost, Empty, ErrorState } from '@components/example';

export const title = 'Home';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout>
    <div class="wrap">
        <Heading>Hello world.</Heading>
        <Ghost />
        <Empty />
        <ErrorState />
        <Example href={'#'}
            title={'Quick brown fox'}
            summary={'Jumps over the lazy dog'} />
    </div>
</DefaultLayout>;

export default HomePage;