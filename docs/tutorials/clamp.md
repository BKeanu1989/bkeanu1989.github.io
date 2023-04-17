# Clamp
CSS clamp() is a CSS function that clamps a middle value between a minimum and maximum value. The function takes three parameters: a minimum value, a preferred value, and a maximum allowed value. It is useful for creating fluid and flexible layouts for different screen sizes and viewports. + [Container Queries](/tutorials/container-queries)

## Can I use
![Can I use](/images/can-i-use-clamp.png)
https://caniuse.com/?search=clamp


## Usage
The clamp() function can be used with various CSS properties such as font-size, width, height, etc. It is an efficient way to manipulate and manage how images appear on various display sizes. Before the clamp() function, developers used to put images in ‘divs’ and then manipulate the ‘div’ to adjust the image position. With clamp(), we can now work directly on how images display, allowing us to be more flexible when positioning them, and we use less code while doing it. codecoda.com

Comparison with min() and max()
Min() and max() functions are CSS functions that clamp values between an upper and lower bound. Min() returns the smallest value of a set, and max() returns the largest value. Clamp() is a step-up from min() and max() functions. The clamp() function allows us to declare a minimum value, a preferred value, and a maximum value in a single line of code. It provides a more robust way of defining sizes, lengths, and widths with the addition of a preferred value. Rather than write the min() and max() values separately, we describe them on one line using clamp(). codecoda.com

## Examples    
Here are some examples of using clamp() function:

### Example 1 - Font Size
```css
h1 {
  font-size: clamp(1.8rem, 2.5vw, 2.8rem);
}
```
In this example, the font-size of the h1 element is set to a minimum of 1.8rem, a maximum of 2.8rem, and a preferred value of 2.5vw. The font size will adjust depending on the viewport width. developer.mozilla.org

### Example 2 - Width
```css
.box {
  width: clamp(150px, 50%, 400px);
  height: 8rem;
  background: #5f76e8;
}
```
In this example, the width of the box element is set to a minimum of 150px, a maximum of 400px, and a preferred value of 50%. The width of the box element will adjust depending on the viewport width. geeksforgeeks.org

### Example 3 - Grid Gap
```css
.section{ 
  display: grid; 
  grid-template-columns: minmax(150px, 25%) 1fr; 
  grid-template-rows: 300px; 
  grid-gap: clamp(5px, 2vw, 20px);   
}
```
In this example, the grid-gap property is set to a minimum of 5px, a maximum of 20px, and a preferred value of 2vw. The gap between columns will adjust depending on the viewport width. codecoda.com

## Conclusion
CSS clamp() is a powerful function for creating fluid and flexible layouts for different screen sizes and viewports. It allows developers to declare a minimum value, a preferred value, and a maximum value in a single line of code. It is more robust than the min() and max() functions and can be used with various CSS properties such as font-size, width, height, etc. The clamp() function works under specific conditions defined by the ‘min,’ ‘max,’ and ‘preferred’ values. When we declare a clamp function, the browser adjusts and sets itself to the ‘min’ value if the preferred value is lower than the minimum value; it sets itself to the ‘max’ value if the preferred value is higher than the ‘max’ value. The browser uses the preferred value if it is between the minimum and maximum value.