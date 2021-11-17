import { h } from 'preact';
import DefaultLayout from '@layouts/default';

import Image from '@components/image2';

export const meta=[{
	name: 'description',
	content: 'Image Component - v2'
}];

const ImageV2Page=() => 
<DefaultLayout section={'Home'}>
	<div class='centered wrap'>

		<section>
			<h1>Image component proposal</h1>
			<h2>Version 2</h2>
			<p>Initial feedback suggested the component was too opinionated / not sufficiently flexible.</p>
			<p>Some refactoring and a more decarative handling of the <code>&lt;source srcset ...&gt;</code> data hopefully addresses these concerns somewhat.</p>
		</section>

		<section>
			<h3>Navigation:</h3>
			<p><a href="/">Home</a></p>
			<p><a href="/v1/">Component v1</a> - <code>&lt;Image&gt;</code> and <code>&lt;Figure&gt;</code></p>
			<p>Component v2 - <code>&lt;Image&gt;</code> only</p>
		</section>


		<section>
			<h4>Supported <code>&lt;Image&gt;</code> component properties:</h4>
			<ul class="notes">
				<li>alt</li>
				<li>className: Applied to <code>&lt;picture&gt;</code> to allow correct BEM conventions</li>
				<li>imageClass: Applied to <code>&lt;img&gt;</code></li>
				<li>src: Default / fallback image</li>
				<li>sources: Simplified array of the two primary <code>&lt;picture&gt;</code> &mdash;&gt; <code>&lt;source&gt;</code>...<code>&lt;/source&gt;</code> attributes:
					<ul>
						<li>src: String reference to local/relative or remote image URI</li>
						<li>media: String for media property</li>
					</ul>
				</li>
				<li>decoding: Defaults to <code>'async'</code></li>
				<li>loading: Defaults to <code>'lazy'</code></li>
			</ul>
		</section>

		
		<section>
			<h2>Example</h2>
			<p>This example demonstrates a variety of <code>srcset</code> data.</p>
			<div class="row">
				<div class="col xs-12 sm-5 md-6">
					<Image 
						alt='Hero image'
						className='page-hero-image'
						imageClass='hero-image'
						src='/static/img/tramway.jpg'
						sources={[
							{src: 'https://via.placeholder.com/1600x400.jpg', media: '(min-width:1000px)'},
							{src: 'https://via.placeholder.com/1000x246.png', media: '(min-width:900px)'},
							{src: '/static/img/tramway_900.jpg?1600x900', media: '(min-width:700px)'},
							{src: '/static/img/tramway_700.png', media: '(min-width:500px)'},
							{src: '/static/img/tramway_500.webp', media: '(min-width:400px)'},
							{src: '/static/img/tramway-2x.jpg 2x, /static/img/tramway-1x.jpg', media: '(min-width:300px)'}
						]}
					/>
				</div>
				<div class="col xs-12 sm-7 md-6">
					<table>
						<thead>
							<tr>
								<th colSpan="2">Notes on media changes at given breakpoints</th>
							</tr>
							<tr>
								<th>minWidth</th>
								<th>Image URI</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1000px</td>
								<td>https://via.placeholder.com/1600x400.jpg</td>
							</tr>
							<tr>
								<td>900px</td>
								<td>https://via.placeholder.com/1000x246.png</td>
							</tr>
							<tr>
								<td>700px</td>
								<td>/static/img/tramway_900.jpg?1600x900</td>
							</tr>
							<tr>
								<td>500px</td>
								<td>/static/img/tramway_700.png</td>
							</tr>
							<tr>
								<td>400px</td>
								<td>/static/img/tramway_500.webp</td>
							</tr>
							<tr>
								<td>300px</td>
								<td>/static/img/tramway-2x.jpg 2x, /static/img/tramway-1x.jpg</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="row">
				<h4>Code:</h4>
			</div>
			<div class="row">
				<pre><code>
					&lt;Image<br/>
						&emsp;alt='Hero image'<br/>
						&emsp;className='page-hero-image'<br/>
						&emsp;imageClass='hero-image'<br/>
						&emsp;src='static/img/tramway.jpg'<br/>
						&emsp;sources=&#123;[<br/>
							&emsp;&emsp;&#123;src: 'https://via.placeholder.com/1600x400.jpg', media: '(min-width:1000px)'&#125;,<br/>
							&emsp;&emsp;&#123;src: 'https://via.placeholder.com/1000x246.png', media: '(min-width:900px)'&#125;,<br/>
							&emsp;&emsp;&#123;src: '/static/img/tramway_900.jpg?1600x900', media: '(min-width:700px)'&#125;,<br/>
							&emsp;&emsp;&#123;src: '/static/img/tramway_700.png', media: '(min-width:500px)'&#125;,<br/>
							&emsp;&emsp;&#123;src: '/static/img/tramway_500.webp', media: '(min-width:400px)'&#125;,<br/>
							&emsp;&emsp;&#123;src: '/static/img/tramway-2x.jpg 2x, /static/img/tramway-1x.jpg', media: '(min-width:300px)'&#125;<br/>
						&emsp;]&#125;<br/>
					/&gt;
				</code></pre>
			</div>
		</section>

	</div>
</DefaultLayout>;

export default ImageV2Page;