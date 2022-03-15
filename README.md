## Display a list practice

The goal here is to help you see web development the way experienced developers do: as a series of finite and repeatable tasks.

There are only so many things we do in an app.

[Here is a list of the 10 major plain JavaScript patterns.](https://github.com/alchemycodelab/module-one-curriculum-base/blob/main/PATTERNS.md)

 Let's practice the 'display a list' and 'render function' patterns.

**Scoring rubric: 2.5 point for each array displayed to the page.**

1.  Goal: render 4 separate lists of things to the same index.html file. Minimally,
    *   one list should be a list of string,
    *   one should be a list of simple objects,
    *   one should be a list of objects where one property is a nested object,
    *   and one should be a list of objects where one property is an array.
    *   A a stretch goal, feel free to make all of them arrays of deep objects (with array and nested object properties).
2.  Start with the [list practice template repo](https://github.com/alchemycodelab/display-a-list-practice).
3.  Repeat the following process 4 times, with 4 different domains, all in the same template:
    1.  Come up with a domain for this data (lie 'dogs' or 'candies'). Let's assume you picked 'candies'.
    2.  Rename 'array-one.js' to 'candies-data.js' or whatever. In that data file, create an array of at least 3 objects for that domain (each object should have at least 3 properties). The objects in the array should all have the same properties.
    3.  Rename 'render-one.js' to 'render-candy.js' file for your candy array. For your array of objects, write a simple render function that accepts one object and returns a DOM elements. This function should return at minimum a div with two p tags. The outer div should have a css class of 'candy-item'.
    4.  Then, in app.js import your array and render function and grab a container element from the DOM.
    5.  Loops through your array, and for each object, render and appends a styled candy element to the container element you grabbed from the DOM.
    6.  Note: do this process **one array at a time**. Do not write 4 arrays, then 4 render functions, etc. Please work through the first array, then the first render function, then the first display function.
