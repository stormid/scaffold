import { h } from 'preact';

/**
 * Wrapper for flow content (eg Image component), usually where a caption is required
 * Any flow content is permitted: https://html.spec.whatwg.org/multipage/dom.html#flow-content-2
 * @param {Object} children - Child elements
 * @param {string} caption - Text to display within figcaption
 * @param {string} className - Class name for the <figure>
 * @param {string} captionClassName - Class name  for the <caption>
 */
const Figure = ({
    children,
    className=null,
    captionClassName=null,
    caption
}) => <figure class={className}>
    { children }
    { caption &&
        <figcaption class={captionClassName}>
            {caption}
        </figcaption>
    }
</figure>;

export default Figure;
