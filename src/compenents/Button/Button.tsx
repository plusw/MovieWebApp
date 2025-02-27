import "./Button.css";
interface Props {
  buttonText: string;
  handleClick: () => void;
}
const Button = ({ buttonText, handleClick }: Props) => {
  return (
    <button className="button_small" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;
