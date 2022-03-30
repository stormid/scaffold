import { h } from 'preact';

/**
 * Responsive image component, using the <picture> element
 * @param {string} alt - Image alt tag
 * @param {string} decoding='async' - 'async', 'sync', 'auto'
 * @param {string} loading='lazy' - 'lazy', 'eager'
 * @param {string} src - Reference to local/relative or remote image URI
 * @param {string} className - Class name
 * @param {string} imgClassName - img element Class name
 * @param {array} [sources]	- Array of Objects for <picture> —> <source> attributes {src, media}
 **/
const Image=({
    className,
    imgClassName,
    alt,
    src,
    sources,
    decoding = 'async',
    loading = 'lazy'
}) => <picture class={className}>
    { sources && sources.map(srcData => <source srcset={srcData.src} media={srcData.media} />) }
    <img
        alt={alt}
        class={imgClassName}
        decoding={decoding}
        src={`${src}`}
        loading={loading}
    />
</picture>;

export default Image;

/**
 * Wrapper for ImageBlock component, usually where a caption is required
 * @param {Object} children - an ImageBlock 
 * @param {string} caption - Text to display with image
 * @param {string} className - Class name for the <figure>
 * @param {string} captionClassName - Class name  for the <caption>
 */
export const Figure = ({
    children,
    className,
    captionClassName,
    caption
}) => <figure class={className}>
    { children }
    { caption &&
        <figcaption class={captionClassName}>
            {caption}
        </figcaption>
    }
</figure>;