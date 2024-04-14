import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

const Login = () => {
  return (
    <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Sign In
        </Button>
        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
          test
        </div>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Link className="ml-1 font-bold" href={"/register"}>
            Register
          </Link>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default Login;
