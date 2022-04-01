# Image component

The Image component is an abstraction over the HTML Picture element to simplify the rendering of responsive images.

## Props

| Prop         | Description                                                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alt          | img alt text                                                                                                                                                                                     |
| className    | picture element className                                                                                                                                                                        |
| decoding     | img element decoding attribute, Enum: 'async'/'sync'/'auto', default 'async'                                                                                                                     |
| height       | img element height attribute, Number, default null                                                                                                                     |
| imgClassName | img element className                                                                                                                                                                            |
| loading      | img element loading attribute, Enum: 'lazy'/'eager', default 'lazy'                                                                                                                              |
| sources      | picture element source attribute, an Array of Objects with two properties <ul><li>src: String reference to local/relative or remote image URI</li><li>media: String for media property</li></ul> |
| src          | img src attribute                                                                                                                                                                                |
| width       | img element width attribute, Number, default null                                                                                                                     |

## Example

First import the Image component

```
import Image from '@components/image';
```

Then use it

```
	<Image
	  alt="Woman laughing alone with a salad in her hand"
	  className="picture"
	  sources={[
		{ src: '/static/img/image.jpg', media: '(min-width: 768px)' },
		{ src: '/static/img/image-small.jpg', media: '(max-width: 767px)' },
	  ]}
	  src={'/static/img/image-low-res.jpg'}
	  decoding="auto"
	  loading="eager"
	  height="300"
	  width="800"
	/>
```

Renders

```
<picture class="picture">
	<source srcset="/static/img/image.jpg" media="(min-width: 768px)" />
	<source srcset="/static/img/image-small.jpg" media="(max-width: 767px)" />
	<img src="/static/img/image-low-res.jpg" alt="Woman laughing alone with a salad in her hand" decoding="auto" loading="eager" height="300" width="800">
</picture>

```

## Figure

The Figure component is a wrapper around the figure element. The figure element is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document. Most often sed to annotate illustrations, diagrams, photos, poems, and code listings.

## Props

| Prop             | Description                                                                                                     |
| ---------------- | --------------------------------------------------------------------------------------------------------------- |
| children         | child elements, [any flow content is permitted](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2) |
| className        | figure element className                                                                                        |
| caption          | figcaption content                                                                                              |
| captionClassName | figcaption element className                                                                                    |

## Example

Using the Figure and Image components together (either can be used on their own).

First import the Figure component

```
import Image, { Figure } from '@components/image';
```

Then use it

```
<Figure
	caption={'Stock photography site portayal of healthy living'}
	className={'figure'}
>
	<Image
	  alt="Woman laughing alone with a salad in her hand"
	  className="picture"
	  sources={[
		{ src: '/static/img/portrait.jpg', media: '(min-width: 768px)' },
		{ src: '/static/img/portrait-small.jpg', media: '(max-width: 767px)' },
	  ]}
	  src={'/static/img/portrait-low-res.jpg'}
	  decoding="auto"
	  loading="eager"
	  height="300"
	  width="800"
	/>
</Figure>
```

Renders

```
<figure class="figure">
	<picture class="picture">
		<source srcset="/static/img/image.jpg" media="(min-width: 768px)" />
		<source srcset="/static/img/image-small.jpg" media="(max-width: 767px)" />
		<img src="/static/img/image-low-res.jpg" alt="Woman laughing alone with a salad in her hand" decoding="auto" loading="eager" height="300" width="800">
	</picture>
	<figcaption>Stock photography site portayal of healthy living</figcaption>
</figure>
```
