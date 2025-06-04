
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Play, Pause, Trash2, RefreshCw } from "lucide-react";

interface RegistrationQueueProps {
  isRunning: boolean;
}

export const RegistrationQueue = ({ isRunning }: RegistrationQueueProps) => {
  const queueItems = [
    { id: 1, name: "أحمد علي", email: "ahmed.ali@tempmail.com", status: "pending", country: "الجزائر", time: "14:30" },
    { id: 2, name: "فاطمة سالم", email: "fatima.salem@1secmail.org", status: "processing", country: "المغرب", time: "14:25" },
    { id: 3, name: "محمد حسن", email: "mohamed.hassan@guerrillamail.com", status: "completed", country: "تونس", time: "14:20" },
    { id: 4, name: "زينب أحمد", email: "zeinab.ahmed@tempmail.io", status: "failed", country: "مصر", time: "14:15" },
    { id: 5, name: "يوسف الكريم", email: "youssef.karim@temp-mail.org", status: "pending", country: "الأردن", time: "14:10" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">مكتمل</Badge>;
      case "processing":
        return <Badge className="bg-blue-100 text-blue-800">جاري المعالجة</Badge>;
      case "failed":
        return <Badge variant="destructive">فشل</Badge>;
      case "pending":
        return <Badge variant="secondary">في الانتظار</Badge>;
      default:
        return <Badge variant="outline">غير محدد</Badge>;
    }
  };

  return (
    <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          قائمة انتظار التسجيل ({queueItems.length} مستخدم)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {queueItems.map((item) => (
            <div
              key={item.id}
              className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{item.name}</span>
                  {getStatusBadge(item.status)}
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Pause className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                <div>
                  <span className="font-medium">البريد:</span> {item.email}
                </div>
                <div>
                  <span className="font-medium">الدولة:</span> {item.country}
                </div>
                <div>
                  <span className="font-medium">الوقت:</span> {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {queueItems.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>لا توجد عناصر في قائمة الانتظار</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
