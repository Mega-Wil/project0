# Project 0: Search

## Description

This is a front-end for Moogle Search, Moogle Image Search, and Moogle Advanced Search, in the style of Google. Users can search the web and be redirected to the google search result for that particular query. 

## Specification

### Pages:

1. Moogle **Search** (which must be called index.html)
2. Moogle **Image Search**
3. Moogle **Advanced Search**

### Navigation:
   
**Moogle Search page**: There should be links in the upper-right of the page to go to Image Search or Advanced Search. 
On each of the other two pages, there should be a link in the upper-right to go back to Moogle Search.

### Functionality:

**Moogle Search page**: The user should be able to type in a query, click “Moogle Search”, and be taken to the Google search results for that page.
An “I’m Feeling Lucky” button - consistent with Google’s own behavior, clicking this link should take users directly to the first Google search result for the query, bypassing the normal results page.

**Moogle Image Search**: The user should be able to type in a query, click a search button, and be taken to the Google Image search results for that page.

**Moogle Advanced Search**: The user should be able to provide input for the following four fields (taken from Google’s own advanced search options)
Find pages with… “all these words:”
Find pages with… “this exact word or phrase:”
Find pages with… “any of these words:”
Find pages with… “none of these words:”
When the “Advanced Search” button is clicked, the user should be taken to the search results page for their given query.

### Aesthetics:

Like Google’s own, your search bar should be centered with rounded corners. 
The search button should also be centered, and should be beneath the search bar.

Like Google’s own Advanced Search page, the four options should be stacked vertically, and all of the text fields should be left aligned.
Consistent with Google’s own CSS, the “Advanced Search” button should be blue with white text.

The CSS you write should resemble Google’s own aesthetics.

## Technologies Used
This project consists of HTML, CSS and JavaScript code only.

## How the run the project
1. Clone the repository:
   <pre>git clone https://github.com/YOUR-USERNAME/project0.git</pre>
2. Navigate into the project folder:
   <pre>cd project0</pre>
3. Open search page in your browser:
   - Double-click the index.html file
     **OR**
   - Run this command in the default browser:
     <pre>
      xdg-open index.html # Linux
      open index.html # macOS
      start index.html # Windows
     </pre>

## Youtube Link
[Project 0: Search](https://youtu.be/HE2tYK2taJc)

## Notes
### Future Improvements
1. Currently the CSS is very static and doesn't response well to resizing. The search bar should resize for a smaller browser window and the advanced search layout shout also adapt to a smaller browser window.

2. Improve JavaScript to avoid old query flashing on page return.
