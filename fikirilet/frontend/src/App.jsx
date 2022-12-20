import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  // const [message, setMessage] = useState({
  //   adSoyad: "",
  //   email: "",
  //   fikirTuru: "",
  //   aciklama: "",
  // });

  // const handleChange = (e) => {
  //   setMessage({
  //     [e.target.name]: e.target.value
  //   })
  // }


  const [adSoyad, setAdSoyad] = useState("")
  const [email, setEmail] = useState("")
  const [fikirTuru, setfikirTuru] = useState("")
  const [aciklama, setAciklama] = useState("")

  const values = {
    adSoyad,
    email,
    fikirTuru,
    aciklama
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:3001/fikirkaydet`, values);
    console.log(res);
  }
  return (
    <div>
      <h1 className='text-center text-3xl font-semibold mb-5'>Fikir Ilet Uygulamasi</h1>
      <div className='mx-auto w-1/4'>
        <form onSubmit={handleFormSubmit}>
          <input value={adSoyad} name="adSoyad" onChange={(e) => setAdSoyad(e.target.value)} className='p-2 border border-gray-300 pl-1 rounded w-full mb-1' placeholder='Ad soyad' type="text" />
          <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} className='p-2 border border-gray-300 pl-1 rounded w-full mb-1' placeholder='e-mail adresi' type="email" />
          <select value={fikirTuru} onChange={(e) => setfikirTuru(e.target.value)} name="fikirTuru" className='p-2 border border-gray-300 pl-1 rounded w-full'>
            <option value="">Seçiniz</option>
            <option value="oneri">Öneri</option>
            <option value="hata">Hata Bildirim</option>
            <option value="sikayet">Şikayet</option>
            <option value="istek">İstek</option>
          </select>
          <textarea name='aciklama' onChange={(e) => setAciklama(e.target.value)} value={aciklama} className='border border-gray-300 pl-1 rounded w-full mt-1 h-28'>
          </textarea>
          <button type='submit' className='bg-green-600 w-full mt-1 text-white rounded hover:bg-green-800 duration-150 p-2'>
            Kaydet
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
