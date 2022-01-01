import PropTypes from 'prop-types';
import './style.css';
import Button from './Button';
import { useState } from 'react';

 const Navbar = ({title}) => {
    //   const [selected, setselected] = useState(null)
    const onClick = () =>{
      if (true) {
         console.log('clicked')

     
      }

    }
     
    return (
        <div className="header mx-auto d-flex align-items-center justify-content-between">
            <h2 className=" py-2">{title}</h2>
           <Button
           color='green'
           text='Add'
           textColor='white'
           onClick={onClick}
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