import { Link } from "react-router-dom";
import imageLogin from '../../assets/image/authentication/Frame.png'
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const Login = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
            <div className="bg-[url('https://i.ibb.co/zF7chZF/Animated-Shape.png')] w-full min-h-[70vh] lg:w-1/2 lg:h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center p-5">
                <img src={imageLogin} alt="" />
            </div>
            <div className="card-body border m-5">
                <form className="p-5 space-y-3">
                    <h1 className="text-3xl font-bold mb-12">Sign in to Doc House</h1>
                    <div className="space-y-3">
                        <label className="text-xl  font-medium">Username or Email Address</label>
                        <input type="email" name="email" className="input bg-[#F3F3F3] w-full border-blue-500" id="" placeholder="Enter your username or address" />
                    </div>
                    <div className="space-y-3">
                        <label className="text-xl  font-medium">Password</label>
                        <input type="password" name="password" className="input bg-[#F3F3F3] w-full border-blue-500" id="" placeholder="Enter your password" />
                    </div>
                    <p className="text-base font-medium my-8">Please register at first. Go to <Link to='/resister' className="text-blue-500 underline">SIGN UP</Link></p>
                    <button className="btn px-8 bg-gradient-to-t from-violet-500 to-fuchsia-500 text-[18px] font-medium hover:text-white w-full">Sign in</button>
                </form>
                <div className="w-3/5 mx-auto">
                    <div className="divider text-2xl">Or</div>
                    <div className="space-y-3 mt-6">
                    <h1 className="flex items-center justify-center py-2 border rounded-full text-4xl gap-5 hover:bg-[#F2F3F3] cursor-pointer transition hover:text-blue-600"><FcGoogle></FcGoogle> <span className="text-xl font-bold">Sign in Google</span></h1>
                    <h1 className="flex items-center justify-center py-2 border rounded-full text-4xl gap-5 hover:bg-[#F2F3F3] cursor-pointer transition hover:text-blue-600"><FaLinkedinIn /> <span className="text-xl font-bold">Sign in Linkedin</span></h1>
                    <h1 className="flex items-center justify-center py-2 border rounded-full text-4xl gap-5 hover:bg-[#F2F3F3] cursor-pointer transition hover:text-blue-600"><FaGithub /> <span className="text-xl font-bold">Sign in Github</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;