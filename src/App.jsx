import './App.css';
import DeliveryStatus from './components/DeliveryStatus';

import ThemeSwitcher from './components/ThemeSwitcher';
import ToDoList from './components/ToDoList';

function App() {

  return (
    <>
      <ToDoList />
      <ThemeSwitcher />
      <DeliveryStatus />
    </>
  )
}

export default App
