import { h } from 'preact';

/**
 * Responsive image component, using the <picture> element
 * @param {string} alt - Image alt tag
 * @param {string} className - Class name
 * @param {string} decoding='async' - 'async', 'sync', 'auto'
 * @param {string} fetchpriority='auto' - 'high', 'low', 'auto'
 * @param {string} height=null - Image height attribute
 * @param {string} imgClassName - img element Class name
 * @param {string} loading='lazy' - 'lazy', 'eager'
 * @param {array} [sources]	- Array of Objects for <picture> —> <source> attributes {src, media}
 * @param {string} src - Reference to local/relative or remote image URI
 * @param {string} width=null - Image width attribute
 **/

const Image = ({
    alt,
    className,
    decoding = 'async',
    fetchPriority = null,
    height = null,
    imgClassName,
    loading = 'lazy',
    src,
    sources,
    width = null
}) => <picture class={className}>
    { sources && sources.map(srcData => <source srcset={srcData.src} media={srcData.media} />) }
    <img
        alt={alt}
        class={imgClassName}
        decoding={decoding}
        fetchpriority={fetchPriority}
        height={height}
        loading={loading}
        src={`${src}`}
        width={width}
    />
</picture>;

export default Image;
