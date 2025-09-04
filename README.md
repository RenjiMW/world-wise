# WorldWise Technical Documentation

## Overview

WorldWise is a React application for tracking your travels by marking cities on a map. It uses Vite for development, Leaflet for interactive maps, and JSON Server for mock backend data.

## Project Structure

```
├── data/                # Mock data (JSON Server)
│   └── cities.json
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # Reusable UI components
│   ├── contexts/        # React Context providers
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Route-based pages
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
│   └── styles.css       # Additional global styles
├── package.json         # Project metadata and scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── README.md            # Basic project info
```

## Key Features

- **Interactive Map:** Mark cities using Leaflet ([`Map`](src/components/Map.jsx)).
- **City Management:** Add, view, and delete cities ([`CityList`](src/components/CityList.jsx), [`City`](src/components/City.jsx)).
- **Country Overview:** See countries you've visited ([`CountryList`](src/components/CountryList.jsx)).
- **Authentication:** Simple fake authentication ([`FakeAuthContext`](src/contexts/FakeAuthContext.jsx)).
- **Routing:** Client-side navigation with React Router ([`App`](src/App.jsx)).
- **Mock Backend:** Uses JSON Server for `/cities` API ([`cities.json`](data/cities.json)).

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Running the App

Start the mock backend and the frontend:

```sh
npm run server   # Starts JSON Server at http://localhost:9000
npm run dev      # Starts Vite dev server
```

### Build for Production

```sh
npm run build
```

## Main Components

- [`App`](src/App.jsx): Sets up routing and context providers.
- [`Map`](src/components/Map.jsx): Displays the interactive map.
- [`CityList`](src/components/CityList.jsx): Lists all cities.
- [`CountryList`](src/components/CountryList.jsx): Lists all countries.
- [`Login`](src/pages/Login.jsx): Handles user login.
- [`AppLayout`](src/pages/AppLayout.jsx): Main layout for authenticated users.

## API Endpoints

- `GET /cities` — List all cities
- `GET /cities/:id` — Get city by ID
- `POST /cities` — Add a new city
- `DELETE /cities/:id` — Delete a city

## Custom Hooks

- [`useGeolocation`](src/hooks/useGeolocation.js): Get user's geolocation.
- [`useUrlPosition`](src/hooks/useUrlPosition.js): Parse lat/lng from URL.

## Styling

- Global styles: [`index.css`](src/index.css), [`styles.css`](src/styles.css)
- CSS Modules for component-specific styles.

## License

MIT (add your license details here)
