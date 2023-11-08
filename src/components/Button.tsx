interface Props {
  color: string;
  onclick: () => void;
}

const Button = ({ color, onclick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onclick}>
      Button
    </button>
  );
};

export default Button;
