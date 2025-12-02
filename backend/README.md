# Dashboard Backend

## Setup

1. Install dependencies: `npm install`
2. Start the server: `npm start`

## API Endpoints

* `GET /api/dashboard`: Retrieve the dashboard data
* `POST /api/dashboard/widgets`: Add a new widget to the dashboard
* `PUT /api/dashboard/widgets/:widgetId`: Update an existing widget on the dashboard
* `DELETE /api/dashboard/widgets/:widgetId`: Remove a widget from the dashboard
* `GET /api/data/:reportId`: Retrieve the data for a specific report