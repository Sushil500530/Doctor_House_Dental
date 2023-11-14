import { Outlet } from "react-router-dom";
import Navbar from "../../layouts/Navbar/Navbar";

const Home = () => {
    return (
        <div>
           <Navbar>
                <Outlet></Outlet>
            </Navbar>
        </div>
    );
};

export default Home;