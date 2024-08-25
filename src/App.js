import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GalleryPage from './pages/GalleryPage';
import UploadPage from './pages/UploadPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
