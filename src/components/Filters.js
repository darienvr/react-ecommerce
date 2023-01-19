import React from 'react'
import { useGlobalContext } from '../context'

const Filters = () => {

    const { 
        filters: {
            text,
        },
        updateFilters,
        categories,
        companies,
        clearFilters,
     } = useGlobalContext()

    return(
        <div className='filters'>
            <form className="form-container" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input  
                        className='input-form'
                        type='text'
                        name='text'
                        value={text}
                        placeholder="Search"
                        onChange={updateFilters}
                    />
                </div>
                <div className="category-container">
                    <h5 className='name-filter'>Category</h5>
                    <div className="btn-category-container">
                    {categories.map((category, index) =>{
                        return(
                                <button 
                                    className="btn-category"
                                    name='category'
                                    key={index}
                                    onClick={updateFilters}
                                >
                                    {category}
                                </button>
                        );  
                    })}
                    </div>
                </div>
                <div className="company-container">
                    <h5 className='name-filter'>Company</h5>
                    <select className="select-company" name='company' onChange={updateFilters}>
                        {companies.map((company, index) => {
                            return(
                                    <option
                                        key={index}
                                        value={company}
                                    >
                                        {company}
                                    </option>
                                
                            );
                        })}
                    </select>
                </div>
            </form>
            <button onClick={clearFilters} className="btn-clear">Clear Filters</button>
        </div>
    )
}

export default Filters;