import { h } from 'preact';
import DefaultLayout from '@layouts/default';

import Image from '@components/image2';

export const meta=[{
	name: 'description',
	content: 'Dev for Image Component'
}];

const HomePage=() => 
<DefaultLayout section={'Home'}>
	<div class='centered wrap'>

		<section>
			<h1>Image component proposal</h1>
			<h2>Overview</h2>
			<p>Of the two approaches to embedding images, <code>&lt;picture&gt;</code> and <code>srcset</code>, the best approach appears to be using the <code>&lt;picture&gt;</code> element.</p>

			<p>I have created an <code>&lt;Image&gt;</code> component to leverage this approach.</p>
			<p>In addition I also looked at a <code>&lt;Figure&gt;</code> component to act as a wrapper for the image.</p>

			<p>After feedback I have made a simpler, more declarative component, and better implimented BEM conventions for components.<br/>
			Versions are linked below.</p>
		</section>

		<section>
			<h3>Navigation:</h3>
			<p>Home</p>
			<p><a href="/v1/">Component v1</a></p>
			<p><a href="/v2/">Component v2</a></p>
			<p><a href="/v3/">Component v3</a></p>
		</section>

		<section>
			<h3>References:</h3>
			<ul class="notes">
				<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">MDN Web Docs - The &lt;img&gt; element</a></li>
				<li><a href="https://www.w3.org/WAI/tutorials/images/">W3.org - Images Concepts</a></li>
				<li><a href="https://www.w3schools.com/tags/tag_picture.asp">W3 Schools &lt;piture&gt; tag</a></li>

				<li><a href="https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/">CSS-Tricks - A Guide to the Responsive Images Syntax in HTML</a></li>
				
				<li><a href="https://www.digitalrhetoriccollaborative.org/2016/06/15/image-accessibility-part-i-beyond-alt-attributes/">DRC - Image Accessibility, Part I: Beyond alt Attributes</a></li>
				<li><a href="https://blog.pope.tech/2020/03/20/broken-aria-reference-example/">Case for an empty aria-describedby attribute</a></li>
			</ul>
		</section>

	</div>
</DefaultLayout>;

export default HomePage;