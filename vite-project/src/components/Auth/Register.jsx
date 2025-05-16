import { Input } from "@/components/ui/input"

const Register = () => {
    return (
        <div className="h-screen  bg-[#09080A] flex justify-center items-center ">
            <div className="bg-[#151515] w-[30%] h-[70%] rounded-xl  p-8 flex flex-col gap-5">
                <div className=" flex flex-col gap-2">
                    <h1 className="text-white  text-3xl text-center">Create an account</h1>
                    <h2 className="text-xl text-gray-400 text-center">Sign up to start managing your tasks</h2>
                </div>
                <div className="w-full flex flex-col gap-2 text-white">
                    <h1>Email</h1>
                    <Input placeholder='name@example.com' />
                </div>
                <div className="">
                    <h1>Password</h1>
                    
                </div>
            </div>
        </div>
    )
}

export default Register