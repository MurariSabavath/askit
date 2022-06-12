import { StyledInput } from "./styled";

const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  autoComplete,
  onBlur,
  maxLength,
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
      maxLength={maxLength}
    />
  );
};

export default Input;
