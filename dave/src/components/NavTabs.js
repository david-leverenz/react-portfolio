import React from 'react';

function NavTabs({ currentPage, }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        {/* <a
          href="#home"
          onClick={() => handlePageChange('Home')} */}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for, ternary if then

          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        {/* > */}
          {/* Home
        </a> */}
      </li>
      <li className="nav-item">
        {/* <a
          href="#about"
          onClick={() => handlePageChange('About')} */}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        {/* >
          About
        </a> */}
      </li>
      <li className="nav-item">
        {/* <a
          href="#blog"
          onClick={() => handlePageChange('Blog')} */}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        {/* >
          Blog
        </a> */}
      </li>
      <li className="nav-item">
        {/* <a
          href="#contact" */}
          {/* //  TODO: Add a comment explaining what this logic is doing

        //   onClick={() => handlePageChange('Contact')} */}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        {/* >
          Contact
        </a> */}
      </li>
    </ul>
  );
}

export default NavTabs;
