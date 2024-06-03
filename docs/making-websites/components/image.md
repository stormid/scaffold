# Image component

The Image component is an abstraction over the HTML Picture element to simplify the rendering of responsive images.

## Props

| Prop          | Description                                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alt           | img alt text                                                                                                                                                                                     |
| className     | picture element className                                                                                                                                                                        |
| decoding      | img element decoding attribute, Enum: 'async'/'sync'/'auto', default 'async'                                                                                                                     |
| fetchPriority | img element fetchpriority attribute, Enum: 'high'/'low'/'auto', default null                                                                                                                     |
| height        | img element height attribute, Number, default null                                                                                                                                               |
| imgClassName  | img element className                                                                                                                                                                            |
| loading       | img element loading attribute, Enum: 'lazy'/'eager', default 'lazy'                                                                                                                              |
| sources       | picture element source attribute, an Array of Objects with two properties <ul><li>src: String reference to local/relative or remote image URI</li><li>media: String for media property</li></ul> |
| src           | img src attribute                                                                                                                                                                                |
| width         | img element width attribute, Number, default null                                                                                                                                                |

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
	  fetchPriority="high"
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
	<img src="/static/img/image-low-res.jpg" alt="Woman laughing alone with a salad in her hand" decoding="auto" fetchpriority="high" loading="eager" height="300" width="800">
</picture>

```
