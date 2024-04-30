# Swiper carousel component

Where a carousel is required we utilise the 3rd party **swiper.js**   
As this is a highly configuarable component I suggest you start with a previous Storm project implimentation and explore the API and customise the CSS as required (see the references below).  

Below is a brief introduction to get you started.

## Implementation

### A .jsx component

The component will bring a swiper instance onto the page and populate it with all required content, eg:
- images
- copy
- links

### The JS module

***Please see a project JS for full details of all utalised configuration options***

Importantly, the slider has parameters to control the number of items in view -  *slidesPerView*  
This can be refined with a number of breakpoints to enable the design to display a different number of slide items at various display widths.  
Further, the *slidesPerView* does not need to be a whole integer value, but could for example be **2.25**. This allows off-view slides to "peek", tempting the user to scroll.


### The CSS

***Please see a project CSS for full details of all component parts***

Swiper requires CSS, which has the namespace *.swiper*

The component comprises the following elements:
- *swiper__title* and *swiper__subtitle*  
- *swiper__navigation*  
  - Previous and Next buttons  
- *swiper__pagination*
  - Progressbar or bullets *swiper__pagination-progressbar*
  - The progressbar can be removed if required by the design
- *swiper__slide*
- *swiper__card*
  - The content of the carousel
  - This can be extended for example with *js-swiper--rounded* for circular cards



## Design variation

The slider scans rendered mark-up for the ***.js-swiper*** class in order to create the carousel.

### There can be multiple carousels on a single page.  

The module can be extended to display different numbers of slides per carousel if required.  
- Example:  
  -  *.js-swiper--4* might designate 4 *slidesPerView*
  -  *.js-swiper--6* might designate 6 *slidesPerView*

### Slide content and format

The markup of the slides can vary as required, display for example, a full data card with text and image, or just an image.  
Standard CSS can be applied to make a slide round (ie *border-radius: 50%;*)



## References

- A working example of this can be seen in the Glasgow Life projects.
  - Glasgow Life - Portal
  - Glasgow Club
- [Swiper.js official API](https://swiperjs.com/swiper-api)