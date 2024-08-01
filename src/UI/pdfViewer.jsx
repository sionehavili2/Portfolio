import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [showViewer, setShowViewer] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const toggleViewer = () => {
        setShowViewer(!showViewer);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonStyle = {
        margin: '1.5em 0 1.5em 0',
        backgroundColor: isHovered ? 'rgba(5, 44, 67, 0.4)' : 'rgba(140, 140, 140, 0.5)',
        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        transition: 'background-color 0.5s ease',
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        color: 'white',
    };

    const viewerStyle = {
        border: '1px solid #ddd',
        padding: '20px',
        margin: '20px 0'
    };

    return (
        <div >
            <button
                onClick={toggleViewer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={buttonStyle}
            >
                {(showViewer ? 'Hide' : 'View') + " Resume"}
            </button>
            {showViewer && (
                <div style={viewerStyle}>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                        <Viewer
                            fileUrl={fileUrl}
                            plugins={[
                                defaultLayoutPluginInstance
                            ]}
                        />
                    </Worker>
                </div>
            )}
        </div>
    );
};

export default PdfViewer;