"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); //this is used to when we click on button page set auto loaded, to avoid that using preventDefault
    if (!name || !email || !password || !contact) {
      setError("All fields are necessary");
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          contact,
          password,
        }),
      });

      //   if (res.ok) {
      // const form = e.target;
      // form.reset();
      if (res.ok) {
        setName("");
        setEmail("");
        setContact("");
        setPassword("");
        setError("");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };
  return (
    <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign Up
        </Typography>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Full Name"
            size="lg"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Contact No"
            size="lg"
            onChange={(e) => setContact(e.target.value)}
          />
          <Input
            label="Email"
            size="lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign up
          </Button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Link className="ml-1 font-bold" href={"/"}>
              Sign In
            </Link>
          </Typography>
        </CardFooter>
      </form>
    </Card>
  );
};

export default RegisterForm;
