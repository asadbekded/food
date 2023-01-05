import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './page/Home/Home';
import { Settings } from './page/Setting/Setting';
import { Dashbord } from './page/Dashbord/Dashbord';
import { FoodFilter, Sidebar } from './components';

function App() {
  return (
    <>
      <div className='content'>
        <div className='content__sidebar'>
          <Sidebar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashbord />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
