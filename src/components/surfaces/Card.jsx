import { ChevronRight, UserRound } from "lucide-react";

const Card = ({children}) => {
  return(
    <div className="card bg-white flex flex-col border border-gray-400 rounded-md max-w-2xl p-5 gap-10">
      {children}
    </div>
  )
}

const CardHeader = ({title, description}) => {
  return (
   <div>
    <h1 className="text-2xl font-semibold">
      {title}
    </h1>
    <p className="text-sm text-gray-500">
      {description}
    </p>
   </div> 
  )
}

const CardContent = ({children}) => {
  return (
  <div className="cardContent flex flex-col gap-3">
    {children}
  </div>
)}


export {Card, CardHeader, CardContent};
