import React from 'react'
import { PrimaryButton } from '../ui/PrimaryButton'
import { SecondaryButton } from '../ui/SecondaryButton'
import { ImageComparisonCard } from './ImageComparisonCard'

/**
 * ProcessingResults component for displaying processed images
 * @param {Object} props
 * @param {Array} props.results - Array of result objects
 * @param {'single' | 'batch'} props.mode - Processing mode
 * @param {Function} props.onDownloadAll - Callback when download all button is clicked
 * @param {Function} props.onReset - Callback when process more button is clicked
 * @param {Function} props.onDownloadImage - Callback for downloading individual images
 */
export const ProcessingResults = ({ results, mode, onDownloadAll, onReset, onDownloadImage }) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Results
                </h2>
                <div className="flex gap-4">
                    {mode === 'batch' && (
                        <PrimaryButton
                            onClick={onDownloadAll}
                            className="py-2 px-6 bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
                        >
                            ⬇️ Download All
                        </PrimaryButton>
                    )}
                    <SecondaryButton
                        onClick={onReset}
                        className="py-2 px-6"
                    >
                        Process More
                    </SecondaryButton>
                </div>
            </div>

            <div className="space-y-6">
                {results.map((result, index) => (
                    <ImageComparisonCard
                        key={index}
                        result={result}
                        onDownload={onDownloadImage}
                    />
                ))}
            </div>
        </div>
    )
}








