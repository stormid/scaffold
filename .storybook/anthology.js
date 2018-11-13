import { ia } from '../src/data';

export default [
    {
        component: 'Header'
    },
    {
        component: 'Button'
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