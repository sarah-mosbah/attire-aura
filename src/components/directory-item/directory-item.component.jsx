import "./directory-item.component.scss";
const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now!!</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
