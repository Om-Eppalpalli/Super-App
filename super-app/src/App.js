import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RegistrationPage from './Containers/Auth/Registration/RegistrationPage';
import CategoryPage from './Containers/Auth/Category/CategoryPage';
import UserPage from './Containers/Auth/Users/UserPage';
import NoteSection from './Containers/Auth/Users/NoteSection';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<RegistrationPage />} />
        <Route path="/select-category" element={<CategoryPage/>} />
        <Route path="/user-page" element={<UserPage/>} />
        <Route path="/note-page" element={<NoteSection/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App