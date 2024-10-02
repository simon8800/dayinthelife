import { Heart, MessageCircle, Share2 } from "lucide-react"
import Button from "../inputs/Button"
import { Card, CardHeader, CardContent } from "../surfaces/Card"

export default function BlogPost() {
  return (
      <main className="flex-1 py-12 px-4 md:px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Great Pancake Experiment</h1>
          <div className="flex items-center mb-6">
            <div className="h-10 w-10">
              <img src="https://placehold.co/50" alt="Alex Chen" />
              <div>AC</div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Alex Chen</p>
              <p className="text-sm text-gray-600">Posted on {new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <div className="max-w-none">
            <p className="text-gray-800 mb-4">
              This morning, I decided to embark on a culinary adventure like no other. My mission? To create pancakes shaped like my favorite animals. Armed with a spatula and a heart full of determination, I set out to transform my kitchen into a whimsical zoo of breakfast delights.
            </p>
            <p className="text-gray-800 mb-4">
              First up was the elephant. I carefully poured the batter, envisioning a majestic trunk and floppy ears. What emerged from my pan looked more like a blob with a strange appendage. "Abstract art," I told myself, flipping it onto my plate.
            </p>
            <p className="text-gray-800 mb-4">
              Next, I attempted a giraffe. Surely, those long legs would be easy to recreate in pancake form. As I watched the batter sizzle, I realized my mistake. My giraffe looked suspiciously like a blobfish. Who knew those deep-sea creatures could invade a landlocked kitchen?
            </p>
            <p className="text-gray-800 mb-4">
              Undeterred, I moved on to my piece de resistance: a pancake penguin. With meticulous care, I crafted a round body and added little flipper-like extensions. As I flipped it over, I held my breath. The result? Well, let's just say it looked more like a misshapen snowman than an Antarctic bird.
            </p>
            <p className="text-gray-800 mb-4">
              As I sat down to my breakfast of misfit pancake creatures, I couldn't help but laugh. They may not have looked like the animals I intended, but they were uniquely mine. And you know what? They tasted just as sweet.
            </p>
            <p className="text-gray-800">
              So here's to kitchen adventures, to trying new things, and to finding joy in the imperfect. After all, life's too short for boring, perfectly round pancakes!
            </p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div className="flex space-x-4">
              <Button className="flex justify-center items-center">
                <Heart className="mr-2 h-4 w-4" />
                Like
              </Button>
              <Button className="flex justify-center items-center">
                <MessageCircle className="mr-2 h-4 w-4" />
                Comment
              </Button>
              <Button className="flex justify-center items-center">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
            <p className="text-sm text-gray-600">5 min read</p>
          </div>
        </article>

        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Stories</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader title="The Day I Became a Human GPS" description="By Jamie Lee"/>
              <CardContent>
                <p className="text-gray-800">When your phone dies and you have to navigate using only your wits and a vague memory of the sun's position...</p>
                <a href="#" className="text-gray-700 hover:text-gray-900">Read more</a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader title="My Plant Whisperer Debut" description="By Sam Taylor"/>
              <CardContent>
                <p className="text-gray-800">Turns out, talking to plants is easy. Understanding their response? That's where it gets tricky...</p>
                <a href="#" className="text-gray-700 hover:text-gray-900">Read more</a>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments</h2>
          <div className="flex flex-col gap-10">

          <Card>
            <CardHeader title="Emily W.">
              <div className="flex items-center">
                <div className="h-8 w-8">
                  <img src="https://placehold.co/50" alt="Emily W." />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800">This is hilarious! I once tried to make Mickey Mouse pancakes for my kids. Let's just say they thought I was serving them alien spaceships for breakfast. 😂</p>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader title="Mark R.">
              <div className="flex items-center">
                <div className="h-8 w-8">
                  <img src="https://placehold.co/50" alt="Mark R." />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800">I'm inspired! Tomorrow's breakfast menu: Picasso-style pancakes. If they look weird, I'll just call them abstract art. 🎨🥞</p>
            </CardContent>
          </Card>
          <Card className="mt-6 bg-gray-100">
            <CardHeader title="Leave a Comment">
            </CardHeader>
            <CardContent>
              <textarea placeholder="Share your thoughts..." className="min-h-[100px]" />
              <Button className="mt-4 bg-gray-900 hover:bg-gray-800 text-white self-start">Post Comment</Button>
            </CardContent>
          </Card>
          </div>
        </section>
      </main>
  )
}