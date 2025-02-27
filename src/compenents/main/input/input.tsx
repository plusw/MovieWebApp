import "./input.scss";
interface Prop {
  type: string;
  placeholder: string;
  value: string;
}
const Input = ({ type, placeholder, value }: Prop) => {
  return <input type={type} placeholder={placeholder} value={value} />;
};

export default Input;
