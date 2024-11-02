
import './App.css'
import Header from './components/header/Header';

function App() {
  const onHandleClick = (id) => {
    console.log(id);
    
  }

  const isAdmin = true
  return (
    <>
    <Header />
    </>
  )
}

export default App
