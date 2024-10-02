import Header from "../partials/Header";
import Footer from "../partials/Footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../surfaces/Card";
import { Label, Input } from "@headlessui/react";

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="min-h-fillSpace px-2 py-2">
        <div className="mx-auto flex justify-center items-center max-w-2xl sm:max-w-xl md:max-w-md">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Welcome Back!</CardTitle>
              <CardDescription className="text-center">Ready to share your daily adventure?</CardDescription>
            </CardHeader>
            <CardContent>
              <form action="">
                <div className="flex flex-col">
                  <label htmlFor="username">Username</label>
                  <input
                    className="border rounded-sm border-gray-950"
                    name="username"
                    id="username"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password">Password: </label>
                  <input
                    className="border rounded-sm border-gray-950"
                    name="password"
                    id="password"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="border-8 rounded-sm"
                    type="submit"
                    value="Log In"
                  />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
