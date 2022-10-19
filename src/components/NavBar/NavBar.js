import React from 'react'
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

function NavBar({onDeleteCompleted}) {
  return (
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
        <div className="btn-group">
            <NavLink to="/"             className="btn btn-outline-dark bg-light" exact={true}> <FaCheckSquare />    </NavLink>
            <NavLink to="/completed"    className="btn btn-outline-dark bg-light">              <FaListAlt />        </NavLink>
            <NavLink to="/add-task"     className="btn btn-outline-dark bg-light">              <FaPlusSquare />     </NavLink>
        </div>
        <button className="btn btn-outline-dark bg-light" onClick={onDeleteCompleted}><FaTrash /></button>
    </footer>
  );
}

export default NavBar
