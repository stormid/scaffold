## Image component

#### Image - renders a Picture element
- alt
- className
- src: Default / fallback image
- sources: Array of Objects with the two srcset attributes
	- src: String reference to local/relative or remote image URI
	- media: String for media property
- decoding: Defaults to 'async' - 'async', 'sync', 'auto'
- loading: Defaults to 'lazy' - 'lazy', 'eager'

#### Figure (optional)
- children: An Image component
- className
- caption: Used as figcation content