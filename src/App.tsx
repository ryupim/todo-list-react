import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoAppBar from './components/TodoAppBar';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoAppBar />
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;