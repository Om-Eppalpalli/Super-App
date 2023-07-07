import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RegistrationPage from './Containers/Auth/Registration/RegistrationPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<RegistrationPage />} />
        <Route path="/register"></Route>
        <Route path="/select-category"></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App