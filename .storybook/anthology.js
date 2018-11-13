import { ia } from '../src/data';

export default [
    {
        component: 'Header'
    },
    {
        component: 'Navigation',
        path: 'navigation/primary',
        props: {
            items: ia,
            active: 'Home'
        }
    }
];