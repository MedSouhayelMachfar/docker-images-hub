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
      <a href={url} target="_blank" ><p>{url}</p></a>
    </article>
  );
};

export default index;
