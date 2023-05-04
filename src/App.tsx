import ImageCropper from './components/image-cropper/ImageCropper';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import FeaturesSection from './components/features-section/FeaturesSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <ImageCropper></ImageCropper>
      <FeaturesSection></FeaturesSection>
      <Footer></Footer>
    </>
  );
}

export default App;
