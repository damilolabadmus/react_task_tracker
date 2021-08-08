// import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"


// E.g one
//function App() {
  // const name = 'Dami'  
  // const x = true;

  // return (
  //   <div className='container'>
  //     <h1>Hello from React</h1>
  //     <h2>Hello { name }    { x ? 'Yes' : 'No' } </h2>
  //   </div>
  // );


  // E.g two
// function App() {
//   return (
//     <div className='container'>
//       <Header title= 'My name is Damilola' /> 
//     </div>
//   );
// } 

// export default App;


// E.g three --showing class-based component
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

// export default App


// E.g four  --props(this displays the default props)
const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        remainder: false,
    },
])

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={ tasks } />
    </div>   
  ) 
}

export default App
