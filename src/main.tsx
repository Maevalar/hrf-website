import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'
import './index.scss'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/pages/HomePage/HomePage.tsx'
import { AboutPage } from './components/pages/AboutPage/AboutPage.tsx'
import { RecipesPage } from './components/pages/RecipesPage/RecipesPage.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
