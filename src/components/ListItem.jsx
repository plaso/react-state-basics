import Button from "./Button";

const ListItem = ({ title, description, image, onDelete, rewarded }) => {
  const awardedClassName = rewarded ? 'bg-warning' : '';
  const cardClassName = `card ${awardedClassName}`;

  return (
    <div className={cardClassName}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{rewarded ? '🚀' : '💩'} {title}</h5>
        <p className="card-text">{description}</p>

        <Button type="danger" onClick={onDelete}>Borrar</Button>
      </div>
    </div>
  )
}

export default ListItem;