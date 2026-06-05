
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
      gradient: "from-blue-500 to-blue-600",
      glowClass: "glow-blue"
    },
    {
      title: "نجح التسجيل",
      value: "856",
      change: "+8%",
      changeType: "positive",
      icon: CheckCircle,
      gradient: "from-green-500 to-emerald-600",
      glowClass: "glow-green"
    },
    {
      title: "فشل التسجيل",
      value: "391",
      change: "-5%",
      changeType: "negative",
      icon: XCircle,
      gradient: "from-red-500 to-rose-600",
      glowClass: ""
    },
    {
      title: "في الانتظار",
      value: "23",
      change: "0%",
      changeType: "neutral",
      icon: Clock,
      gradient: "from-yellow-500 to-amber-600",
      glowClass: ""
    },
    {
      title: "البروكسيات النشطة",
      value: "47",
      change: "+3",
      changeType: "positive",
      icon: Globe,
      gradient: "from-purple-500 to-violet-600",
      glowClass: "glow-purple"
    },
    {
      title: "معدل النجاح",
      value: "68.6%",
      change: "+2.1%",
      changeType: "positive",
      icon: Activity,
      gradient: "from-cyan-500 to-blue-600",
      glowClass: "glow-blue"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className={`border-border/60 bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-all duration-300 hover:-translate-y-0.5 ${stat.glowClass}`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient} shadow-lg`}>
              <stat.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Badge
                variant={stat.changeType === "positive" ? "default" : stat.changeType === "negative" ? "destructive" : "secondary"}
                className="text-xs"
              >
                {stat.change}
              </Badge>
              <span className="text-muted-foreground">عن الشهر الماضي</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
