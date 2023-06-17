import image from "../../assets/images/cropping_image_01.png";

const Header = () => {
    return (
        <section className="py-8 md:py-12">
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl mb-4 md:mb-8 text-white font-semibold">Online photo crop for everyone</h1>
                <p className="mb-6 md:mb-12 text-gray-200">AutoCrop photo cropper lets you crop photos in just a few clicks. <br /> It covers various free online photo editing tools, so you can crop images, resize images easily.</p>
                <img src={image} alt="" className="mx-auto px-4 md:px-8" />
            </div>
        </section>
    );
};

export default Header;