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