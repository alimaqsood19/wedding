import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const Header = lazy(() => import('./components/header/header.component'));
const RSVP = lazy(() => import('./components/rsvp/rsvp.component'));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Routes>
          <Route path='/' element={<RSVP />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
