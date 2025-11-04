import React from 'react'
import { PrimaryButton } from '../ui/PrimaryButton'
import { SecondaryButton } from '../ui/SecondaryButton'

/**
 * ImagePreview component for displaying uploaded images before processing
 * @param {Object} props
 * @param {Array} props.files - Array of file objects with preview URLs
 * @param {'single' | 'batch'} props.mode - Processing mode
 * @param {Function} props.onProcess - Callback when process button is clicked
 * @param {Function} props.onCancel - Callback when cancel button is clicked
 * @param {boolean} props.processing - Whether processing is in progress
 */
export const ImagePreview = ({ files, mode, onProcess, onCancel, processing }) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {mode === 'single' ? 'Image Preview' : `Selected Images (${files.length})`}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                {files.map((file, index) => (
                    <div key={index} className="relative group">
                        <img
                            src={file.preview}
                            alt={file.name}
                            className="w-full h-32 object-cover rounded-lg border border-gray-200 dark:border-gray-600"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <p className="text-white text-xs text-center px-2">{file.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-4">
                <PrimaryButton
                    onClick={onProcess}
                    disabled={processing}
                    className="flex-1 py-3 px-6"
                >
                    {processing ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </span>
                    ) : (
                        '✨ Remove Background'
                    )}
                </PrimaryButton>
                <SecondaryButton
                    onClick={onCancel}
                    disabled={processing}
                    className="py-3 px-6"
                >
                    Cancel
                </SecondaryButton>
            </div>
        </div>
    )
}








