import atticus from "../../images/atticus.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div>Hello from About</div>
      <img src={atticus} alt="atticus" style={{ width: "30vw" }} />
    </div>
  );
}
