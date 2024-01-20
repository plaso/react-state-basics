import { useState } from 'react'
import Counter from './components/Counter'
import List from './components/List';
import './App.css'

function App() {
  const [search, setSearch] = useState('');

  const onChangeSearch = (event) => {
    console.log(event.target.value)

    setSearch(event.target.value);
  }

  return (
    <div className="container mt-4">
      <input type="text" value={search} onChange={onChangeSearch} />

      <Counter />

      <List />
    </div>
  )
}

export default App
