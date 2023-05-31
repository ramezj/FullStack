import React, { useState, useEffect } from 'react';

export default function Home() {
  const [ data, setData ] = useState() 
  useEffect(() => {
    const testBackend = async () => {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
      const response = await resp.json();
      setData(response);
    }
    testBackend();
  }, [])
  return (
    <div className='bg-[url("/6.jpg")] h-full min-h-screen bg-center bg-no-repeat w-full'>
      {JSON.stringify(data)}
    </div>
  )
}
