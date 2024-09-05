import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Update this import

export default function Create() {
  let navigate = useNavigate();  // Use useNavigate instead of useHistory
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const sendDataToAPI = () => {
    axios.post('https://66d9afa84ad2f6b8ed55a366.mockapi.io/CRUD', {
      firstName,
      lastName
    }).then(() => {
      navigate('/read');  // Use navigate instead of history.push
    })
  }

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input 
            name="fname" 
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder='First Name' 
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input 
            name="lname" 
            placeholder='Last Name' 
            onChange={(e) => setLastName(e.target.value)} 
          />
        </Form.Field>
        <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
      </Form>
    </div>
  )
}
