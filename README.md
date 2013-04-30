# saveINTE Hero Page

## Version 0.2
April 30, 2013

### New today

- Integration with Change.org's API
- Style system based on mockups

### Things to Build Next

- The responsive grid items need work at smaller sizes
- The banner doesn't respond very well at smaller width's either

## Version 0.1
April 29, 2013

On Sunday, April 28 2013, we had the idea to build a hero website for our campaign.
We're drawing inspiration from:

- [theydontworkforyou.org](http://theydontworkforyou.org/)
- [Carter Digital](http://www.carterdigital.com.au/)
- [Etch](http://etchapps.com/)
- [Big Quote](http://bigquote.co/)
- [42angels](http://42angels.com)

[Live Demo](http://saveinte.bytheweb.co)

After day one of development this is what we have:

### Responsive Content Grid

We have a responsive masonry grid that accepts four different types of content: photo with text; just text; YouTube and Vine embeds. It seems to work just fine at any resolution, but hasn't been tested thoroughly across devices. Content is added to the page from four JSON objects—one for each content type—and is rendered with angularjs. Each block can be assigned a priority level (as an integer,) which will affect how close to the top of the grid it is rendered, allowing us to curate "more important" content to the top.

### Change.org Integration

There is basic communication with the Change.org API, we just need to build a block that uses that data and fit it into our grid. In our mockups we didn't account for this, but to allow people to sign our petition from our hero page we have to collect the following personal info with a form:

- first name
- last name
- email
- city
- postal code
- country (maybe we can assume Canada?)

### Things to Build Next

- sections above and below the hero grid
- adding content with text files / allowing users to post their own content
- lazy loading content