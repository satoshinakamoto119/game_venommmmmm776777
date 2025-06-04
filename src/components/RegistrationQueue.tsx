
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Mail, User, MapPin, Trash2, Eye } from "lucide-react";

interface RegistrationQueueProps {
  isRunning: boolean;
}

export const RegistrationQueue = ({ isRunning }: RegistrationQueueProps) => {
  const queueItems = [
    {
      id: 1,
      email: "user1@tempmail.com",
      name: "أحمد محمد علي",
      country: "الجزائر",
      status: "processing",
      progress: 65,
      timeRemaining: "2 دقيقة",
    },
    {
      id: 2,
      email: "user2@tempmail.com", 
      name: "فاطمة سالم",
      country: "المغرب",
      status: "waiting",
      progress: 0,
      timeRemaining: "5 دقائق",
    },
    {
      id: 3,
      email: "user3@tempmail.com",
      name: "محمد الأحمد",
      country: "تونس", 
      status: "waiting",
      progress: 0,
      timeRemaining: "8 دقائق",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "processing":
        return <Badge className="bg-blue-100 text-blue-800">قيد المعالجة</Badge>;
      case "waiting":
        return <Badge variant="secondary">في الانتظار</Badge>;
      default:
        return <Badge variant="outline">غير محدد</Badge>;
    }
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          قائمة انتظار التسجيل
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {queueItems.map((item) => (
            <div
              key={item.id}
              className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-gray-500" />
                  <span className="font-medium">{item.name}</span>
                  {getStatusBadge(item.status)}
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  {item.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  {item.country}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  {item.timeRemaining}
                </div>
              </div>

              {item.status === "processing" && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>تقدم التسجيل</span>
                    <span>{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              )}
            </div>
          ))}

          {queueItems.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>لا توجد عمليات في قائمة الانتظار</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
