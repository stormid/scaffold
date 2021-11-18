import { h } from 'preact';
import DefaultLayout from '@layouts/default';

import Image from '@components/image';
import Figure from '@components/image/figure';

export const meta=[{
	name: 'description',
	content: 'Image Component - v1'
}];

const ImageV1Page=() => 
<DefaultLayout section={'Home'}>
	<div class='centered wrap'>

		<section>
			<h1>Image component proposal</h1>
			<h2>Version 1</h2>
		</section>

		<section>
			<h3>Navigation:</h3>
			<p><a href="/">Home</a></p>
			<p>Component v1</p>
			<p><a href="/v2/">Component v2</a></p>
		</section>

		<section>
			<h4>Supported <code>&lt;Image&gt;</code> component properties:</h4>
			<ul class="notes">
				<li>alt</li>
				<li>imageClass: Applied to <code>&lt;img&gt;</code></li>
				<li>componentClass: Applied to <code>&lt;picture&gt;</code> to allow correct BEM conventions</li>
				<li>filename: Default image, used as base for <code>&lt;srcset&gt;</code> images</li>
				<li>altSizes: Array of <code>&lt;picture&gt;</code> &mdash;&gt; <code>&lt;source&gt;</code>...<code>&lt;/source&gt;</code> data:
					<ul>
						<li>minWidth: Breakpoint for image variant. Other media attributes are allowed, but KISS-ing it for now</li>
						<li>sizeID: Identifier for a specific size, appended to the base filename, with base-file format <code>split()</code> off</li>
						<li>format: File format for a specific size to allow for best encoding options, and potential art direction options</li>
						<li>query: Any required query string</li>
					</ul>
				</li>
				<li>decoding: Defaults to <code>'async'</code></li>
				<li>loading: Defaults to <code>'lazy'</code></li>
			</ul>

			<h4>Supported <code>&lt;Figure&gt;</code> component properties:</h4>
			<ul class="notes">
				<li>children: An <code>&lt;Image&gt;</code> component</li>
				<li>componentClass: Applied to <code>&lt;picture&gt;</code></li>
				<li>caption: Used as <code>&lt;figcation&gt;</code> content</li>
				<li>captionID: UID for the <code>&lt;figcation&gt;</code> element</li>
				<li>longDescID: UID for the <code>aria-describedby</code> attribute</li>
			</ul>
			
		</section>


		
		<section>
			<h2>Examples</h2>
			
			<div class="row">
				<h3>Responsive hero <code>&lt;Image&gt;</code></h3>
				<Image 
					alt='Hero image'
					componentClass='page-hero-image'
					imageClass='hero-image'
					fileName='/static/img/tramway.jpg'
					altSizes={[
						{minWidth: 900, sizeID:'_1000', query: '?1000', format: 'jpg'},
						{minWidth: 700, sizeID:'_900', query: '?900', format: 'jpg'},
						{minWidth: 400, sizeID:'_700', query: '?700', format: 'jpg'}
					]}
				/>
			</div>
			<div class="row">
				<h4>Notes:</h4>
				<ul class="notes">
					<li>Breakpoints at 900, 700 &amp; 400</li>
				</ul>
			</div>
			<div class="row">
				<h4>Code:</h4>
			</div>
			<div class="row">
				<pre><code>
					&lt;Image<br/>
						&emsp;alt='Hero image'<br/>
						&emsp;componentClass='page-hero-image'<br/>
						&emsp;imageClass='hero-image'<br/>
						&emsp;fileName='/static/img/tramway.jpg'<br/>
						&emsp;altSizes=&#123;[<br/>
							&emsp;&emsp;&#123;minWidth: 900, sizeID:'_1000', query: '?1000', format: 'jpg'&#125;,<br/>
							&emsp;&emsp;&#123;minWidth: 700, sizeID:'_900', query: '?900', format: 'jpg'&#125;,<br/>
							&emsp;&emsp;&#123;minWidth: 400, sizeID:'_700', query: '?700', format: 'jpg'&#125;<br/>
						&emsp;]&#125;<br/>
					/&gt;
				</code></pre>
			</div>
		</section>

		<section>
			<div class="row">
				<div class="col xs-6">
					<h3>Responsive <code>&lt;Image&gt;</code> wrapped in a <code>&lt;Figure&gt;</code></h3>
					<Figure 
						componentClass='homepage-figure' 
						caption='This is a figured image with title caption'
						captionID='caption_uid_1'>
						<Image 
							alt='Figured Image'
							imageClass='component-figure-specific'
							fileName='/static/img/tramway.jpg'
							altSizes={[
								{minWidth: 900, sizeID:'_1000', query: '?1000', format: 'jpg'},
								{minWidth: 800, sizeID:'_900', query: '?900', format: 'jpg'},
								{minWidth: 700, sizeID:'_800', query: '?800', format: 'jpg'}
							]}
						/>
					</Figure>
				</div>
				<div class="col xs-6">
					<h4>Notes:</h4>
					<ul class="notes">
						<li>Breakpoints at 900, 800 &amp; 700</li>
						<li>No longDescID, which leaves an empty aria-describedby, which is <a href="https://blog.pope.tech/2020/03/20/broken-aria-reference-example/">apparently okay</a></li>
					</ul>
				</div>
			</div>
			<div class="row">
				<h4>Code:</h4>
			</div>
			<div class="row">
				<pre><code>
					&lt;Figure<br/>
					&emsp;componentClass='homepage-figure'<br/>
					&emsp;caption='This is a figured image with title caption'<br/>
					&emsp;captionID='caption_uid_1'/&gt;<br/>
						&emsp;&lt;Image<br/>
							&emsp;&emsp;alt='Figured Image'<br/>
							&emsp;&emsp;imageClass='component-figure-specific'<br/>
							&emsp;&emsp;fileName='/static/img/tramway.jpg'<br/>
							&emsp;&emsp;altSizes=&#123;[<br/>
								&emsp;&emsp;&emsp;&#123;minWidth: 900, sizeID:'_1000', query: '?1000', format: 'jpg'&#125;,<br/>
								&emsp;&emsp;&emsp;&#123;minWidth: 800, sizeID:'_900', query: '?900', format: 'jpg'&#125;,<br/>
								&emsp;&emsp;&emsp;&#123;minWidth: 700, sizeID:'_800', query: '?800', format: 'jpg'&#125;,<br/>
							&emsp;&emsp;]&#125;<br/>
						&emsp;/&gt;<br/>
					&lt;Figure/&gt;
				</code></pre>
			</div>
		</section>

		<section>
			<div class="row">
				<div class="col xs-6">
					<h3>Responsive <code>&lt;Image&gt;</code> wrapped in a <code>&lt;Figure&gt;</code>, with <code>aria-describedby</code> reference to a long description</h3>
					<Figure 
						componentClass='homepage-figure' 
						caption='Figured image 2 caption. Long description elsewhere on the page'
						longDescID='longDescLink_reponsiveImage3'
						captionID='caption_uid_2'>
						<Image 
							alt='Figured Image'
							imageClass='component-figure-specific'
							fileName='/static/img/tramway.jpg'
							altSizes={[
								{minWidth: 900, sizeID:'_1000', query: '?1000', format: 'jpg'},
								{minWidth: 700, sizeID:'_900', query: '?900', format: 'jpg'}
							]}
						/>
					</Figure>
				</div>
				<div class="col xs-6">
					<h4>Notes:</h4>
					<ul class="notes">
						<li>Breakpoints at 900 &amp; 700</li>
					</ul>
					<p id="longDescLink_reponsiveImage3">This is the long description for the second figured image, for screen readers to reference.</p>
				</div>
			</div>
			<div class="row">
				<pre><code>
					&lt;Figure<br/>
					&emsp;componentClass='homepage-figure'<br/>
					&emsp;caption='Figured image 2 caption. Long description elsewhere on the page'<br/>
					&emsp;longDescID='longDescLink_reponsiveImage3'<br/>
					&emsp;captionID='caption_uid_2'/&gt;<br/>
						&emsp;&lt;Image<br/>
							&emsp;&emsp;alt='Figured Image'<br/>
							&emsp;&emsp;imageClass='component-figure-specific'<br/>
							&emsp;&emsp;fileName='/static/img/tramway.jpg'<br/>
							&emsp;&emsp;altSizes=&#123;[<br/>
								&emsp;&emsp;&emsp;&#123;minWidth: 900, sizeID:'_1000', query: '?1000', format: 'jpg'&#125;,<br/>
								&emsp;&emsp;&emsp;&#123;minWidth: 700, sizeID:'_900', query: '?900', format: 'jpg'&#125;,<br/>
							&emsp;&emsp;]&#125;<br/>
						&emsp;/&gt;<br/>
					&lt;Figure/&gt;
				</code></pre>
			</div>
		</section>

	</div>
</DefaultLayout>;

export default ImageV1Page;