import { BrowserRouter, Routes, Route } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { YounitePage } from './pages/YounitePage';
import { ViaPage } from './pages/ViaPage';
import { PeacefullyPage } from './pages/PeacefullyPage';
import { KoinoPage } from './pages/KoinoPage';
import { AboutPage } from './pages/AboutPage';
import { CVPage } from './pages/CVPage';
import { ImprintPage } from './pages/ImprintPage';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/projects/younite" element={<YounitePage />} />
          <Route path="/projects/via" element={<ViaPage />} />
          <Route path="/projects/peacefully" element={<PeacefullyPage />} />
          <Route path="/projects/koino" element={<KoinoPage />} />
          <Route path="/imprint" element={<ImprintPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}