# Tutorial 5: Backend Server for User Management

## **Author**

Name: Keyur Khant \
Banner ID: B00935171 \
Email ID: keyur.khant@dal.ca \
Date Created: 11 March 2024 \
Last Modification Date: 11 March 2024

## Deployed URL

- 

## GitLab URL

- 

## Deployment


# Project Overview

The backend server is designed to manage a list of users, providing API endpoints for adding, updating, and retrieving user information. It's structured around the core functionality needed for effective user management within a web application.

## Main Components

1. **Users API**: Offers endpoints to retrieve all users, add a new user, update an existing user, and fetch a specific user by their ID.

## Features

- **GET /users**: Returns a list of all users.
- **POST /add**: Adds a new user to the list. Requires `email` and `firstName` in the request body.
- **PUT /update/:id**: Updates an existing user's `email` and `firstName`. The user is identified by their `id` in the request URL.
- **GET /user/:id**: Retrieves a specific user by their ID.

### Error Handling

- Returns a `404` status code for not found resources.
- Returns a `400` status code for bad requests.
- Includes a global error handler for `500` internal server errors.

## Tech Stack

- [Node.js](https://nodejs.org/en/docs/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## Built With

- [Node.js](https://nodejs.org/en/docs/) - The runtime environment
- [Express](https://expressjs.com/) - The web framework
- [TypeScript](https://www.typescriptlang.org/docs/) - Language
- [npm](https://docs.npmjs.com/) - Dependency Management

## Sources Used

### `index.ts`

The server setup and endpoint definitions were created with guidance from the official Express.js documentation and various TypeScript tutorials to ensure strong typing and maintainable code.

### Error Handling Middleware

The error handling approach was adapted from Express.js's best practices for error handling, ensuring a robust and user-friendly API.
