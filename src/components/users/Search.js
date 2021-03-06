import React, {useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => { 
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    //funtion called when input of form is changes
    const onChange = (event) => {
        setText(event.target.value);
    } 

    //function called on submission
    const onSubmit = (event) => {
        event.preventDefault();
        if(text==='') {
            alertContext.showAlert('Please enter some value','light');
        }
        else {
            githubContext.searchUsers(text);
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
            {githubContext.users.length > 0 && 
            (<button className='btn btn-light btn-block' onClick={githubContext.clearUsers}> 
                Clear 
            </button> )}
        </div>
    )

}

export default Search
