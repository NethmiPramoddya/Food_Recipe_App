import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import MainNAvigation from './components/MainNAvigation'
import axios from 'axios'

const getAllRecipes = async()=>{
  let allRecipes = []
  await axios.get("http://localhost:5000/recipe")
  .then(res=>{allRecipes=res.data})
  return allRecipes
}

const router = createBrowserRouter([
  {path:"/", element:<MainNAvigation/>, children:[
    {path:"/" ,element:<Home/>,loader:getAllRecipes}
  ]}
  
])

function App() {
  return (
    <>
    <RouterProvider router ={router}></RouterProvider> 
    </>
  )
}

export default App