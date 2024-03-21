# Project Title

["Hooray"]

## Overview

What is your app? Brief description in a couple of sentences.

It is a website for a software agency startup for two friends. It should be aesthetically pleasing with great UI/UX. It should have strong calls to action for engaging with the company's products and services.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

My friends have very busy lifestyles, and I would like to help them acheive their goals with this startup. They haven't found the time to build this website for themselves yet. I will be seeking user stories from them for this capstone project.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

The app is for businesses or individuals interested nearshoring IT workers for their web and software applications.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

Landing Page:

There needs to be a page that describes the services in depth that connects the user to the get in touch page. This page should include animations, and visually captivating design to show off my friend's talents and capabilities.

Contact Form:

There will also be a contact form to get in touch with my friends and inquire about services and prices. It will create an email and send the message to them?

Our Work:
There needs to be a page describing and displaying their past work. This page should be clean, clear and easy to navigate with great visuals.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

React, Heroku, Node, Express, Strapi or Firebase (maybe for backend CMS and authentication).

Limitations: only time and energy. Learning about CMS and Authentication

### APIs

List any external sources of data that will be used in your app.

I will not require an external API for this project.

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

-Landing Page
-Admin Page (Content Management System)
-Services
-Our Work => past work
-About
-Blog => Dynamic content will be here, it will load articles from a database.
-Contact us

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

website will have a route /admin which will promt the user to login.
Logging in will allow the user to see blog management page with UI for creating and deleting articles
At this time, I am undecided of the approach, but I am confident I will use either Passport.js or Strapi for the authentication and content management

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

I plan to start this website by simply filling it with the necessary content and components, then styling it all. I would like to have this complete as soon as possible.
The design of this website has been the most challenging part for me so far. Having more time to think about the design and check out references while I work on the content will help me manage my time and make a beautiful website.

Before submission, I would like to have a blog post written by one of my friends. In the meantime, I will populate the posts with sample text.

This roadmap is still in the works!

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

/blog/ => allows a PUT request to edit blog content (authenticated users)
CSS and Javascript Animations

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
