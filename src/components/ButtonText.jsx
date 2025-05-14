import PropTypes from 'prop-types';
// Validação das props

const ButtonText = ({ children}) => {
  return (
    <span>
      {children}
    </span>
  );
};

export default ButtonText;

ButtonText.propTypes = {
  children: PropTypes.node.isRequired,  // ou .node dependendo do seu uso
};

