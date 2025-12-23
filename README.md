# Articles Web App

A responsive Articles Web Page built using React and TypeScript.
The application allows users to browse, search, and filter articles and includes unit tests for core functionality.

This project was developed as a frontend assignment with a focus on clean structure, usability, responsiveness, and testability.

--------------------------------------------------

Features

- Fetches articles from a mock API
- Displays articles in a card-based layout
- Search articles by title, category, or source
- Filter articles by category
- Responsive layout for mobile, tablet, and desktop
- External article links open in a new tab
- Unit tests using Vitest and React Testing Library

--------------------------------------------------

Tech Stack

- React
- TypeScript
- Vite
- Vitest
- React Testing Library
- CSS (custom styling)
- json-server (mock API)

--------------------------------------------------

Project Structure

articles-web-app
- README.md
- package.json
- vite.config.ts
- src
  - assets
  - components
  - pages
  - services
  - styles
  - models
  - main.tsx
- mock-api
  - db.json

--------------------------------------------------

Running the Project Locally

Prerequisites

- Node.js version 18 or higher
- npm

--------------------------------------------------

Install dependencies

npm install

--------------------------------------------------

Start the mock API server

npx json-server --watch mock-api/db.json --port 4000

This starts the API at:
http://localhost:4000/articles

Keep this terminal running.

--------------------------------------------------

Start the frontend application

Open a new terminal window and run:

npm run dev

The application will be available at:
http://localhost:5173

--------------------------------------------------

Running Tests

To run all tests:

npm run test

Notes:
- Tests mock API calls and do not require the mock API server to be running.

--------------------------------------------------

API Configuration (Optional)

You can configure the API URL using an environment variable.

Create a .env file in the project root with:

VITE_API_URL=http://localhost:4000/articles

If not provided, the application defaults to the local mock API.

--------------------------------------------------

Responsiveness

- Mobile-first layout
- Article cards stack vertically on smaller screens
- Layout adapts cleanly across screen sizes

--------------------------------------------------

Notes for Reviewers

- Mock data is used as permitted in the assignment
- The service layer allows easy replacement with a real API
- The focus is on maintainable and production-ready frontend practices

--------------------------------------------------

Author

Developed by Gazal Goyal
