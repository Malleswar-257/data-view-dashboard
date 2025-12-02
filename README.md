# data-view-dashboard

A comprehensive dashboard for displaying KPIs, visual reports, and interactive charts.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js/Express + Prisma
- **Design**: Figma ([View Design](https://www.figma.com/design/fzvMscSRhEdiO9Cqj77mcv/30--Chart-UI-Components-%7C-BRIX-Templates--Community-?node-id=15-4&t=r0tdqiHATOC6zXDN-1))

## Project Structure

```
data-view-dashboard/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- KPI dashboard
- Report dashboard
- Interactive charts and graphs
- Filter and sort reports
- Notifications
- User management
- Report management

## API Endpoints

- `POST /api/auth/login` - Login endpoint for users to authenticate
- `GET /api/reports` - Retrieve a list of available reports
- `GET /api/reports/{reportId}` - Retrieve a specific report by ID
- `POST /api/reports` - Create a new report
- `PUT /api/reports/{reportId}` - Update a report
- `DELETE /api/reports/{reportId}` - Delete a report
- `GET /api/kpis` - Retrieve a list of available KPIs
- `GET /api/kpis/{kpiId}` - Retrieve a specific KPI by ID

## License

MIT
