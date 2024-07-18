// src/components/Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/appointments');
        setAppointments(response.data);
      } catch (error) {
        setError('Failed to fetch appointments');
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Appointments Dashboard</h2>
      {error && <p className="error-message">{error}</p>}
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.name}</td>
              <td>{appointment.email}</td>
              <td>{new Date(appointment.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
