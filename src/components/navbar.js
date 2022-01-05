import PropTypes from 'prop-types';
import './style.css';
import Button from './Button';
// import { useState } from 'react';

 const Navbar = ({title, onAdd, showModal}) => {
    //   const [selected, setselected] = useState(null) 
     
    return (
        <div className="header mx-auto d-flex align-items-center justify-content-between">
            <h2 className=" py-2">{title}</h2>
           <Button
           color={showModal ? 'red':'green' }
           text={showModal ? 'Close':'Add' }
           textColor='white'
           onClick={onAdd}
           />
        </div>
    )
}

Navbar.defaultProps = {
    title:'Task Tracker'
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Navbar