
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, CheckCircle, XCircle, Clock, Globe, Activity } from "lucide-react";

export const StatsCards = () => {
  const stats = [
    {
      title: "إجمالي المحاولات",
      value: "1,247",
      change: "+12%",
      changeType: "positive",
      icon: Users,
      color: "blue"
    },
    {
      title: "نجح التسجيل",
      value: "856",
      change: "+8%",
      changeType: "positive",
      icon: CheckCircle,
      color: "green"
    },
    {
      title: "فشل التسجيل",
      value: "391",
      change: "-5%",
      changeType: "negative",
      icon: XCircle,
      color: "red"
    },
    {
      title: "في الانتظار",
      value: "23",
      change: "0%",
      changeType: "neutral",
      icon: Clock,
      color: "yellow"
    },
    {
      title: "البروكسيات النشطة",
      value: "47",
      change: "+3",
      changeType: "positive",
      icon: Globe,
      color: "purple"
    },
    {
      title: "معدل النجاح",
      value: "68.6%",
      change: "+2.1%",
      changeType: "positive",
      icon: Activity,
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      red: "text-red-600 bg-red-100",
      yellow: "text-yellow-600 bg-yellow-100",
      purple: "text-purple-600 bg-purple-100",
      indigo: "text-indigo-600 bg-indigo-100"
    };
    return colorMap[color as keyof typeof colorMap] || "text-gray-600 bg-gray-100";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white/90 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${getColorClasses(stat.color)}`}>
              <stat.icon className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="flex items-center text-sm">
              <Badge
                variant={stat.changeType === "positive" ? "default" : stat.changeType === "negative" ? "destructive" : "secondary"}
                className="text-xs"
              >
                {stat.change}
              </Badge>
              <span className="text-gray-500 mr-2">عن الشهر الماضي</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
