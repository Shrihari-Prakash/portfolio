import { Routes, Route } from "react-router-dom";
import "./App.css";
import TitleBar from "./Components/common/TitleBar";
import SideBar from "./Components/common/SideBar";
import Browser from "./Components/common/Browser";
import Tabs from "./Components/common/Tabs";
import { Page } from "./Components/common/Page";
import StatusBar from "./Components/common/StatusBar";
import Home from "./pages/Home";
import { routes } from "./routes";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className="AppWrapper">
        <SideBar />
        <Browser />
        <div className="PageWrapper">
          <Tabs />
          <Page>
            <Routes>
              <Route exact path={routes.HOME} element={<Home />}></Route>
            </Routes>
            <Routes>
              <Route exact path={routes.ABOUT} element={<About />}></Route>
            </Routes>
            <Routes>
              <Route exact path={routes.CONTACT} element={<Contact />}></Route>
            </Routes>
            <Routes>
              <Route exact path={routes.PROJECTS} element={<Project />}></Route>
            </Routes>
          </Page>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
