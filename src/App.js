import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
  });
  let naming = 'snehal';
  let mail = 'emsadasd.com';
  let add = 'asdad';
  function handle() {
    setForm({
      ...form,
      name: naming,
      email: mail,
      address: add,
    });
  }
  if(name=='name'){

  
  }
  console.log(form);

  return (
    <div>
      <h1 onClick={handle}>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
