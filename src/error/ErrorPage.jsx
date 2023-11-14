import image from '../assets/image/Home/Frame (1).png'
const ErrorPage = () => {
    return (
        <div className='w-full min-h-[70vh] flex flex-col items-center justify-center space-y-3'>
            <h1 className="text-4xl font-bold">Sorry,</h1>
            <p className="text-[18px]">This page is not found.</p>
            <div>
               <img src={image} alt="" />
            </div>
            <button className='btn bg-gradient-to-t from-violet-500 to-fuchsia-500 text-[18px] font-medium hover:text-white'>Go To Home</button>
        </div>
    );
};

export default ErrorPage;