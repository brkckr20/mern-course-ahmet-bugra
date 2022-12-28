import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async e => {
        e.preventDefault();
        const { data } = await axios.post("http://localhost:3001/giris", { username, password })
        console.log(data);
    }
    return (
        <div className='mx-10'>
            <h1 className='text-center text-3xl mt-5'>Admin Panel</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="kullaniciAdi" className='block'>Kullanıcı Adı : </label>
                    <input value={username} onChange={e => setUserName(e.target.value)} id='kullaniciAdi' type="text" className='w-full border pl-1 outline-none rounded' />
                </div>
                <div>
                    <label htmlFor="sifre" className='block'>Şifre : </label>
                    <input value={password} onChange={e => setPassword(e.target.value)} id='sifre' type="text" className='w-full border pl-1 outline-none rounded' />
                </div>
                <div>
                    <button type='submit' className='bg-green-600 hover:bg-green-700 duration-150 w-full p-1 mt-2 rounded font-bold text-white'>GÖNDER</button>
                </div>
            </form>
        </div>
    )
}

export default Admin;