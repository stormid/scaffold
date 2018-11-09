import { h } from '../../../../../tools/dom';

const PrimaryNavItem = ({ href, active, label, sub }) => <li class="nav-primary__item">
    <a class={`nav-primary__link${active ? ' is--active' : ''}`} href={href}>{label }</a>
    { sub && <PrimaryNavSubNav items={sub} />}
</li>

const PrimaryNavSubNav = ({ items }) => <ul class="nav-primary__sub-list">
    { items.map(item => <PrimaryNavSubItem href={item.href} label={item.label} active={active === item.label} />) }
</ul>;

const PrimaryNavSubItem = ({ href, label }) => <li class="nav-primary__sub-item">
    <a class={`nav-primary__sub-link${active ? ' is--active' : ''}`} href={ href }>{ label }</a>
</li>

const PrimaryNav = ({ items, active }) => <nav class="nav-primary">
    <ul class="nav-primary__list">
        { items.map(item => <PrimaryNavItem label={item.label} href={item.href} active={active === item.label} />) }
    </ul>
</nav>;

export default PrimaryNav;