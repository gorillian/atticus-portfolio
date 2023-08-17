export default function Work(props) {
  return (
    <div className="work-container">
      <div>
        {props.imageInfo.map((image) => {
          if (parseInt(props.match.params.slug) === image.id) {
            return (
              <div key={image.id} className="work-info-wrapper">
                <img src={image.image} alt={`this is ${image.name}`} />
                <div className="details-wrapper">
                  <h3>{image.name}</h3>
                  <div> {image.description}</div>
                  <button
                    className="go-back-btn"
                    onClick={() => props.history.goBack()}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
