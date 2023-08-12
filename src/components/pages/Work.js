export default function Work(props) {
  function renderCorrectImage() {
    return props.imageInfo.map((image) => {
      if (parseInt(props.match.params.slug) === image.id) {
        return (
          <div key={image.id}>
            <img
              src={image.image}
              alt={`this is ${image.name}`}
              style={{ height: "85vh" }}
            />
            <div>{image.name}</div>
            <div> {image.description}</div>
          </div>
        );
      } else {
        return null;
      }
    });
  }

  return (
    <div className="work-container">
      <div>Hello from Work {props.match.params.slug}</div>
      <div>{renderCorrectImage()}</div>
      <button onClick={() => props.history.goBack()}>Go Back</button>
    </div>
  );
}
