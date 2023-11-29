import { useState } from 'react';

export default function Settings() {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div className='flex justify-center items-center' 
      onMouseEnter={() => setShowForm(true)}
      onMouseLeave={() => setShowForm(false)}
    >
      <button className='fa-solid fa-gear bg-blue-700 p-2'
        onClick={() => setShowForm(!showForm)}
      ></button>

      <div className='absolute h-8 w-8 top-8'></div>

      <div className={`flex gap-4 absolute top-14 bg-gray-800 p-4 rounded-full${showForm ? '' : ' hidden'}`}>
        <h1>THIS IS A DROP DOWN MENU</h1>
      </div>
    </div>
  )
}
