import icon01 from "../../assets/icons/icon01.png";
import icon02 from "../../assets/icons/icon02.jpg";
import icon03 from "../../assets/icons/icon03.png";
import icon04 from "../../assets/icons/icon04.png";
import icon05 from "../../assets/icons/icon05.png";
import icon06 from "../../assets/icons/icon06.jpg";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
    const features = [
        {
            id: "feature01",
            title: "Perfect quality",
            icon: icon01,
            feature: "The best online image resizer to resize your images at the highest quality."
        },
        {
            id: "feature02",
            title: "Lightning Fast",
            icon: icon02,
            feature: "This cloud-hosted, highly scalable tool can resize your images within seconds!"
        },
        {
            id: "feature03",
            title: "Easy To Use",
            icon: icon03,
            feature: "Simply upload your image and enter a target size. It's as easy as that!"
        },
        {
            id: "feature04",
            title: "Works Anywhere",
            icon: icon04,
            feature: "ImageResizer.com is browser-based (no software to install). It works on any platform (Windows, Linux, Mac)."
        },
        {
            id: "feature05",
            title: "Privacy Guaranteed",
            icon: icon05,
            feature: "Your images are uploaded via a secure 256-bit encrypted SSL connection and deleted automatically within 6 hours."
        },
        {
            id: "feature06",
            title: "It's Free",
            icon: icon06,
            feature: "Since 2012 we have resized millions of images for free! There is no software to install, registrations, or watermarks."
        }
    ]
    return (
        <section className='py-8 md:py-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4'>
                {
                    features.map(feature => {
                        return <FeatureCard
                            key={feature?.id}
                            feature={feature}
                        />

                    })
                }
            </div>
        </section>
    );
};

export default FeaturesSection;