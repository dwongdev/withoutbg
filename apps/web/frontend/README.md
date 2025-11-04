# withoutbg Frontend

React-based web interface for the withoutbg background removal application.

## Features

- 🎨 Modern, responsive UI with Tailwind CSS
- 📤 Drag-and-drop image upload
- 🔄 Single and batch processing modes
- 👀 Before/after image comparison
- ⚡ Real-time processing feedback
- 📥 Easy download of results

## Development

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create a `.env.local` file:

```bash
VITE_API_URL=http://localhost:8000/api
```

## Project Structure

```
frontend/
├── public/          # Static assets
├── src/
│   ├── components/  # React components (if we add more)
│   ├── api.js       # API client
│   ├── App.jsx      # Main application component
│   ├── App.css      # Component styles
│   ├── index.css    # Global styles (Tailwind)
│   └── main.jsx     # Application entry point
├── index.html       # HTML template
├── package.json     # Dependencies
├── vite.config.js   # Vite configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Technology Stack

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **react-dropzone**: Drag-and-drop file upload
- **axios**: HTTP client for API requests

## Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## API Integration

The frontend communicates with the FastAPI backend through these endpoints:

- `GET /api/health` - Health check
- `POST /api/remove-background` - Single image processing
- `POST /api/batch-remove-background` - Batch processing
- `GET /api/usage` - API usage statistics

See `src/api.js` for API client implementation.

## Docker

The frontend is built into a production-ready Docker image with Nginx:

```bash
# Build
docker build -f ../Dockerfile.frontend -t withoutbg-frontend ..

# Run
docker run -p 80:80 withoutbg-frontend
```

## Contributing

1. Make changes to the source code
2. Test locally with `npm run dev`
3. Build with `npm run build` to ensure no errors
4. Submit a pull request

## License

Apache 2.0 - See parent LICENSE file










