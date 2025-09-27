import PropTypes from "prop-types";

export const Btn = ({text, message}) => {
    console.log(message);
    return <button type="btn">{text}</button>
}

Btn.propTypes = {
    text: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}