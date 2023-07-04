import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import AddMoviepage from './AddMoviepage'
import MovieDetailsPage from './MovieDetailsPage'
import Login from './Login'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/movieDetails' element={<MovieDetailsPage/>} />
    <Route path='/addmovie' element={<AddMoviepage/>} />
   </Routes>
  )
}

export default AllRoutes