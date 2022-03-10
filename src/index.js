import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";

function App() {
    return (
        <div>
            <Navbar/>
            <Corpo/>
            <FundoMobile/>
        </div>
    );
}

const root = document.querySelector(".root");
ReactDOM.render(<App/>, root);