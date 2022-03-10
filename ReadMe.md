# Introduction

This is a web app that allows users to upload a file that contains texts. The app will convert "the most used word" in the text with "foo" and "bar", and present the text with converted words. The text uploader can detect and show error messages, if the type of the chosen file is incorrect, if there is no text in the file or if the user did not choose any file.

## Technics, Languages, Frameworks used in the project

- React
- JavaScript
- Axios
- Node.js
- Express.js
- Sass
- BEM

I chose to use React and Node.js to build the app because they are both written in javascript and they are the techniques I enjoy work with. In the project, I put extra time on creating more user friendly interface by styling and highlighting the key word as well as implementing the loading icon before rendering the text outcome.

**React** is the framework that I have been using in the majority of my work and private projects. I like using its **hooks and functional components** because it makes the code easier to read and also simplifies the way to handle the states and the props.

In the backend I use **Express**, which is a **Node.js** web framework to build the server, and the API endpoint. I like its built-in middleware that make it easier to set up the project.

In the coding structure, I tried to break down the components and functions to keep the code simple and clean so it is easier to read. Although this is not a big project, I'd like to keep this in practice.

In styling, I chose to use class naming convention **BEM and Sass**, because BEM makes the class names clear to read and it increases the chance to avoid the styles that are on the same html tag elements but in different component get overwrite with each other. Besides, Sass makes the CSS structure more organized with its rules such as nesting selectors, import files and variables etc.

# How to run the project?

After cloning the project

## Install packages

In the **textconvert** directory, please run:

### `npm install`

## Start the project

In the **textConvertNodeReact** directory, please run s:

### `npm install`

### `npm run dev `

The server will run at port: 8002
The frontend app will run on localhost:3000

# How to use the app

Choose a file and upload :D
