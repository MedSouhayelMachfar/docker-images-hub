// Styles
import "./item.css";

// Type
type propType = {
  name: string;
  description: string;
  url: string;
};

const index: React.FC<propType> = (props) => {
  const { url, name, description } = props;

  return (
    <article className="item">
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{url}</p>
    </article>
  );
};

export default index;
