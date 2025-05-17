import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";
import { supabase } from "../../supabase-client";


const Register = () => {
    
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handlesubmit = (e) => {
        e.preventDefault()

        const { error: signUp } = supabase.auth.signUp({email, password})

        if (signUp) {
            console.log("Sign Up error", error.message)
        }

    }


    return (
        <div className=" h-[100vh] flex justify-center items-center dark text-3xl bg-black">
            <form onSubmit={handlesubmit} className="w-full justify-center flex ">
                <Card className="h-[75%] w-[28%] flex justify-center flex-col ">
                    <CardHeader className="text-center">
                        <CardTitle className="font-bold">Sign Up</CardTitle>
                        <CardDescription className="text-[1rem]">
                            Create an account to get started
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3 text-[1rem] ">
                        <p>Name</p>
                        <Input placeholder='John Wick' />
                        <p>Email</p>
                        <Input onChange={(e) => setemail(e.target.value)
                        } placeholder='Name@example.com' />
                        <p>Password</p>
                        <Input onChange={(e) => setpassword(e.target.value)} type='password' placeholder='---------' />
                      
                    </CardContent>
                    <CardFooter className="text-center flex items-center justify-center flex-col gap-6">
                     
                        <Button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-user-plus mr-2 h-4 w-4"
                                data-lov-id="src/pages/SignUp.tsx:150:12"
                                data-lov-name="UserPlus"
                                data-component-path="src/pages/SignUp.tsx"
                                data-component-line="150"
                                data-component-file="SignUp.tsx"
                                data-component-name="UserPlus"
                                data-component-content="%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <line x1="19" x2="19" y1="8" y2="14"></line>
                                <line x1="22" x2="16" y1="11" y2="11"></line>

                            </svg>
                            Create Account
                        </Button>
                    
                        <CardContent className="text-[1rem] flex gap-1">
                            <span>
                                Already have an account?
                            </span>
                            <span className="underline hover:cursor-pointer" >
                                Sign in
                            </span>
                        </CardContent>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default Register;
