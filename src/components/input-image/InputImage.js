import React from 'react';

const InputImage = ({ onSelectFile }) => {
    return (
        <div className="py-12 md:py-16">
            <label className="mx-auto flex flex-col justify-center items-center border border-lime-500 text-blue-400 rounded-md w-40 h-40 md:w-56 md:h-56 text-center cursor-pointer text-xl md:text-2xl font-semibold">
                + Add Images
                <br />
                <input
                    type="file"
                    name="images"
                    onChange={onSelectFile}
                    multiple
                    accept="image/png , image/jpeg, image/webp"
                    className="hidden"
                />
            </label>
        </div>
    );
};

export default InputImage;