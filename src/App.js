import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import axios from 'axios';

function App() {
  const [products,setProducts] = useState([]);
  const [search , setSearch] = useState()

  const getProducts = async () => {
    const  allData = await axios.get(`https://dummyjson.com/products/search?q=${search}`)

    setProducts(allData.data.products)
  }
  const getSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="container mx-auto px-8">
      <div className="py-6 pb-8 flex justify-center items-center">
        <div className="relative flex items-center">
          <span className='absolute ml-5'>
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true"><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle></svg>
          </span>
          <input type="search" value={search} onChange={getSearch} className='border-none pl-9 px-3 py-2 ring-1 ring-gray-200 focus:outline-none focus:ring-gray-400 focus:ring-2 w-64 py-1 mx-3 rounded-full'/>

        </div>
        <button onClick={getProducts} className='bg-orange-400 w-24 h-8 text-white rounded-lg font-semibold hover:bg-orange-500'>
          Search
        </button>
      </div>
      <div className="grid md:grid-cols-4 gap-10 py-4">
        {products.map((item) => {
          return <Body item={item} />
        })}
      </div>
    </div>
  );
}

export default App;
