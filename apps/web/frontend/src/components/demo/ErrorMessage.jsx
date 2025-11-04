import React from 'react'

/**
 * ErrorMessage component for displaying error messages
 * @param {Object} props
 * @param {string} props.error - Error message to display
 */
export const ErrorMessage = ({ error }) => {
    if (!error) return null

    return (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
            <p className="text-red-900 dark:text-red-200">❌ {error}</p>
        </div>
    )
}








