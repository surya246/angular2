HTML5 Sortable Zepto.js Plugin
============================

**[Demos](http://james2doyle.github.com/zepto-dragswap)**

!!WARNING FOR MOBILE!!
----------------------

This plugin uses native *HTML5 Drag and Drop*, which means **this is not supported by any mobile browsers/devices**. Please see the [CanIUse](http://caniuse.com/#feat=dragndrop) entry.

Check out [Pep](http://pep.briangonzalez.org/) or [Dragabilly](http://draggabilly.desandro.com/) if you need touch support.

Why Not Sortable
----------------

It is sortable, but its more like swappable...

Features
--------

* 2KB (minified).
* Built using native HTML5 drag and drop API.
* Supports both list and grid style layouts.
* Add drop animations with CSS3.
* Class control for move, over, drop and exclude.
* Vender prefix getter for detecting animation end.
* Works in IE 7+, Firefox 16+, Chrome 23+, Safari 5.1+ and, Opera 12.1+.

Usage
-----

Use `sortable` method to create a sortable list:

``` javascript
$('.sortable').dragswap({
    element: 'li', // the child element you are targeting
    overClass: 'over', // class when element goes over another element
    moveClass: 'moving', // class when element is moving
    dropClass: 'drop', // the class to add when the element is dropped
    dropAnimation: false, // do you want to detect animation end?
    exclude: '.disabled',  // excluded elements selector, here we can add array of excluded classes ['.exclude', '.exclude2']
    prefix: getPrefix(), // function to get the prefix of the browser
    dropComplete: function(){} // what to do when the drop is complete
});
```

serialize it

``` javascript
$('.sortable').dragswap('toArray');
// returns the id of each element in the current order

$('.sortable').dragswap('toJSON');
// returns a strigified json of the current order
```

Drop Animation
--------------

There is a function to detect animation end in the drop handler. Enabling dropAnimation will detect this. Otherwise the class will stay on the elements.

To Do
-----

* control the attributes to be swapped
* elements actually sort and don't just swap
* test in <IE9 because classList should be used
* connected lists
* drag handle

License
-------

(The MIT License)

Copyright (c) 2015 James Doyle(james2doyle) <james2doyle@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
