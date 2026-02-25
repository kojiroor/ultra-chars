import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { TopPage } from './pages/TopPage';
import { CharacterListPage } from './pages/CharacterListPage';
import { CharacterDetailPage } from './pages/CharacterDetailPage';
import './App.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/ultra-chars">
      <Layout>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/characters" element={<CharacterListPage />} />
          <Route path="/characters/:id" element={<CharacterDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
