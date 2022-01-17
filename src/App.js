import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'

import HomePage from './home/pages/home.page'
import NavBar from './shared/navBar.component'
import Todo from './Todos/pages/todo.page'

const App = () => { 
  return <BrowserRouter>
  <NavBar/>
    <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/test" element={<Todo/>}></Route>
  </Routes>
</BrowserRouter>
}

export default App;
