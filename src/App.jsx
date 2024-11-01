import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { Header } from './components/Header/Header';
import { FlushExample } from './components/Accordion/Accordion';
import { CatalogPage } from './components/Catalog/Catalod';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="cont">
      <Header/>
      <FlushExample/>
      <CatalogPage/>
      </div>
    </>
  )
}

export default App
