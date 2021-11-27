# Welcome to Reddit Timer App 👋🏾

## The following are the different stages of the app:

![alt text](https://res.cloudinary.com/stanley/image/upload/v1637689677/homepage_nob8zl.svg)

![alt text](https://res.cloudinary.com/stanley/image/upload/v1637689626/search_page-loading_1_izcnte.png)

![alt text](https://res.cloudinary.com/stanley/image/upload/v1637750429/search_page-results_1_pxg5l0.png)


## Description:
***
Reddit Timer it's a Web app for professional content creators. To help them know when they should share their content so they can reach more people.

$~$

## Tech Stack:
***
1.  [React/React Hooks](https://reactrouter.com/)
2. [ React-Router](https://reactrouter.com/)  for navigation
3. [Styled-components](https://styled-components.com/) for styling
4. [React Testing Library](https://testing-library.com/docs/). for writing automated tests.

$~$

### Tools Use for the Project
***
-  [Figma](https://figma.com/) - Where the design from
- [Perfect Pixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en-US) - To Help create Pixel perfect Layout
- [ClickUp](https://clickup.com) - Project Management Tool
- [Github](https://github.com) - Version control & team collaboration
- [Slack](https://slack.com) - Team communication tool

$~$

## The skills that I learned while building the project:
  ***


$~$


- Creating [pixel-perfect](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en-US) designs
- Planning and implementing a complex UI component
- Implement data fetching with error handling
- Writing integration tests
- Professional Git workflow with pull requests
- Code reviews
- Continuous integration

$~$

## Technical decisions:
***

The reason why I choose not to manage the state of the app with redux is because the application perform simple actions.

I created  a custom hook instead  to encapsulate hook-related logic that can be re-used in the future.

The file contains three functions:

- A recursive function called fetchPaginatedPosts which is responsible for sending 5 subsequent requests to the Reddit API.

- A function  groupPostsPerDayAndHour that  nested 2D array that contains the number of posts grouped by week day and hour

- The custom hook called useFetchPosts which triggers the data fetching, stores the result in a state variable, and keeps track of the loading state.


$~$
## About This Project
 This course mimics a professional real-world development environment,
designs were provided via Figma. The project was split into small tasks using ClickUp as a project management tool. I created a pull request for every task. The code was reviewed line by line by mentor Tara a bot  and Johannes a senior developer.

$~$
I was free to choose any technical stack, packages, and coding styles to finish the project as long as I met the acceptance criteria of a given task. The only limitation was to use React.

$~$


 ## Complicate business logic:
 ***
 - FetchPaginatedPosts.js

![business logic](https://res.cloudinary.com/stanley/image/upload/v1637968378/bussiness_logic_dbumr0.png)
$~$

##  interesting CSS:

- HeatmapRow.style.js
![css](https://res.cloudinary.com/stanley/image/upload/v1637969665/interestingCss_sworgi.png)
$~$

## test:
- useFetchPosts.test
![test](https://res.cloudinary.com/stanley/image/upload/v1637972023/useFetchPosts.test_s14ekw.png)
$~$


## Installation:

OS / Linux / Windows

`yarn install `

## Usage:
 After all the packages has been successfully installed, you can run:
 `yarn start`

$~$
 ## Run tests:

`yarn  test `

or

`yarn cypress:open`
$~$

## Author
👤 Stanley Pierre Louis

- Twitter: [@pierrelstan](https://twitter.com/pierrelStan)
- LinkedIn: [@pierrelstan](https://linkedin.com/in/pierre-louis-stanley-930110133)

