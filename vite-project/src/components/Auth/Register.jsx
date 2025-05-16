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

const Register = () => {
    return (
        <div className=" h-[100vh] flex justify-center items-center dark text-3xl bg-black">
            <Card className="h-[80%] w-[28%] ">
                <CardHeader className="text-center">
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription className="text-[1rem]">
                        Create an account to get started
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 text-[1rem] ">
                    <p>Name</p>
                    <Input />
                    <p>Email</p>
                    <Input />
                    <p>Password</p>
                    <Input />
                    <p>Confirm Password</p>
                    <Input />
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
        </div>
    );
};

export default Register;
