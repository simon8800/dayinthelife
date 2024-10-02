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
import { Label, Input, FieldSet } from "../inputs/Forms";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    } else if (event.target.name === "confirmPassword") {
      setConfirmPassword(event.target.value);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-fillSpace bg-gray-50 flex justify-center items-center">
        <Card className="shadow-sm w-full flex justify-center max-w-md sm:max-w-sm md:max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Join the Adventure!</CardTitle>
            <CardDescription className="text-center">
              Create your account and start sharing your daily tales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="/" method="GET">
              <FieldSet>
                <Label
                  htmlFor="username"
                >
                  Username
                </Label>
                <Input
                  name="username"
                  id="username"
                  type="text"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleChange}
                />
              </FieldSet>
              <FieldSet>
                <Label
                  htmlFor="password"
                >
                  Password
                </Label>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                />
              </FieldSet>
              <FieldSet>
                <Label
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </Label>
                <Input
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </FieldSet>
              <div className="mt-10">
                <Input
                  className="bg-black text-white text-sm font-semibold"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center text-sm">
              Already have an account? <Link className="hover:underline" to="/login">Log in</Link>
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}
