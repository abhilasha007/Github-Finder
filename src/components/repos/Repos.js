import React from 'react'
import RepoItem from './RepoItem'
import PropTypes from 'prop-types'

const Repos = ({ repos }) => {
    return (
        <div>
        {repos.map((repo)=> {
            return ( <RepoItem key={repo.id} repo={repo}/> );
        })}
        </div>
    )
}

Repos.protoType = {
    repos: PropTypes.array.isRequired,
};
export default Repos
