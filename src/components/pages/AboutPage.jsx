import Button from "../inputs/Button"
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import {Link} from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About A Day In The Life
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to "A Day In The Life" – where everyday stories become
              extraordinary adventures!
            </p>
            <p className="text-gray-700 mb-4">
              We believe that every day is filled with moments worth sharing,
              from the hilariously mundane to the unexpectedly profound. Our
              platform is a celebration of the human experience, told through
              the lens of ordinary people living extraordinary lives.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you're burning toast at breakfast, accidentally becoming
              the office hero, or discovering hidden talents in the most
              unlikely places, your story matters. We're here to amplify the
              voices of the everyday adventurers, the accidental comedians, and
              the quiet observers who make life colorful.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-4">
              To create a space where people can share, connect, and find joy in
              the beautiful chaos of daily life. We aim to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Celebrate the extraordinary in the ordinary</li>
              <li>
                Foster empathy and understanding through shared experiences
              </li>
              <li>Encourage creativity and self-expression</li>
              <li>Spread laughter, inspiration, and a sense of community</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-700 mb-6">
              Ready to share your story or dive into the lives of others? Join
              our growing community of storytellers and adventure-seekers!
            </p>
            <div className="flex space-x-4">
              <Button className="bg-black text-white"> 
                <Link href="/register">Start Your Journey</Link>
              </Button>
              <Button>
                <Link href="/">Explore Stories</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
