import React, { Component, useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import { useLocation, Link, useHistory } from 'react-router-dom';
import './Header.css'

const NavbarPage = () => {
const location = useLocation();
const [search, setSearch] = useState('');
const history = useHistory()

const renderSearch = (search) => {
    history.push(`/search/:${search}`)
    setSearch('')
    // e.preventDefault()   
}


  return (
      <nav class="navbar navbar-expand-lg navbar-dark primary-color">
        {/* <!-- Navbar brand --> */}
        <Link to='/' class="navbar-brand" className="white-text header__brand">
          <img className='header-image' src={require('../images/panther-logo.jpeg')}/>
            Panther Times
        </Link>

        {/* <!-- Collapse button --> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
          aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Collapsible content --> */}
        <div class="collapse navbar-collapse" id="basicExampleNav">

          {/* <!-- Links --> */}
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to='/' className = {location.pathname==='/' ? `header__link` : `header__link`}>News</Link>
            </li>
            <li class="nav-item">
              <Link to='/sports' className = {location.pathname==='/sports' ? `header__link` : `header__link`}>Sports</Link>
            </li>
            <li class="nav-item">
              <Link to='/business' className = {location.pathname==='/business' ? `header__link` : `header__link`}>Business</Link>
            </li>
            <li class='nav-item'>
              <Link to='/lifestyle' className = {location.pathname==='/lifestyle' ? `header__link` : `header__link`}>LifeStyle</Link>
            </li>
            <li class='nav-item'>
              <Link to="/write" className = {location.pathname==='/write' ? `header__link` : `header__link`}>Write For Us</Link>
            </li>
            <li class='nav-item'>
              <Link to="/about" className = {location.pathname==='/about' ? `header__link` : `header__link`}>About Us</Link>
            </li>

          </ul>
          {/* <!-- Links --> */}
          <form class="form-inline ml-auto">
            <div class="md-form my-0">
              <input class="mr-sm-2 form-control" type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} onKeyPress={(e) => e.key==='Enter' && renderSearch(search)}/>
            </div>
            <button class="btn btn-outline-white btn-md my-0 ml-sm-2">Search</button>
          </form>

          {/* <form class="form-inline">
            <div class="search-box">
              <input class="mr-sm-2 search-text form-control" type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} onKeyPress={(e) => e.key==='Enter' && renderSearch()}/>
              <span className="search-btn">
                <i className="fas fa-search" onClick={() => renderSearch()}></i>
              </span>
            </div>
          </form> */}
        </div>
        {/* <!-- Collapsible content --> */}

      </nav>
    
    );
  }


export default NavbarPage;