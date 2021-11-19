# Project 9 - Installation Steps and Project Requirements

This repo contains all the source code to run the frontend of the DashboardAnalytics.
The backend is hosted on a different server.
The frontend is hosted on this server.

## 1. General Information

To start this project, you will need a NodeJS backend to access data that is necessary to visualise the user's sports acitivity in the form of charts.

The backend is provided in [this repo](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).
It will allow you to make your HTTP calls and recover sample data.
Everything is there; installation steps are provided. You can find the instructions in the README.md file.

## 1. Prerequisites

- [NodeJS (version 15.3.0)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
  [Git](https://git-scm.com/) to clone this repository

If you are working with several versions of NodeJS, it is recommended to install nvm. This tool will allow you to easily manage your NodeJS versions.

## Dependencies

[React](https://reactjs.org/) is used to build the frontend.
[recharts](https://recharts.org/en-US) is used to build the charts.
[prop-types](https://www.npmjs.com/package/prop-types) is used to validate the props of the components.
[jsDOC](https://www.npmjs.com/package/jsdoc) is used to generate the documentation of the components.
[axios](https://www.npmjs.com/package/axios) is used to make HTTP calls to the backend. (I USE fetch INSTEAD OF AXIOS)

## 2. Launching the Project

Clone/Fork/ this [repository](https://github.com/AdrianGeorgeM/Dashboard-for-Analytics-with-React.git) on your computer
The `yarn start` or `npm install` command will allow you to install the dependencies.

## 3. Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

Only two users available for this project.

You can change to any other user by changing the id in the index.js App user="12" or App user="18" file with the following command:
user='12' />//Karl
user='18' />//Cecilia -->
Or
Start the local server and open the webpage in the browser:
https://adriangeorgem.github.io/Dashboard-for-Analytics-with-React/

it works togheter with the backend from localhost:3000
