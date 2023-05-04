import React from 'react';

const CroppedImage = ({ previewCanvasRef, completedCrop, onDownloadCropClick, hiddenAnchorRef }) => {
    return (
        <div>
            <div>
                <canvas
                    ref={previewCanvasRef}
                    style={{
                        border: '1px solid black',
                        objectFit: 'contain',
                        width: completedCrop.width,
                        height: completedCrop.height,
                        borderRadius: '5px'
                    }}
                />
            </div>
            <div className='my-2 md:my-4'>
                <div className='text-center'>
                    <button className='btn btn-sm px-5 rounded-full bg-lime-500 capitalize' onClick={onDownloadCropClick}>Download</button>
                </div>
                <a

                    ref={hiddenAnchorRef}
                    download
                    style={{
                        position: 'absolute',
                        top: '-200vh',
                        visibility: 'hidden',
                    }}
                >
                    Hidden download
                </a>
            </div>
        </div>
    );
};

export default CroppedImage;