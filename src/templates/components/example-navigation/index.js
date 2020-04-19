import { h } from 'preact';

const ExampleNavigation = ({ ariaLabel, children }) => <div class="example-navigation">
    <button class="example-navigation__btn js-toggle__nav" aria-label="Expand navigation">
        <svg focusable="false" class="example-navigation__btn-icon" aria-hidden="true" fill="#fff" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
    </button>
    <nav id="navigation" class="example-navigation__nav js-toggle" aria-label={ariaLabel} data-toggle="js-toggle__nav">
    {
        children && <ul class="example-navigation__list">
            {children}
        </ul>
    }
    </nav>
</div>;

export default ExampleNavigation;