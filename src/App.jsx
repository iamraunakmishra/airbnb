import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Content from './Components/Content'
import GuestFavorite from './Components/GuestFavorite'
import BookingCard from './Components/Bookingcard'
import VillaDetails from './Components/Bookingcard'
function App() {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <Main/>
      <Content/>
      <GuestFavorite/>   
      <BookingCard/> 
    </div>
  )
}

export default App
