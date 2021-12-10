import { h } from 'preact';
import DefaultLayout from '@layouts/default';

import Image from '@components/image';
import {Figure} from '@components/image';

const HomePage=() => 
<DefaultLayout section={'Home'}>
	<div class='centered wrap'>

		<section>
			<h1>Image component, with Figure</h1>
		</section>

		<section>
			<div class="row">
				<Figure className='homepage-hero' caption='Responsive Image caption'>
					<Image 
						alt='Grey hero placeholder'
						className='demo-hero'
						src='https://via.placeholder.com/500x246.png'
						sources={[
							{src: 'https://via.placeholder.com/1600x400.jpg', media: '(min-width:1000px)'},
							{src: 'https://via.placeholder.com/1000x246.png', media: '(min-width:700px)'},
							{src: 'https://via.placeholder.com/700x246.png', media: '(min-width:500px)'}
						]}
					/>
				</Figure>
			</div>
		</section>

	</div>
</DefaultLayout>;

export default HomePage;