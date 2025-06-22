import {cn} from "@/lib/utils"

// Define the props interface
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}



export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-2.5 md:px-20", className)}>
      {children}
    </div>
  )
}