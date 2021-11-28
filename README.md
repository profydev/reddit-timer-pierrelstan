# Welcome to Reddit Timer App 👋🏾

## The following are the screenshots of the different stages of the app.

![alt text](https://res.cloudinary.com/stanley/image/upload/v1637689677/homepage_nob8zl.svg)
\
&nbsp;
\
&nbsp;
![alt text](https://res.cloudinary.com/stanley/image/upload/v1637689626/search_page-loading_1_izcnte.png)
\
&nbsp;
\
&nbsp;

![alt text](https://res.cloudinary.com/stanley/image/upload/v1637750429/search_page-results_1_pxg5l0.png)

\
&nbsp;
\
&nbsp;
## Description:

Reddit Timer it's a Web app for professional content creators. To help them know when they should share their content so they can reach more people.

\
&nbsp;
\
&nbsp;

## Tech Stack:

1.  [React/React Hooks](https://reactrouter.com/)
2. [ React-Router](https://reactrouter.com/)  for navigation
3. [Styled-components](https://styled-components.com/) for styling
4. [React Testing Library](https://testing-library.com/docs/). for writing automated tests.

\
&nbsp;
\
&nbsp;

### Tools Use for the Project

-  [Figma](https://figma.com/) - Where the design from
- [Perfect Pixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en-US) - To Help create Pixel perfect Layout
- [ClickUp](https://clickup.com) - Project Management Tool
- [Github](https://github.com) - Version control & team collaboration
- [Slack](https://slack.com) - Team communication tool

\
&nbsp;
\
&nbsp;

## The skills that I learned while building the project:


- Creating [pixel-perfect](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en-US) designs
- Planning and implementing a complex UI component
- Implement data fetching with error handling
- Writing integration tests
- Professional Git workflow with pull requests
- Code reviews
- Continuous integration

\
&nbsp;
\
&nbsp;

## Technical decisions:
The app performs simple actions, I Choose not to use Redux as state management because of that.

I created a custom hook to encapsulate hook-related logic that may be useful in the future if needed.

The file contains three functions:
- A recursive function called fetchPaginatedPosts handles sending five requests to the Reddit API.

- A function called groupPostsPerDayAndHour nested 2D array that contains the number of posts grouped by weekday and hour

- A custom hook called useFetchPosts triggers data fetching stores the result in a state variable that keeps track of the loading state.

\
&nbsp;
\
&nbsp;


## About this Project
This course mimics professional real-world development environment designs via Figma. The project's split into small tasks using ClickUp as a project management tool. I created a pull request for every piece of work. [Johannes](https://jkettmann.com/) (a senior developer) and mentor Tara (a bot) reviewed the code line by line.

I was free to choose any technical stack, packages, and coding styles to finish the project as long as I met the acceptance criteria of a given task. The only limitation was to use React.

\
&nbsp;
\
&nbsp;


 ## Complicate business logic:

 - [FetchPaginatedPosts.js](/src/API/LoadTheData/FetchPaginatedPosts.js)

![business logic](https://res.cloudinary.com/stanley/image/upload/v1637968378/bussiness_logic_dbumr0.png)
\
&nbsp;
\
&nbsp;

##  interesting CSS:

- [HeatmapRow.style.js](/src/components/Heatmap/HeatmapRow.style.js)
![css](https://res.cloudinary.com/stanley/image/upload/v1637969665/interestingCss_sworgi.png)

\
&nbsp;
\
&nbsp;

## test:
- [Search-page.test](/src/__tests__/search-page.test.js)
![test](https://res.cloudinary.com/stanley/image/upload/v1638057475/searrch-page.test2_w54nqh.png)

\
&nbsp;
##  If I  had more time
- This is the changes I would implement to the app:

  1. Highlights for cells containing posts with deleted author
  2. Make the app responsive on all devices


\
&nbsp;
\
&nbsp;
## Installation:

OS / Linux / Windows

`yarn install `

\
&nbsp;
\
&nbsp;
## Usage:
 After all the packages has been successfully installed, you can run:

 `yarn start`

\
&nbsp;

 ## Run tests:

`yarn  test `

or

`yarn cypress:open`
\
&nbsp;
\
&nbsp;

## Author
👤 Stanley Pierre Louis

- Twitter: [@pierrelstan](https://twitter.com/pierrelStan)
- LinkedIn: [@pierrelstan](https://linkedin.com/in/pierre-louis-stanley-930110133)

