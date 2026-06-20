import DefaultLayout from '@layouts/default';
import Heading from '@components/heading';

export const title = 'Page not found';

export const meta = [
    { name: 'robots', content: 'noindex' }
];

const NotFound = () => <DefaultLayout>
    <div class="wrap">
        <Heading>Page not found</Heading>
        <p>Sorry, the page you were looking for doesn’t exist.</p>
        <p><a href="/">Return to the homepage</a></p>
    </div>
</DefaultLayout>;

export default NotFound;
