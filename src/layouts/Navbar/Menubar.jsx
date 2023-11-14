import { NavLink } from "react-router-dom";

const Menubar = () => {
    return (
        <div>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? "btn px-8 bg-gradient-to-t from-violet-500 to-fuchsia-500 text-[18px] font-medium hover:text-whit"
                        : "btn px-8 bg-transparent border-none text-[18px] font-medium hover:text-whit"
                }
            >
                <li>Home</li>
            </NavLink>
            <NavLink
                to='/about'
                className={({ isActive }) =>
                    isActive
                        ? "btn px-8 bg-gradient-to-t from-violet-500 to-fuchsia-500 text-[18px] font-medium hover:text-whit"
                        : "btn px-8 bg-transparent border-none text-[18px] font-medium hover:text-whit"
                }
            >
                <li>About</li>
            </NavLink>
            <NavLink
                to='/apoinment'
                className={({ isActive }) =>
                    isActive
                        ? "btn px-8 bg-gradient-to-t from-violet-500 to-fuchsia-500 text-[18px] font-medium hover:text-whit"
                        : "btn px-8 bg-transparent border-none text-[18px] font-medium hover:text-whit"
                }
            >
                <li>Appointment</li>
            </NavLink>
            <NavLink
                to='/login'
                className={({ isActive }) =>
                    isActive
                        ? "btn px-8 bg-gradient-to-t from-violet-500 to-fuchsia-500 text-[18px] font-medium hover:text-whit"
                        : "btn px-8 bg-transparent border-none text-[18px] font-medium hover:text-whit"
                }
            >
                <li>Login</li>
            </NavLink>


        </div>
    );
};

export default Menubar;