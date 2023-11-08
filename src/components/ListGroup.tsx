import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [pro, setPro] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length == 0 && <p>No items here!</p>}
        {items.map((item, index) => (
          <li
            key={item}
            className={
              pro == index ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setPro(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
