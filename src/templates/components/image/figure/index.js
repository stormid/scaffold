import { h } from 'preact';

const Figure = ({children, componentClass, caption, captionID, longDescID}) => 

		<figure class={`image ${componentClass ? componentClass : ''}`} aria-labelledby={captionID} aria-describedby={`${longDescID ? `#${longDescID}` :''}`}>

		{
			children
		}
		
		<figcaption id={captionID}>
			{caption}
		</figcaption>
		
	</figure>

export default Figure;