import React from 'react'
import ReduxTodo from '../../components/ReduxToDo/ReduxTodo'
import ReduxToDoList from '../../components/ReduxToDoList/ReduxToDoList'
import "./Home.css"

const Home = () => {
  return (
    <>
    <header id="header">
    <div className="container">
      <img src="https://i0.wp.com/sorobindu.com/wp-content/uploads/2022/03/Sorobindu-logo-1.png" alt="logo" className="logo" />
      <div className="flex items-center">
        <a className="text-white min-w-[50px] font-medium" href="#">Home</a>
        <button className="log-btn btn">Login</button>
      </div>
    </div>
  </header>


  <section>
    
    <ReduxTodo/>

   <ReduxToDoList/>

  </section>
    </>
  )
}

export default Home