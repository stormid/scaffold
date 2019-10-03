import { h } from 'preact';

export const Example = ({ href, title, summary, children }) => <a href={href} class="example">
    <div class="example__bd">
    { title && <h1 class="example__title">{title}</h1> }
    { summary && <div class="example__summary">{summary}</div> }
    { children }
    </div>
</a>;

export const Ghost = () => <div class="example ghost">
    <div class="example__bd">
        <div class="example__title example__title--ghost"></div>
        <div class="example__summary example__title--ghost"></div>
    </div>
</div>;

export const Empty = () => <div class="example example--empty"></div>;

export default Example; 