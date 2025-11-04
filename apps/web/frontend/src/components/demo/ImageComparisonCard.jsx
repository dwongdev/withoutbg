import React from 'react'
import { PrimaryButton } from '../ui/PrimaryButton'

/**
 * ImageComparisonCard component for displaying original vs processed image
 * @param {Object} props
 * @param {Object} props.result - Result object with original, result, name, status, and error
 * @param {Function} props.onDownload - Callback when download button is clicked
 */
export const ImageComparisonCard = ({ result, onDownload }) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
            {result.status === 'success' ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Original</p>
                            <img
                                src={result.original}
                                alt="Original"
                                className="w-full rounded-lg border-2 border-gray-300 dark:border-gray-600"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Without Background</p>
                            <div className="checkerboard rounded-lg border-2 border-gray-300 dark:border-gray-600">
                                <img
                                    src={result.result}
                                    alt="Result"
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-900 dark:text-gray-300">{result.name}</p>
                        <PrimaryButton
                            onClick={() => onDownload(result.result, result.name)}
                            className="py-2 px-4"
                        >
                            Download
                        </PrimaryButton>
                    </div>
                </>
            ) : (
                <div className="text-red-600 dark:text-red-400">
                    <p className="font-medium">{result.name}</p>
                    <p className="text-sm">Error: {result.error}</p>
                </div>
            )}
        </div>
    )
}








