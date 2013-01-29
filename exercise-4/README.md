# Javscript

The `index.html` file has a red header that should behave as shown in `demo.m4v`. Currently, there's a bug in `js/main.js` that causes the header to be visible only while the page is scrolled to the top. As shown in the demo video, the header should be visible if the user scrolls upwards even if they are not near the top of the page.

Fix the javascript bug and make the header behave as described below.

## Requirements

- When the user scrolls towards the bottom of the page the header should be hidden offscreen (to the top).
- When the user scrolls towards the top of the page the header should be visible.
- The header should animate (CSS3) between the two states.
- If the user is near the top of the page the header should be visible regardless of scroll direction.