import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Gallery, GalleryImage} from 'react-gesture-gallery';

function importAll(r) {
  return r.keys().map(r);
}

function App() {
const [index, setIndex] = React.useState(0);
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

  return (
    <div style={{ background: "black", width: "100vw", height: "100vh" }}>
    <Gallery 
      index = {index}
      onRequestChange={i =>
      setIndex(i)}
      >
        {images.map(image => (
          <GalleryImage objectFit="cover" src={image}/>
        ))}
    </Gallery>
    </div>
  );
}
//import { format } from 'path';

export default App;
