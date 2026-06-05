
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="max-w-md w-full border-border/60 bg-card/80 backdrop-blur-sm shadow-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
            <Bot className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">الصفحة غير موجودة</CardTitle>
          <CardDescription>
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-5xl font-bold text-primary mb-2">404</p>
            <p className="text-muted-foreground mb-6">
              لا تقلق! يمكنك العودة إلى التطبيق الرئيسي.
            </p>
          </div>
          
          <div className="space-y-3">
            <Link to="/" className="block">
              <Button className="w-full bg-gradient-to-l from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                <Home className="h-4 w-4 ml-2" />
                الصفحة الرئيسية
              </Button>
            </Link>
            
            <Link to="/api" className="block">
              <Button variant="outline" className="w-full border-border/60">
                <ArrowLeft className="h-4 w-4 ml-2" />
                واجهة برمجة التطبيقات
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
