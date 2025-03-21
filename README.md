# Election Dashboard 🗳️

A modern, interactive election dashboard built with Next.js and TypeScript that provides real-time election results, voter registration, and electoral mapping features.

## Features

- **Live Results Tracking**: Interactive charts showing real-time election results using Recharts
- **Electoral Map**: Interactive map visualization using React Leaflet
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode Support**: Built-in dark mode with system preference detection

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Maps**: React Leaflet
- **Icons**: Lucide React

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open https://mpelection.netlify.app/  in your browser

## Project Structure

```
├── app/
│   ├── auth/
│   │   └── register/     # User registration and login
│   ├── results/          # Election results and maps
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/              # Reusable UI components
│   └── Map.tsx          # Electoral map component
└── lib/
    └── utils.ts         # Utility functions
```

## Features in Detail

### Election Results
- National overview with vote distribution
- Interactive bar charts showing party-wise results
- District-wise breakdown of election data

### Electoral Map
- Interactive map showing electoral districts
- District-wise result visualization
- Popup information for each district

### User Authentication
- Secure registration system
- Login functionality
- Protected routes for authenticated users

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
