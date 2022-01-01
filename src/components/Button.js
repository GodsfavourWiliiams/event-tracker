import PropTypes from 'prop-types'

export const Button = ({color, text ,textColor , onClick, padding, fontSize }) => {

    return (
        <button
        onClick={onClick}
         style={{ 
            backgroundColor: color,
            color: textColor, 
            padding: padding,
            fontSize: fontSize
        }} 
         className="btn fw-bold"
         >
            {text}
        </button>
    )
}
Button.defaultProps ={
    color: 'steelblue'
}

Button.protoTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button;
