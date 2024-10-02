import Button from "../inputs/Button";
import { Card, CardContent, CardHeader } from "../surfaces/Card";
import { useParams } from "react-router-dom";

export default function AuthorPage() {
  const { username } = useParams()

  return (
    <main className="flex-1 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="h-32 w-32 mb-4">
            <img src="https://placehold.co/50" alt="Alex Chen" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Alex Chen @{username}</h1>
          <p className="text-xl text-gray-600 mb-4">
            Culinary Adventurer & Aspiring Pancake Artist
          </p>
          <p className="text-gray-700 text-center max-w-2xl mb-6">
            Hi there! I'm Alex, and I believe life is too short for boring
            breakfasts. Join me on my culinary misadventures as I attempt to
            turn my kitchen into a canvas and my pancakes into masterpieces (or
            at least, edible experiments).
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            Follow Alex
          </Button>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Alex's Stories
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader title="The Great Pancake Experiment" description={`Posted on {new Date().toLocaleDateString()}`}/>
            <CardContent>
              <p className="text-gray-700">
                When pancakes meet modern art, and breakfast becomes an
                adventure in abstract expressionism...
              </p>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Read more
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="The Spaghetti Incident" 
            description={`Posted on{" "}
                {new Date(
                  Date.now() - 7 * 24 * 60 * 60 * 1000
                ).toLocaleDateString()}`}/>
            <CardContent>
              <p className="text-gray-700">
                Or, how I learned that al dente doesn't mean 'throw it at the
                wall and see if it sticks'...
              </p>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Read more
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader 
              title="Cupcake Catastrophe" 
              description={` Posted on{" "}
                  {new Date(
                    Date.now() - 14 * 24 * 60 * 60 * 1000
                  ).toLocaleDateString()}`} />
            <CardContent>
              <p className="text-gray-700">
                The day I discovered that 'a pinch of salt' and 'a punch of
                salt' are very different things...
              </p>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Read more
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
