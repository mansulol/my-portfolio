import Home from '../pages/home/Home'
import Projects from '../pages/projects/Projects'
import About from '../pages/about/About'

import { Routes, Route } from 'react-router-dom'

export default function RouteConfig() {
    return (

        <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
        </Routes>
    )
}