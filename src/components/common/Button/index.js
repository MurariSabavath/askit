const Button = ({ children, handleClick }) => {
  return (
    <button type="submit" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
