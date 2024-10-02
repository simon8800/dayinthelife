import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Users, Globe, Shuffle, ChevronRight } from "lucide-react"
import {Card, CardContent, CardHeader} from "../surfaces/Card";
import Button from "../inputs/Button";

export default function LandingPage() {

  const handleClick = () => {
    console.log("Wagannn")
  }

  return (
    <>
    <Header />
    <main>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="hero flex flex-col text-center justify-center items-center gap-5">
          <h1 className="mx-auto text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none">Discover Real Lives, One Story at a Time</h1>
          <p className="mx-auto md:text-xl lg:text-2xl text-gray-500">Explore the diverse experiences of people from all walks of life. Personal, authentic, and always surprising.</p>
          <Button onClick={handleClick} className="bg-black text-white text-lg flex items-center gap-2 md:text-xl lg:text-2xl">
            Read a Random Blog 
            <Shuffle />
          </Button>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-5 w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center mb-8">Featured Blog</h2>
        <Card>
          <CardHeader title="A Day in the Life of a Deep Sea Diver" description="Posted on 10/1/2024"/>
          <CardContent>
            <p className="text-md text-gray-500">"The ocean's depths hold more mysteries than we can imagine. Today, I'll take you on a journey to the bottom of the sea..."</p>
            <div className="avatar flex gap-4">
              <img className="avatarImg object-contain rounded-full" src="https://placehold.co/50" alt="SJ"/>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-medium">Sarah Johnson</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Professional Deep Sea Diver</p>
              </div>
            </div>
            <Button className="mt-2 flex gap-1 items-center self-start">Continue Reading <ChevronRight size={16} strokeWidth={2}/></Button>
          </CardContent>
        </Card>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex flex-col px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center mb-8">
              Why "A Day In The Life"?
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Real People, Real Stories</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Connect with individuals from diverse backgrounds and learn about their unique experiences.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Global Perspectives</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Gain insights into different cultures, professions, and lifestyles from around the world.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shuffle className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Serendipitous Discovery</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Each click takes you to a new, unexpected story. Broaden your perspective with every read.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="flex flex-col px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Ready to Explore?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Dive into a world of personal stories. Each click is a new adventure into someone's life.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="flex bg-white items-center gap-5">
                  Start Reading
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
    </main>
    <Footer />
    </>
  )
}