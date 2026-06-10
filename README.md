Simple Tabs Component
https://roadmap.sh/projects/simple-tabs

A beginner-friendly tab switcher built with HTML, CSS, and JavaScript.

What is this?

This is a tabbed interface where clicking on a tab button shows/hides different content sections. Only one tab's content is visible at a time.

How to use

Open tabs-simple.html in your browser
Click any tab button to switch content
The active tab is highlighted with a black underline

How it works

HTML

Buttons: 4 buttons with onclick="showTab(1)", onclick="showTab(2)", etc.
Content divs: 4 <div> elements with IDs like content1, content2, etc.

CSS

.show class displays the content
.active class highlights the button with black underline
Without these classes, content is hidden

JavaScript

The showTab() function:

Hides all content - Removes .show class from all divs
Removes all button highlights - Removes .active class from all buttons
Shows selected content - Adds .show to the clicked tab's content div
Highlights button - Adds .active to the clicked button

File structure

tabs-simple.html
├── HTML (buttons + content divs)
├── CSS (styling & show/hide)
└── JavaScript (showTab function)
