import { h } from 'preact';
import DefaultLayout from '@layouts/default';

import Image from '@components/image';
import {Figure} from '@components/image';

const HomePage=() => 
<DefaultLayout section={'Home'}>
	<div class='centered wrap'>
		<h1>Image component</h1>

		<section>
			<h2>Image component</h2>
			<div class="row">
				<Image 
					alt='Grey hero placeholder'
					className='demo-hero'
					src='https://via.placeholder.com/500x200.png'
					sources={[
						{src: 'https://via.placeholder.com/1600x200.jpg', media: '(min-width:1000px)'},
						{src: 'https://via.placeholder.com/1000x200.png', media: '(min-width:700px)'},
						{src: 'https://via.placeholder.com/700x200.png', media: '(min-width:500px)'}
					]}
				/>
			</div>
		</section>

		<section>
			<h2>Image component, with Figure</h2>
			<div class="row">
				<Figure 
					className='demo-figure'
					captionClassName="demo-figure__caption"
					caption='Responsive Image caption'>
					<Image 
						alt='Grey placeholder image'
						className='demo-image'
						src='https://via.placeholder.com/500x200.png'
						sources={[
							{src: 'https://via.placeholder.com/1600x200.jpg', media: '(min-width:1000px)'},
							{src: 'https://via.placeholder.com/1000x200.png', media: '(min-width:700px)'},
							{src: 'https://via.placeholder.com/700x200.png', media: '(min-width:500px)'}
						]}
					/>
				</Figure>
			</div>
		</section>

	</div>
</DefaultLayout>;

export default HomePage;