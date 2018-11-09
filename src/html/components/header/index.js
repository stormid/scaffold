import { h } from '../../../../tools/dom';

const Header = ({ children }) => <header class="banner">
    <div class="skip">
        <a class="btn btn-skip" tabindex="0" href="#main">Skip to main content</a>
    </div>
    { children }
</header>;

export default Header;