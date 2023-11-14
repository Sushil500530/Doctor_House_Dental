import { Link } from 'react-router-dom';
import imageLogin from '../../assets/image/authentication/Frame.png'
const Resister = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
            <div className="bg-[url('https://i.ibb.co/zF7chZF/Animated-Shape.png')] w-full min-h-[70vh] lg:w-1/2 lg:h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center p-5">
                <img src={imageLogin} alt="" />
            </div>
            <div className="card-body border m-5">
                <form className="p-5 space-y-3">
                    <h1 className="text-3xl font-bold mb-12">Sign up to Doc House</h1>
                    <div className="space-y-3">
                        <label className="text-xl  font-medium">Name</label>
                        <input type="text" name="name" className="input bg-[#F3F3F3] w-full border-blue-500" id="" placeholder="Enter your name....." />
                    </div>
                    <div className="space-y-3">
                        <label className="text-xl  font-medium">Email</label>
                        <input type="email" name="email" className="input bg-[#F3F3F3] w-full border-blue-500" id="" placeholder="Enter your email....." />
                    </div>
                    <div className="space-y-3">
                        <label className="text-xl  font-medium">Password</label>
                        <input type="password" name="password" className="input bg-[#F3F3F3] w-full border-blue-500" id="" placeholder="Enter your password" />
                    </div>
                    <p className="text-base font-medium my-8">Already registered? Go to <Link to='/login' className="text-blue-500 underline">SIGN IN</Link></p>
                    <button className="btn px-8 bg-gradient-to-t from-violet-500 to-fuchsia-500 text-[18px] font-medium hover:text-white w-full">Sign Up</button>
                </form>

            </div>
        </div>
    );
};

export default Resister;