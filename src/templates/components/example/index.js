import { h } from 'preact';

export const Example = ({ href, title, summary, children }) => <div class="example">
    <div class="example__bd">
        <h1 class="example__title"><a href={href} class="example__link">{title}</a></h1>
        { summary && <div class="example__summary">{summary}</div> }
        { children }
    </div>
</div>;

export const Ghost = () => <div class="example example--ghost">
    <div class="example__bd">
        <div class="example__title" />
        <div class="example__summary" />
    </div>
</div>;

export const Empty = () => <div class="example example--empty" />;

export const Error = () => <div class="example example--error">Something went wrong :(</div>;

export default Example;