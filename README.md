# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![image](tipcal.png)
![image](tipcal1.png)


### Links

- Solution URL:(https://github.com/ibimina/tip-calculator-app-main)
- Live Site URL:(https://ibimina.github.oi/tip-calculator-app-main/)

## My process
This was a HTML,CSS,JS build.I created the mobile app first, I starte creating the Html structure.Then built out the CSS,added media queries to make a desktop version. JS last for functionality.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I  used this  to remove the arrow increase and decrease in input type number
```css
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
```

i used this functions to format the custom input to be empty when a percentage button is clicked and to disable the percentage button when the custom input is being used to calculated the tips
```js
tipPercent.forEach((element) => {
   
  element.addEventListener("click", (e) => {
    e.preventDefault();
    
    let perValue = e.target.value;
    perValue.checked = true;
    
    if (perValue) {
      customPercent.value = "";

      percent = Number(perValue);
       element.classList.add("class", "active");
    }

    console.log(perValue);
    // cal();
    // totalCal();
  });
});

customPercent.addEventListener("input", (e) => {
  e.preventDefault();

  let perValue = e.target.value;
  if (perValue > 0) {
    tipPercent.forEach((element) => {
      perValue.checked = false;
    });
    percent = Number(perValue) / 100;
  } else {
    perValue = "";
  }

  console.log(perValue);
//   cal();
//   totalCal();
});
```



### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.



### Useful resources

- [appcode.app](https://appcode.app/how-to-remove-the-arrows-on-html-input-type-number) - This helped me to remove the arrows on he HTML input type number. I really liked this pattern and will use it going forward.




## Author


- Ibimina Hart
- Frontend Mentor - (https://www.frontendmentor.io/profile/ibimina)
- Twitter - (https://www.twitter.com/ibiminaaH)


