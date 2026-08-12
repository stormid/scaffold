import Heading from '../heading';

/**
 * @param {string} href - Destination of the title link
 * @param {string} title - Title text
 * @param {string} summary - Optional summary text
 * @param {number} level=2 - Heading level of the title, 1-6. A component that
 * repeats on a page must not hardcode h1, so this defaults to 2 and the page
 * keeps its own single h1 — raise or lower it to suit the document outline.
 * @param {Object} children - Child elements
 */
export const Example = ({ href, title, summary, level = 2, children }) => <div class="example">
    <div class="example__bd">
        <Heading level={level} className="example__title">
            <a href={href} class="example__link">{title}</a>
        </Heading>
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

export const ErrorState = () => <div class="example example--error">Something went wrong :(</div>;

export default Example;