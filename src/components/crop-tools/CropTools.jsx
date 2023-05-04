import React from 'react';

const CropTools = ({ scale, imgSrc, setScale, rotate, setRotate, handleToggleAspectClick, aspect }) => {
    return (
        <div className='w-full'>
            <div className='flex justify-center items-center my-2'>
                <div className='mx-3'>
                    <label htmlFor="scale-input" className='text-xl font-semibold'>Scale: </label>
                </div>
                <div>
                    <input
                        className='border py-1 rounded-md border-lime-500 text-center'
                        type="number"
                        id="scale-input"
                        step="0.1"
                        value={scale}
                        disabled={!imgSrc}
                        onChange={(e) => setScale(Number(e.target.value))}
                    />
                </div>
            </div>
            <div className='flex justify-center items-center my-2'>
                <div className='mx-2'>
                    <label htmlFor="rotate-input" className='text-xl font-semibold'>Rotate: </label>
                </div>
                <div>
                    <input
                        className='border py-1 rounded-md border-lime-500 text-center'
                        id="rotate-input"
                        type="number"
                        value={rotate}
                        disabled={!imgSrc}
                        onChange={(e) =>
                            setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
                        }
                    />
                </div>
            </div>
            <div className='flex justify-center items-center my-4'>
                <div className='mx-2'>
                    <label htmlFor="aspect" className='text-xl font-semibold'>Aspect: </label>
                </div>
                <div>
                    <button id='aspect' className={`btn btn-sm px-5 rounded-full border-lime-500 bg-gray-200 ${!aspect ? "text-blue-600 font-semibold" : "text-gray-600"}`} onClick={handleToggleAspectClick}>
                        {aspect ? 'off' : 'on'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CropTools;