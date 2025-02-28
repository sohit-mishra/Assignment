import { Routes , Route} from "react-router-dom";
import Home from '../AllRoutes/Home';

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}
