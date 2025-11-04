import { useState, useEffect } from 'react'
import {
    Sidebar,
    Footer,
    RemoveBackground
} from './components/demo'
import './App.css'

function App() {
    const [activeTab, setActiveTab] = useState('remove-bg')
    const [sidebarOpen, setSidebarOpen] = useState(true)

    // Auto-hide sidebar on small screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSidebarOpen(false)
            } else {
                setSidebarOpen(true)
            }
        }

        // Set initial state
        handleResize()

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const renderContent = () => {
        switch (activeTab) {
            case 'remove-bg':
                return <RemoveBackground />
            default:
                return <RemoveBackground />
        }
    }

    return (
        <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            {/* Expand Button - Shows when sidebar is closed */}
            {!sidebarOpen && (
                <button
                    id="sidebar-toggle"
                    onClick={() => setSidebarOpen(true)}
                    className="fixed top-4 left-4 z-30 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-all duration-300"
                    aria-label="Expand sidebar"
                    title="Expand sidebar"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </button>
            )}

            <Sidebar
                activeTab={activeTab}
                onTabChange={setActiveTab}
                isOpen={sidebarOpen}
                onToggle={() => setSidebarOpen(!sidebarOpen)}
            />

            <div className={`relative px-4 transition-all duration-300 ${sidebarOpen ? 'ml-64 py-8' : 'ml-0 pt-20 pb-8'
                }`}>
                <div className="container mx-auto">
                    {renderContent()}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App

