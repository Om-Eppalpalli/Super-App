import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RegistrationPage from './Containers/Auth/Registration/RegistrationPage';
import CategoryPage from './Containers/Auth/Category/CategoryPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<RegistrationPage />} />
        <Route path="/select-category" element={<CategoryPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App