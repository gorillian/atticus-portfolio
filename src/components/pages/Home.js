import projectInfo from "../../util/projectInfo";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      {projectInfo.map((project) => (
        <div className="image-grid-wrapper" key={project.id}>
          <NavLink to={`project/${project.id}`}>
            <img
              src={project.image}
              alt={`${project.name}`}
              style={{ width: "60vw" }}
            />
          </NavLink>
        </div>
      ))}{" "}
    </div>
  );
}
