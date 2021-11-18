import { h } from 'preact';

const Figure = ({children, className, caption}) => 

		<figure class={`${className ? className : ''}`} >

		{
			children
		}
		
		{caption && 
			<figcaption>
				{caption}
			</figcaption>
		}
		
	</figure>

export default Figure;