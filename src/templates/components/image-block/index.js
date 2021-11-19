import { h } from 'preact';

/**
 * Responsive image component, using the <picture> element
 * @param {string} alt - Image alt tag
 * @param {string} decoding='async' - 'async', 'sync', 'auto'
 * @param {string} loading='lazy'	- 'lazy', 'eager'
 * @param {string} src - Reference to local/relative or remote image URI
 * @param {string} [className] - Class name, usually of parent for corrrect BEM 
 * @param {array} [sources]	- Array of Objects for <picture> —> <source> attributes {src, media}
 */
const ImageBlock=({
	className,
	alt,
	src,
	sources,
	decoding='async',
	loading='lazy'
	}) =>

<picture class={`${className ? className+'__' : ''}image-block}`}>

	{
		sources && sources.map(srcData => <source srcset={srcData.src} media={srcData.media} />)
	}

	<img 
		alt={alt}
		class={`${className ? className+'__' : ''}image-block-image`}
		decoding={decoding}
		src={`${src}`}
		loading={loading}
	/>

</picture>
export default ImageBlock;

/**
 * Wrapper for ImageBlock component, usually where a caption is required
 * @param {Object} children - an ImageBlock 
 * @param {string} [caption] - Text to display with image
 * @param {string} [className] - Class name, usually of parent for corrrect BEM 
 */
export const Figure = ({
	children,
	className,
	caption}) =>

<figure class={`${className ? className+'__' : ''}figure`} >

	{
		children
	}
	
	{caption && 
		<figcaption class={`${className ? className+'__' : ''}figcaption`}>
			{caption}
		</figcaption>
	}
	
</figure>