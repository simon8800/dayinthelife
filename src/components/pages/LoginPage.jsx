import { useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../surfaces/Card";
import { Label, Input } from "../inputs/Forms";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-fillSpace bg-gray-50 flex justify-center items-center">
        <Card className="shadow-sm w-full flex justify-center max-w-md sm:max-w-sm md:max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Welcome Back!</CardTitle>
            <CardDescription className="text-center">
              Ready to share your daily adventure?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="/" method="GET">
              <div className="flex flex-col mb-5 gap-2">
                <label
                  className="text-sm font-semibold tracking-tight"
                  htmlFor="username"
                >
                  Username
                </label>
                <Input
                  name="username"
                  className="border-gray-950"
                  id="username"
                  type="text"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  className="text-sm font-semibold tracking-tight"
                  htmlFor="password"
                >
                  Password:{" "}
                </Label>
                <Input
                  className="border-gray-950"
                  name="password"
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-10">
                <Input
                  className="bg-black text-white text-sm font-semibold"
                  type="submit"
                  value="Log In"
                />
              </div>
            </form>
            <p className="text-center text-sm">
              Don't have an account? <Link className="hover:underline hover:underline-offset-1" to="/signup">Sign up</Link>
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}
