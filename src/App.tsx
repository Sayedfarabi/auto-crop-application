import ImageCropper from './components/image-cropper/ImageCropper';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import FeaturesSection from './components/features-section/FeaturesSection';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <ImageCropper></ImageCropper>
      <FeaturesSection></FeaturesSection>
    </>
  );
}

export default App;
