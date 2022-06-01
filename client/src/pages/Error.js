import React from 'react'
import notFoundImg from '../assets/images/not-found.svg'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'


const Error = () => {
  return (
    <Wrapper className='full-page'>
        <div>
            <img src={notFoundImg} alt="404" />
            <h3>Oops!</h3>
            <p>This page doesn't exist</p>
            <Link to='/'>back home</Link>
        </div>
    </Wrapper>
  )
}

export default Error