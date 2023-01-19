const Company = ( {companies, filterComp}) => {
    return(
        <div className="company-container">
                    <h5>Company</h5>
                    <select className="select-category">
                        {companies.map((company, index) => {
                            return(
                                    <option 
                                        key={index} 
                                        value={company}
                                        onClick={()=>filterComp(company)}
                                    >
                                        {company}
                                    </option>
                                
                            );
                        })}
                    </select>
        </div>
    )
}

export default Company;