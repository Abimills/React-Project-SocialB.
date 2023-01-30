import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { MdDarkMode } from 'react-icons/md'
import { MdLightMode } from 'react-icons/md'
import { AiFillMessage } from 'react-icons/ai'
import { AiFillBell } from 'react-icons/ai'
import { IoMdHelpCircle } from 'react-icons/io'

const Navbar = ({name}) => {
  return (
    <div className='container'>
      <div className="logo-container">
        <img src="https://thumbs.dreamstime.com/b/ab-logo-concept-isolated-white-background-modern-design-style-web-site-mobile-app-ab-logo-concept-isolated-white-169703318.jpg" alt="ab logo"  className='ab-logo'/>
        <h2>SocialB.</h2>

      </div>
      <div className="search-bar-container">
        <div className="search">
          <input type="text"placeholder=' Search...' />
          <button className='search-btn'>
           <BiSearch />
          </button>

        </div>
        <div className="login-container">
          <div className="dark-mode-container">
            <MdDarkMode className='dark-mode'/>
            <MdLightMode className='light-mode'/>


          </div>
          <div className="help-btn-container">
            <AiFillMessage className='icons' />
            <AiFillBell className='icons' />
            <IoMdHelpCircle className='icons' />

          </div>
          <div className="login-logout-container">
           <select name="login" className='drop-down-container'>
            <option value="pic" className='name'> {name}
            </option>
            <option> Log Out</option>

           </select>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar