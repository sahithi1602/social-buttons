const Button = (props) => {
  //  Write your code here.
  const { className } = props;
  return <button className={`button ${className}`}></button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="container">
      <h1 className="heading"> Social Buttons </h1>
      <div className="buttons-container">
        <button className="like-button">Like</button>
        <button className="comment-button">Comment</button>
        <button className="share-button">Share</button>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
