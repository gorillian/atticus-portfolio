import imageInfo from "../util/imageInfo";
import { NavLink } from "react-router-dom";

export default function Projects(props) {
  console.log(props);
  return (
    <>
      <div className="project-container">
        {imageInfo.map((image) => (
          <div className="image-grid-wrapper" key={image.id}>
            <NavLink to={`/work/${image.id}`}>
              <img
                src={image.image}
                alt={`${image.name}`}
                style={{ width: "60vw" }}
              />
            </NavLink>
          </div>
        ))}{" "}
      </div>
      <h3>
        {props.projectInfo[parseInt(props.match.params.slug) - 1].description}
      </h3>
    </>
  );
}
