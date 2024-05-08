import React, { useState } from 'react';
import axios from 'axios';

import './App.css'; 

function App() { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/createdata', {
        name,
        email,
      }); 
      setName('');
      setEmail(''); 
       
     
    } catch (error) {
      console.error('Error:', error);
      
    }
  };

  return (
    <div className='kot'>
        
        <form onSubmit={handleSubmit} className='form'>
        <div className='forms'>
        <input
          type="text"
          className='input'
          placeholder='Enter your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> 
        <br />
        <input
          type="text"
          className='input'
          placeholder='Enter your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <div className='btn'>
            <button type="submit" className='button' 
          >Submit</button>
            </div>
            </div>  
        </form>
        
    </div>
  );
}

export default App;
