import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RegistrationPage from './Containers/Auth/Registration/RegistrationPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<RegistrationPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App