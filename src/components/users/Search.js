import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Search = ({searchUsers, showClear, clearUsers, setAlert}) => { 
    const [text, setText] = useState('');

    //funtion called when input of form is changes
    const onChange = (event) => {
        setText(event.target.value);
    } 

    //function called on submission
    const onSubmit = (event) => {
        event.preventDefault();
        if(text==='') {
            setAlert('Please enter some value','light');
        }
        else {
            searchUsers(text);
            setText('');
        }
    } 

      
    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
                <input 
                    type='text' 
                    name='text' 
                    placeholder='Search User..'
                    value = {text}
                    onChange = {onChange}
                />
                <input type='submit' value = 'Search' className='btn btn-dark btn-block'/>
            </form>
            {showClear && 
            (<button className='btn btn-light btn-block' onClick={clearUsers}> 
            Clear 
            </button> )}
        </div>
    )

}

//props allowed and their datatypes
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers : PropTypes.func.isRequired,
    showClear : PropTypes.bool.isRequired,
    setAlert : PropTypes.func.isRequired
}

export default Search
