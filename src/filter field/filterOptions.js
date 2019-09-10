import React from 'react'

class Filter extends React.Component{
    render(){
        return(

            <div>
                <select>
                    <option value='all'>All</option>
                    <option value='Books'>Books</option>
                    <option value='Magazines'>Magazines</option>
                </select>
                <select>
                    <option value='No-Filter'>No Filter</option>
                    <option value='Partial'>Partial</option>
                    <option value='Full'>Full</option>
                    <option value='Free-Ebooks'>Free-Ebooks</option>
                    <option value='Paid-Ebooks'>Paid-Ebooks</option>
                    <option value='Ebooks'>Ebooks</option>
                  </select>
            </div>


        )
        
        
    }

}

export default Filter;