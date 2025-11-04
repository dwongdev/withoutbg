# Demo Components

This directory contains modularized, reusable components for the background removal demo interface.

## Components Overview

### Layout Components

- **`Header`** - Application header with title and description
- **`Footer`** - Application footer with links and credits

### Processing Configuration

- **`ProcessingTypeTabs`** - Tabs for switching between local and API processing modes
- **`ProcessingModeDescription`** - Information about the selected processing mode
- **`SettingsPanel`** - Configuration panel for processing mode, output format, and API key

### File Upload & Display

- **`ImageUploadZone`** - Drag-and-drop file upload area using react-dropzone
- **`ImagePreview`** - Preview of uploaded images before processing
- **`ErrorMessage`** - Error message display component

### Results Display

- **`ProcessingResults`** - Container for displaying processed image results
- **`ImageComparisonCard`** - Individual card showing original vs processed image comparison

## Usage Example

```jsx
import {
    Header,
    Footer,
    ProcessingTypeTabs,
    SettingsPanel,
    ImageUploadZone,
    ImagePreview,
    ProcessingResults
} from './components/demo'

// Use the components in your app
function MyApp() {
    return (
        <div>
            <Header />
            <ProcessingTypeTabs 
                processingType={processingType}
                onProcessingTypeChange={handleChange}
            />
            {/* ... other components */}
            <Footer />
        </div>
    )
}
```

## Benefits of Modularization

1. **Reusability** - Components can be used across different pages or applications
2. **Maintainability** - Easier to update and fix bugs in isolated components
3. **Testability** - Each component can be tested independently
4. **Readability** - Smaller, focused components are easier to understand
5. **Separation of Concerns** - Each component has a single, well-defined responsibility

## Component Props

### ProcessingTypeTabs
- `processingType`: `'local' | 'api'` - Current processing type
- `onProcessingTypeChange`: `(type) => void` - Callback when type changes

### SettingsPanel
- `mode`: `'single' | 'batch'` - Processing mode
- `onModeChange`: `(mode) => void` - Callback when mode changes
- `format`: `string` - Output format (png, jpg, webp)
- `onFormatChange`: `(format) => void` - Callback when format changes
- `processingType`: `'local' | 'api'` - Processing type
- `apiKey`: `string` - API key value
- `onApiKeyChange`: `(key) => void` - Callback when API key changes

### ImageUploadZone
- `getRootProps`: `object` - react-dropzone root props
- `getInputProps`: `object` - react-dropzone input props
- `isDragActive`: `boolean` - Whether drag is active
- `mode`: `'single' | 'batch'` - Processing mode

### ImagePreview
- `files`: `Array<{file, preview, name}>` - Array of file objects
- `mode`: `'single' | 'batch'` - Processing mode
- `onProcess`: `() => void` - Callback when process button is clicked
- `onCancel`: `() => void` - Callback when cancel button is clicked
- `processing`: `boolean` - Whether processing is in progress

### ProcessingResults
- `results`: `Array<{original, result, name, status, error}>` - Array of result objects
- `mode`: `'single' | 'batch'` - Processing mode
- `onDownloadAll`: `() => void` - Callback for download all button
- `onReset`: `() => void` - Callback for process more button
- `onDownloadImage`: `(url, filename) => void` - Callback for downloading images

### ImageComparisonCard
- `result`: `{original, result, name, status, error}` - Result object
- `onDownload`: `(url, filename) => void` - Callback for download button

### ErrorMessage
- `error`: `string | null` - Error message to display

## File Structure

```
demo/
├── Header.jsx                      # Application header
├── Footer.jsx                      # Application footer
├── ProcessingTypeTabs.jsx          # Local/API mode tabs
├── ProcessingModeDescription.jsx   # Mode description text
├── SettingsPanel.jsx               # Settings configuration
├── ImageUploadZone.jsx             # Drag-and-drop upload
├── ErrorMessage.jsx                # Error display
├── ImagePreview.jsx                # Preview before processing
├── ImageComparisonCard.jsx         # Individual result card
├── ProcessingResults.jsx           # Results container
├── index.js                        # Component exports
└── README.md                       # This file
```








