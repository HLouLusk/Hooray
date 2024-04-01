# Project Title

["Hooray"]

## Overview

What is your app? Brief description in a couple of sentences.

"Hooray" is a website designed for a software agency startup, envisioned by two friends. It aims to provide a visually appealing platform with exceptional UI/UX, focusing on strong calls to action for engaging with the company's products and services.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

The need for this app arises from the busy schedules of the founders, who have not yet had the time to develop their website. Additionally, the project aims to address the challenge of the software engineering field being dominated by senior developers, by offering opportunities to upcoming talented developers.
### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

The target users of the app are businesses or individuals interested in nearshoring IT workers for their web and software applications. The app should cater to their needs with a user-friendly interface.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

Landing Page: A visually captivating page describing the services offered, with animations and strong calls to action.
Contact Form: An inquiry form enabling users to get in touch with the founders and inquire about services and prices.
Our Work: A page showcasing the agency's past work with clear navigation and compelling visuals.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

Frontend: React, EmailJS
Backend: Firebase
Database: Firebase (for CMS and authentication)


Limitations: only time and energy. Learning about CMS and Authentication

### APIs

List any external sources of data that will be used in your app.

I will not require an external API for this project.

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Landing Page
Admin Page (Content Management System)
Services
Portfolio(past projects)
About
Blog (Dynamic content)

A reusable contact form has been created in lieu of a contact us page


### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

The mockups are still in the works as I just changed my capstone idea over the weekend. I will be referencing other software agencies websites for my design.
A colour palette for this website will be created after I discuss with my friends what they would like design wise.

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

Most content will be static. On the blog page I will need to retrieve data from the API to populate the text portion of the page.
The data will be editable\* and deletable via a special page for admin only.

(\*edit portion is my nice to have)

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

/blog/ => makes a GET request to get all of the blog posts.(public)
/blog/:id => makes a GET request to get the blog content for the given article (public)

/blog/ => allows POSTs requests to create blog articles (authenticated users can create content)
/blog/ => Delete request to remove content from blogs (auth)

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

Authentication is implemented via Firebase, allowing access to the admin panel for managing blog content.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

-Content and Components Setup: Populate necessary content and components, focusing on styling.
-Design Refinement: Continuously refine the design based on references and feedback.
-Blog Post Creation: Write a blog post before submission, populate other posts with sample text.
-Final Touches: Implement animations and graphics as time permits.


## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

Additional animations and graphics to enhance the overall user experience.
Link to LinkedIn for each team member on “ABOUT” page.
Picture upload functionality on the blogs. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
