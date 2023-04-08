import logo from './logo.svg';
import './App.css';
import harvardArt from './data/harvardArt';
import { GalleryNavigation } from './components/GalleryNavigation';
import { GalleryView } from './components/GalleryView';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records}></GalleryNavigation>
      <Route path="/galleries/:galleryId">
        <GalleryView></GalleryView>
      </Route>
    </div>
  );
}

export default App;
