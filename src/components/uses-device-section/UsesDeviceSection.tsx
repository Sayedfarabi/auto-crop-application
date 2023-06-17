import image from "../../assets/images/mobile&pc_imgae.png";

const UsesDeviceSection = () => {
    return (
        <section className="py-8 md:py-12 bg-lime-50">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 mx-auto px-4 md:px-8">
                    <img src={image} alt="" className="mx-auto" />
                </div>
                <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 mb-6 md:mb-0">
                    <h1 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-10">Free photo crop for PC & Mobile</h1>
                    <p className="text-gray-500 mb-6 md:mb-10">
                        AutoCrop photo cropper is powerful. Except for the online photo editor, it has the photo cropper app versions including iOS photo cropper and Android photo cropper as well as programs for Windows and Mac. Those photo cropper software are all free to download. They also support data and membership synchronization, which makes it easy for you to edit images anywhere and anytime.
                    </p>
                    <a href="#cropper">
                        <button className="bg-blue-500 py-3 px-6 rounded-sm capitalize text-white hover:bg-lime-500 font-semibold">Edit a photo</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default UsesDeviceSection;