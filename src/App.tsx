import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SaaSPlatformPage from './pages/SaaSPlatformPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-shell">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<SaaSPlatformPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
