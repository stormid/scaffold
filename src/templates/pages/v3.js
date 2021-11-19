import { h } from 'preact';
import DefaultLayout from '@layouts/default';

import ImageBlock from '@components/image-block';
import {Figure} from '@components/image-block';

export const meta=[{
	name: 'description',
	content: 'Image Component - v3'
}];

const ImageV3Page=() => 
<DefaultLayout section={'Home'}>
	<div class='centered wrap'>

		<section>
			<h1>ImageBlock component proposal</h1>
			<h2>Version 3</h2>
			<p>Further feedback suggested some BEM related improvements, and I've undertaken a little refactoring.</p>
			<p>Changes: Renaming to <code>&lt;ImageBlock&gt;</code>, applying BEM conventions, moving the <code>&lt;Figure&gt;</code> into the <code>&lt;ImageBlock&gt;</code> file for developer ease / clarity.</p>
			<p>The examples below are simply reworkings of v2, with the above changes.</p>
		</section>

		<section>
			<h3>Navigation:</h3>
			<p><a href="/">Home</a></p>
			<p><a href="/v1/">Component v1</a></p>
			<p><a href="/v2/">Component v2</a></p>
			<p>Component v3</p>
		</section>


		<section>
			<h4>Supported <code>&lt;ImageBlock&gt;</code> component properties:</h4>
			<ul class="notes">
				<li>alt</li>
				<li>className: Applied to <code>&lt;picture&gt;</code> with correct BEM conventions</li>
				<li><span class="strike">imageClass: Applied to <code>&lt;img&gt;</code>.</span> Better BEM removes need for this additional class</li>
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

			<h4>Supported <code>&lt;Figure&gt;</code> component properties:</h4>
			<ul class="notes">
				<li>children: An <code>&lt;Image&gt;</code> component</li>
				<li>className: Applied to <code>&lt;figure&gt;</code> and <code>&lt;figcation&gt;</code> with correct BEM conventions</li>
				<li>caption: Used as <code>&lt;figcation&gt;</code> content</li>
			</ul>

		</section>

		
		<section>
			<h2>Example</h2>
			<p>This example demonstrates a variety of <code>srcset</code> data.</p>
			<div class="row">
				<div class="col xs-12 sm-5 md-6">
					<ImageBlock 
						alt='Grey placeholder'
						className='demo-panel'
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
					&lt;ImageBlock<br/>
						&emsp;alt='Grey placeholder'<br/>
						&emsp;className='demo-panel'<br/>
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

		
		<section>
			<h2>Example</h2>
			<p>This example demonstrates the above, with a <code>&lt;Figure&gt;</code> component caption.</p>
			<div class="row">
				<Figure className='homepage-hero' caption='Responsive Image caption'>
					<ImageBlock 
						alt='Grey hero placeholder'
						className='demo-hero'
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
				</Figure>
			</div>
			<div class="row">
				<h4>Code:</h4>
			</div>
			<div class="row">
				<pre><code>
				&lt;Figure className='homepage-hero' caption='Responsive Image caption'&gt;<br/>
					&emsp;&lt;ImageBlock<br/>
					&emsp;&emsp;alt='Grey hero placeholder'<br/>
					&emsp;&emsp;className='demo-hero'<br/>
					&emsp;&emsp;src='static/img/tramway.jpg'<br/>
					&emsp;&emsp;sources=&#123;[<br/>
					&emsp;&emsp;&emsp;&#123;src: 'https://via.placeholder.com/1600x400.jpg', media: '(min-width:1000px)'&#125;,<br/>
					&emsp;&emsp;&emsp;&#123;src: 'https://via.placeholder.com/1000x246.png', media: '(min-width:900px)'&#125;,<br/>
					&emsp;&emsp;&emsp;&#123;src: '/static/img/tramway_900.jpg?1600x900', media: '(min-width:700px)'&#125;,<br/>
					&emsp;&emsp;&emsp;&#123;src: '/static/img/tramway_700.png', media: '(min-width:500px)'&#125;,<br/>
					&emsp;&emsp;&emsp;&#123;src: '/static/img/tramway_500.webp', media: '(min-width:400px)'&#125;,<br/>
					&emsp;&emsp;&emsp;&#123;src: '/static/img/tramway-2x.jpg 2x, /static/img/tramway-1x.jpg', media: '(min-width:300px)'&#125;<br/>
					&emsp;&emsp;]&#125;<br/>
					&emsp;/&gt;<br/>
				&lt;Figure/&gt;
				</code></pre>
			</div>
		</section>

	</div>
</DefaultLayout>;

export default ImageV3Page;