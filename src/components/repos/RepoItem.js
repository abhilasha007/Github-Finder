import React from 'react'
import PropTypes from 'prop-types'

export const RepoItem = ({ repo }) => {
    return (
        <div className='card'> 
            <h3>
                <a href={repo.html_url} target='_blank'>{repo.name}</a>
            </h3>
        </div>
    )
}

RepoItem.protoType = {
    repos: PropTypes.object.isRequired,
}

export default RepoItem;