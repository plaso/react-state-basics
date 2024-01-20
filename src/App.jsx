import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [search, setSearch] = useState('');

  const onChangeSearch = (event) => {
    console.log(event.target.value)

    setSearch(event.target.value);
  }

  return (
    <div>
      <input type="text" value={search} onChange={onChangeSearch} />

      <Counter />
    </div>
  )
}

export default App
