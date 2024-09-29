// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import React from 'react';
// import ReactDOM from 'react-dom/client'
// import NavBar from './NavBar'
// import MainContent from './MainContent'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     // <>
//     //   <div>
//     //     <a href="https://vitejs.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Muzdalfa</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </>

//       <div>
//         <h2>
//           My name is Muzdalfa
//         </h2>
//       </div>
//       )
// }



import React from "react"
import Image from "./Image.jsx"
import Info from "./Info.jsx"
import About from "./About.jsx"
import Interest from "./Interest.jsx"
import Footer from "./Footer.jsx"


export default function App(){
    return(
        <div className = "container">
            <div className = "card">
                <Image/>
                <Info/>
                <About/>
                <Interest/>
                <Footer/>
            </div> 
        </div>
        
    )
}

