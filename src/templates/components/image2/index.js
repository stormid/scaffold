import { h } from 'preact';

const Image=({
	className,
	imageClass,
	alt,
	src,
	sources,
	decoding='async',
	loading='lazy'
	}) => 

<picture class={`${className ? className : ''}`}>

	{
		sources && sources.map(srcData => <source srcset={srcData.src} media={srcData.media} />)
	}

	<img 
		alt={alt}
		class={`${imageClass ? imageClass : ''}`}
		decoding={decoding}
		src={`${src}`}
		loading={loading}
	/>

</picture>

export default Image;