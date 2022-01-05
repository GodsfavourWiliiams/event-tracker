import PropTypes from 'prop-types';
import './style.css';
import Button from './Button';

 const Navbar = ({title, onAdd, showModal}) => {
    //   const [selected, setselected] = useState(null) 
     
    return (
        <nav className="navbar bg-success px-3 d-flex align-items-center justify-content-between">
            <h2 className="text-white">{title}</h2>
           <Button
           color={showModal ? 'red':'green' }
           text={showModal ? 'Close':'Add' }
           textColor='white'
           onClick={onAdd}
           />
        </nav>
    )
}

Navbar.defaultProps = {
    title:'Tracker'
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Navbar