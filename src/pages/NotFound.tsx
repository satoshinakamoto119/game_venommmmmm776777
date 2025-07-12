
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <Card className="max-w-md w-full bg-white/90 backdrop-blur-lg border-0 shadow-2xl">
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <CardTitle className="text-2xl font-bold text-gray-800">Page Not Found</CardTitle>
          <CardDescription className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-lg font-bold text-gray-700 mb-2">404</p>
            <p className="text-gray-600 mb-6">
              Don't worry! You can go back to the main application or start using our visa bot.
            </p>
          </div>
          
          <div className="space-y-3">
            <Link to="/" className="block">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Home className="h-4 w-4 mr-2" />
                Go to Main App
              </Button>
            </Link>
            
            <Link to="/visa-bot" className="block">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Try Visa Bot
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
