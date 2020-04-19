import { h } from 'preact';

const ExampleNavigationItem = ({ href, active, children }) => <li class="example-navigation__item">
    <a
        class={`example-navigation__link${active ? ` is--active` : ''}`}
        href={href}
        aria-current={String(active)}
    >{children}</a>
</li>;

export default ExampleNavigationItem;