import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../ui/Pages/Home'
import About from '../ui/Pages/About'
import Contact from '../ui/Pages/Contact'
import DatatoTable from '../ui/Pages/DatatoTable'
import Header from '../ui/Components/Header/Header'

export default function ApiRouter() {
    return (
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/product' element={<DatatoTable/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}