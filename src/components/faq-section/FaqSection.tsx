import React from 'react';

const FaqSection = () => {
    return (
        <section className='py-8 md:py-12'>
            <div className='text-center mb-6 md:mb-10'>
                <h1 className='text-3xl md:text-5xl font-semibold'>Photo Cropping FAQ</h1>
            </div>
            <div className='mx-4 md:mx-8 px-4 md:px-8'>
                <div tabIndex={0} className="collapse collapse-arrow border-b border-lime-500 bg-base-100 mb-2">
                    <div className="collapse-title text-xl font-medium">
                        What is photo cropping?
                    </div>
                    <div className="collapse-content">
                        <p className='ml-4'>
                            To “crop” an image is to remove or adjust the outside edges of an image (typically a photo) to improve framing or composition, draw a viewer's eye to the image subject, or change the size or aspect ratio. In other words, image cropping is the act of improving a photo or image by removing the unnecessary parts.
                        </p>
                    </div>
                </div>
                <div tabIndex={1} className="collapse collapse-arrow border-b border-lime-500 bg-base-100 mb-2">
                    <div className="collapse-title text-xl font-medium">
                        How can I edit photos online for free?
                    </div>
                    <div className="collapse-content">
                        <p className='ml-4'>
                            With AutoCrop free online photo cropper, you can do just that. First, open AutoCrop free online photo cropper website and to open the file clicking "Add Image" button. Second, choose one cropping feature you need, such as basic zoom, rotate, and aspect toggle from the tools section. Third, cropped image download by clicking the download button.
                        </p>
                    </div>
                </div>
                <div tabIndex={2} className="collapse collapse-arrow border-b border-lime-500 bg-base-100 mb-2">
                    <div className="collapse-title text-xl font-medium">
                        What's the difference between AutoCrop and Photoshop?
                    </div>
                    <div className="collapse-content">
                        <p className='ml-4'>
                            AutoCrop is an online photo cropper like Photoshop including some photo crop functions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;