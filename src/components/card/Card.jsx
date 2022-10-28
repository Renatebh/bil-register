const Card = (props) => {
  return (
    <div className="card">
      <ul>
        <li>{props.id}</li>
        <li>{props.make}</li>
        <li>{props.model}</li>
        <li>{props.year}</li>
        <li>
          {props.firstName} {props.lastName}
        </li>
        <li>{props.age}</li>
      </ul>
    </div>
  );
};

export default Card;
