import PropTypes from "prop-types";
import s from './Text.module.css'

export const Text = ({context}) => {
    return <p>{context}</p>
}
Text.propTypes = {
    text: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}