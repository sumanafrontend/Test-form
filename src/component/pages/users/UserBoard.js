import React from 'react'
import './UserBoard.css'
import Signup from './Signup'
const UserBoard = () => {
  return (
    <>
    <div className='mainPage'>
        <div className='leftSide'>
          <div className='topPageNavigation'>
            <span>Step 1 of 3</span>
            <span className='active'><i classame="fa fa-circle" aria-hidden="true"></i></span>
            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
          </div>
            <Signup />
        </div>
        <div className='rightSide'>
            <div className='rightSideInnerArea'>
                <h1>Dummu Heading</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default UserBoard
