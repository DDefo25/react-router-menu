import './App.css';
import Menu from './components/Menu';
import DriftPage from './components/DriftPage'
import HomePage from './components/HomePage'
import TimeAttackPage from './components/TimeAttackPage'
import ForzaPage from './components/ForzaPage'
import {Routes, Route} from 'react-router-dom'


export default function App() {
  return (
      <div>
        <Menu />
        <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
        </div>
      </div>
  );
}
