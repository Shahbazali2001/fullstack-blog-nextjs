import { Button } from "@/components/ui/button";
import Link from "next/link";


function NotFoundPage() {
    return ( 
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <h1 className="text-6xl font-extrabold mb-4">404</h1>
            <h2 className="text-2xl font-bold mb-6">Page Not Found!</h2>
            <p className="text-l text-muted-foreground mb-8 max-w-md">The page you are looking for does not exist.</p>
            
          
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>

        </div>
     );
}

export default NotFoundPage;