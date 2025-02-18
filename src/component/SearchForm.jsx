import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import '../Style/Form.css';
const SearchForm = ({onSearch}) => {
    const[query, setQuery] = useState(" ")
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
        setQuery("");
    }
  return (
    <div>
      <Container>
        <h2 className='text-center my-4'>Recpie Finder 🍔</h2>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Search Recpie..."
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                />
                <button type='submit'>
                    <FaSearch/>
                </button>
            </form>
        </div>
      </Container>
    </div>
  )
}

export default SearchForm
