
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
        return <Badge className="bg-green-500/10 text-green-400 border border-green-500/20">مكتمل</Badge>;
      case "processing":
        return <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/20">جاري المعالجة</Badge>;
      case "failed":
        return <Badge variant="destructive">فشل</Badge>;
      case "pending":
        return <Badge variant="secondary">في الانتظار</Badge>;
      default:
        return <Badge variant="outline">غير محدد</Badge>;
    }
  };

  return (
    <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          قائمة انتظار التسجيل ({queueItems.length} مستخدم)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {queueItems.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-lg border border-border/40 bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">{item.name}</span>
                  {getStatusBadge(item.status)}
                </div>
                <div className="flex items-center gap-1.5">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Play className="h-3.5 w-3.5" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Pause className="h-3.5 w-3.5" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <RefreshCw className="h-3.5 w-3.5" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium text-foreground/70">البريد:</span> {item.email}
                </div>
                <div>
                  <span className="font-medium text-foreground/70">الدولة:</span> {item.country}
                </div>
                <div>
                  <span className="font-medium text-foreground/70">الوقت:</span> {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {queueItems.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Users className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p>لا توجد عناصر في قائمة الانتظار</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
