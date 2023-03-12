import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import AppRouter from "./components/appRouter";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

const App = observer(() => {
    return (
        <BrowserRouter>
            <Sidebar/>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;
