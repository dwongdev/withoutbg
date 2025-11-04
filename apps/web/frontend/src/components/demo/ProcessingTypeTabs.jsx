import React from 'react'

/**
 * ProcessingTypeTabs component for switching between local and API processing modes
 * @param {Object} props
 * @param {'local' | 'api'} props.processingType - Current processing type
 * @param {Function} props.onProcessingTypeChange - Callback when processing type changes
 */
export const ProcessingTypeTabs = ({ processingType, onProcessingTypeChange }) => {
    return (
        <div className="flex gap-1 mb-0">
            <button
                onClick={() => onProcessingTypeChange('local')}
                className={`py-3 px-6 font-semibold transition-all rounded-t-lg border ${processingType === 'local'
                    ? 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 border-b-0 text-purple-600 dark:text-purple-400 relative z-10'
                    : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 border-b text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                style={processingType === 'local' ? { marginBottom: '-1px' } : {}}
            >
                <div className="flex flex-col items-center gap-0.5">
                    <span>Local Processing</span>
                    <span className="text-xs font-normal opacity-75">Free • Privacy-first</span>
                </div>
            </button>
            <button
                onClick={() => onProcessingTypeChange('api')}
                className={`py-3 px-6 font-semibold transition-all rounded-t-lg border ${processingType === 'api'
                    ? 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 border-b-0 text-purple-600 dark:text-purple-400 relative z-10'
                    : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 border-b text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                style={processingType === 'api' ? { marginBottom: '-1px' } : {}}
            >
                <div className="flex flex-col items-center gap-0.5">
                    <span>API Processing</span>
                    <span className="text-xs font-normal opacity-75">Pro quality • API key required</span>
                </div>
            </button>
        </div>
    )
}


