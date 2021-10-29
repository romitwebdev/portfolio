import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor";

function App() {
    return (
        <Router>
            <>
                <CustomCursor />

                <div className="nav">
                    <NavBar />
                </div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
            </>
        </Router>
    );
}

export default App;
