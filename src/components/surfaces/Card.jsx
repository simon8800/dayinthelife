import { ChevronRight, UserRound } from "lucide-react";

const Card = ({className, children}) => {
  return(
    <div className={`${className} bg-white flex flex-col border border-gray-400 rounded-md max-w-2xl p-5 gap-10`}>
      {children}
    </div>
  )
}

const CardHeader = ({className, children}) => {
  return (
   <div className={`${className}`}>
    {children}
   </div> 
  )
}

const CardTitle = ({className, children}) => {
  return (
    <h1 className={`${className} text-2xl font-semibold`}>
      {children}
    </h1>
  )
}

const CardDescription = ({className, children}) => {
  return (
    <p className={`${className} text-sm text-gray-500`}>
      {children}
    </p>
  )
}

const CardContent = ({className, children}) => {
  return (
  <div className={`${className} cardContent flex flex-col gap-3`}>
    {children}
  </div>
)}


export {Card, CardHeader, CardDescription, CardContent, CardTitle};
