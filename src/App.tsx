import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCropper from './components/image-cropper/ImageCropper';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ImageCropper></ImageCropper>
    </>
  );
}

export default App;
