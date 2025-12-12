# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

🛍️ Product Store — React + Redux Toolkit

A simple product store built with React and Redux Toolkit, showcasing global state management, async API fetching, and cart functionality.

🚀 Features

Fetch products asynchronously using createAsyncThunk

Loading & error states handled via extraReducers

Add / remove items in a global cart

Clean state management using:

createSlice

useSelector / useDispatch

Object.freeze for enum-like statuses

🧱 How It Works

On page load, a thunk fetches product data.

Redux updates state based on async lifecycle:

loading → idle → error

Products display in the UI.

Users can add or remove items from the cart.

Cart state is available globally across the app.

📂 Project Highlights

Modern Redux Toolkit setup

Clear separation of product and cart slices

Simple, scalable architecture

Easy to understand async flow with thunks

🎯 Purpose

This project demonstrates how to build a small, real-world React application using Redux Toolkit with:

Async data fetching

Centralized state

Clean reducer logic

React-Redux hooks
