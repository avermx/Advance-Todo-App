import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"

const SignUpDes = () => {

    return (
        <div className="dark bg-black h-[100vh] flex justify-center items-center  ">
        <Card className="h-[50%] w-[30%] flex justify-center items-center">
            <CardHeader>
                <CardTitle>Check your email</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>
    )
}

export default SignUpDes