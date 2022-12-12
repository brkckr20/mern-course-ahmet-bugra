import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [message, setMessage] = useState({
    adSoyad: "",
    email: "",
    fikirTuru: "",
    aciklama: "",
  });

  const handleChange = (e) => {
    setMessage({
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(message);
  }
  return (
    <div>
      <h1 className='text-center text-3xl font-semibold mb-5'>Fikir Ilet Uygulamasi</h1>
      <div className='mx-auto w-1/4'>
        <form onSubmit={handleFormSubmit}>
          <input value={message.adSoyad} name="adSoyad" onChange={handleChange} className='border border-gray-300 pl-1 rounded w-full mb-1' placeholder='Ad soyad' type="text" />
          <input value={message.email} name="email" className='border border-gray-300 pl-1 rounded w-full mb-1' placeholder='e-mail adresi' type="email" />
          <select onChange={handleChange} value={message.fikirTuru} name="fikirTuru" className='border border-gray-300 pl-1 rounded w-full'>
            <option value="Öneri">Öneri</option>
            <option value="Öneri">Hata Bildirim</option>
            <option value="Öneri">Şikayet</option>
            <option value="Öneri">İstek</option>
          </select>
          <textarea name='aciklama' value={message.aciklama} onChange={handleChange} className='border border-gray-300 pl-1 rounded w-full mt-1 h-28'>

          </textarea>
          <button type='submit' className='bg-green-600 w-full mt-1 text-white rounded hover:bg-green-800 duration-150'>
            Kaydet
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
