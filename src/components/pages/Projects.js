import imageInfo from "../util/imageInfo";
import { NavLink } from "react-router-dom";

export default function Projects(props) {
  return (
    <div className="project-container">
      <div className="project-work-wrapper">
        {imageInfo.map((image) => (
          <div className="image-grid-wrapper" key={image.id}>
            <NavLink to={`/work/${image.id}`}>
              <img src={image.image} alt={`${image.name}`} />
            </NavLink>
          </div>
        ))}{" "}
      </div>
      <h3 className="description-wrapper">
        {props.projectInfo[parseInt(props.match.params.slug) - 1].description}
      </h3>
    </div>
  );
}
