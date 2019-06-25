## Global Setup

Since this is our starting commit, we need to set up some global styles before anything else. Read the `styled-components` guidelines [here]([https://www.styled-components.com/docs/basics#installation](https://www.styled-components.com/docs/basics#installation))

1. set up a `GlobalStyles.js` in the styles directory. Follow the guidelines to do the global `html/body` styles like width, height, padding, margin, and fonts
2. The font family I used is Roboto, but you can use any from the [Google Fonts]([https://fonts.google.com/](https://fonts.google.com/)) library. When you select a font it'll give you the import command for css (if confusing just do a search on stack overflow)
3. Set the global font family, and font size (defaults to 16px)
4. export a base `theme {}` object from `theme.js` in the styles directory. Its ok if it's empty.
5. Set up the `ThemeProvider` in `App.js` as per the guide. To test if this worked, set the `background-color` in `GlobalStyles.js` to something like red.
    1. Actual BG color is `#f2f2f2`
6. Once the styles, font, and color is set up, we are done with the prep (for now).
7. Im going to add things like prettier and `es-lint` to the project so you don't have to worry about that

## First Component

Based on the image, lets start with the most simple;

### Render a single label entry

**Name**

`Entry.js`

**Should**

1. Take in `title` and `amount` as props
2. Display as a rectangle block, with the title and amount
3. `amount` should have a dollar sign at the front of it

**Styles**

- background-color: `#EBEBEB`
- font-color: `#636363`
- border-radius: `4px`
- font-size: `15px`
- spacing: `8px` inside the box, whatever you want between the title and the amount

**Notes**

This component should be in it's own file, and should get imported into `App.js` and used **once** in the App render method. You can hardcode the props it gets in `App.js` since we don't have any data to worry about it

Once done, commit push the code up to Github and let me know.