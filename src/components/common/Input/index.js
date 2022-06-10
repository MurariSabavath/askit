import { StyledInput } from "./styled";

const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  autoComplete,
  onBlur,
}) => {
  return (
    <StyledInput
      style={{ width: "100%" }}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      onBlur={onBlur}
    />
  );
};

export default Input;
