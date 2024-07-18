// src/components/AppointmentScheduler.js

import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AppointmentScheduler.css';

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const appointmentData = {
      name,
      email,
      date: selectedDate,
    };

    try {
      const response = await axios.post('/api/appointments', appointmentData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to schedule appointment');
    }
  };

  return (
    <div className="appointment-container">
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Choose Date and Time</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
            required
          />
        </div>
        <button type="submit">Schedule</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AppointmentScheduler;
