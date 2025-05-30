import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppointmentBooking from './components/AppointmentBooking';
import Confirmation from './components/Confirmation';
import TherapistProfile from './components/TherapistProfile';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<TherapistProfile />} />
          <Route path="/book" element={<AppointmentBooking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;