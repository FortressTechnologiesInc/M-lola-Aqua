import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function ScheduleOrder({ onSchedule }) {
  const [date, setDate] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [delivery, setDelivery] = useState('delivery');

  return (
    <div>
      <h3>Schedule Order</h3>
      <label>Quantity</label>
      <input type="number" min="1" value={quantity} onChange={e => setQuantity(e.target.value)} />
      <label>Pick a date</label>
      <DatePicker selected={date} onChange={d => setDate(d)} minDate={new Date()} />
      <label>Delivery option</label>
      <select value={delivery} onChange={e => setDelivery(e.target.value)}>
        <option value="delivery">Business delivery</option>
        <option value="pickup">Onsite pickup</option>
      </select>
      <button onClick={() => onSchedule({ date, quantity, delivery })}>Schedule</button>
    </div>
  );
}
