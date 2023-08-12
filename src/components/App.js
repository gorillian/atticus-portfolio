import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../styles/App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Curatorial from "./pages/Curatorial";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import imageInfo from "../util/imageInfo";
import projectInfo from "../util/projectInfo";

import NavBar from "../nav/NavBar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>Hello from Atticus home</div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="/curatorial" component={Curatorial} />
          <Route
            path="/project/:slug"
            render={(routeProps) => (
              <Projects {...routeProps} projectInfo={projectInfo} />
            )}
          />
          <Route
            path="/work/:slug"
            render={(routeProps) => (
              <Work {...routeProps} imageInfo={imageInfo} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
