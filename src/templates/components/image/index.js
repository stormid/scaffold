import { h } from 'preact';

const ImageSource=({fileName, data}) => {
	return <source srcset={`${fileName.split('.')[0]}${data.sizeID}.${data.format}${data.query}`} media={`(min-width:${data.minWidth}px)`} />
}

const Image=({
	componentClass,
	imageClass,
	alt,
	fileName,
	altSizes,
	decoding='async',
	loading='lazy'
	}) => 

<picture class={`image ${componentClass ? componentClass : ''}`}>

	{
		altSizes && altSizes.map(size => ImageSource({fileName:fileName, data:size}))
	}

	<img 
		alt={alt}
		class={`${imageClass ? imageClass : ''}`}
		decoding={decoding}
		src={`${fileName}`}
		loading={loading}
	/>

</picture>

export default Image;