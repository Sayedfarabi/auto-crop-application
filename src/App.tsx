import ImageCropper from './components/image-cropper/ImageCropper';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import FeaturesSection from './components/features-section/FeaturesSection';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import UsesDeviceSection from './components/uses-device-section/UsesDeviceSection';
import FaqSection from './components/faq-section/FaqSection';

function App() {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-900 to-lime-100'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <div id='cropper'>
        <Banner></Banner>
        <ImageCropper></ImageCropper>
      </div>
      <UsesDeviceSection></UsesDeviceSection>
      <FeaturesSection></FeaturesSection>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </>
  );
}

export default App;
