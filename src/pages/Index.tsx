
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Pause, Square, Settings, Users, Activity, Database, Globe, Zap } from "lucide-react";
import { StatsCards } from "@/components/StatsCards";
import { RegistrationQueue } from "@/components/RegistrationQueue";
import { SettingsPanel } from "@/components/SettingsPanel";
import { ProxyManager } from "@/components/ProxyManager";
import { AccountsList } from "@/components/AccountsList";
import { AutomationTools } from "@/components/AutomationTools";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
    toast({
      title: "🚀 بدء تشغيل السكربت",
      description: "تم بدء عملية التسجيل التلقائي بنجاح",
    });
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
    toast({
      title: isPaused ? "▶️ استئناف التشغيل" : "⏸️ إيقاف مؤقت",
      description: isPaused ? "تم استئناف العملية" : "تم إيقاف العملية مؤقتاً",
    });
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setProgress(0);
    toast({
      title: "🛑 إيقاف السكربت",
      description: "تم إيقاف عملية التسجيل التلقائي",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🤖 BLS AutoBot Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نظام متقدم للتسجيل التلقائي في مواقع BLS مع ذكاء اصطناعي وحماية من الكشف
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge className="bg-green-100 text-green-800">Python 3.11+</Badge>
            <Badge className="bg-blue-100 text-blue-800">Playwright</Badge>
            <Badge className="bg-purple-100 text-purple-800">AI Powered</Badge>
            <Badge className="bg-orange-100 text-orange-800">Anti-Detection</Badge>
          </div>
        </div>

        {/* Control Panel */}
        <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl ring-1 ring-gray-200/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Activity className="h-6 w-6" />
              مركز التحكم الرئيسي
            </CardTitle>
            <CardDescription className="text-base">
              تحكم في عملية التسجيل التلقائي ومراقبة الأداء في الوقت الفعلي
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Button
                  onClick={handleStart}
                  disabled={isRunning}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg"
                >
                  <Play className="h-5 w-5 mr-2" />
                  بدء التشغيل
                </Button>
                <Button
                  onClick={handlePause}
                  disabled={!isRunning}
                  size="lg"
                  variant="outline"
                  className="shadow-md"
                >
                  <Pause className="h-5 w-5 mr-2" />
                  {isPaused ? "استئناف" : "إيقاف مؤقت"}
                </Button>
                <Button
                  onClick={handleStop}
                  disabled={!isRunning}
                  size="lg"
                  variant="destructive"
                  className="shadow-md"
                >
                  <Square className="h-5 w-5 mr-2" />
                  إيقاف نهائي
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Badge 
                  variant={isRunning ? "default" : "secondary"}
                  className={`text-lg px-4 py-2 ${
                    isRunning 
                      ? isPaused 
                        ? "bg-yellow-100 text-yellow-800" 
                        : "bg-green-100 text-green-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {isRunning ? (isPaused ? "⏸️ متوقف مؤقتاً" : "🟢 يعمل") : "🔴 متوقف"}
                </Badge>
              </div>
            </div>

            {isRunning && (
              <div className="space-y-3">
                <div className="flex justify-between text-sm font-medium">
                  <span>التقدم الحالي</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-3" />
                <div className="text-sm text-gray-600 text-center">
                  جاري معالجة التسجيلات... آخر عملية: منذ 2 دقيقة
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <StatsCards />

        {/* Main Tabs */}
        <Tabs defaultValue="queue" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white/90 backdrop-blur-lg shadow-lg h-12">
            <TabsTrigger value="queue" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Users className="h-4 w-4" />
              قائمة الانتظار
            </TabsTrigger>
            <TabsTrigger value="accounts" className="flex items-center gap-2 data-[state=active]:bg-green-500 data-[state=active]:text-white">
              <Database className="h-4 w-4" />
              الحسابات
            </TabsTrigger>
            <TabsTrigger value="proxy" className="flex items-center gap-2 data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              <Globe className="h-4 w-4" />
              البروكسي
            </TabsTrigger>
            <TabsTrigger value="automation" className="flex items-center gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Zap className="h-4 w-4" />
              الأدوات الذكية
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2 data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
              <Settings className="h-4 w-4" />
              الإعدادات
            </TabsTrigger>
            <TabsTrigger value="logs" className="flex items-center gap-2 data-[state=active]:bg-red-500 data-[state=active]:text-white">
              <Activity className="h-4 w-4" />
              السجلات
            </TabsTrigger>
          </TabsList>

          <TabsContent value="queue">
            <RegistrationQueue isRunning={isRunning} />
          </TabsContent>

          <TabsContent value="accounts">
            <AccountsList />
          </TabsContent>

          <TabsContent value="proxy">
            <ProxyManager />
          </TabsContent>

          <TabsContent value="automation">
            <AutomationTools />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsPanel />
          </TabsContent>

          <TabsContent value="logs">
            <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  سجل العمليات المباشر
                </CardTitle>
                <CardDescription>تتبع جميع العمليات والأحداث في الوقت الفعلي</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {[
                    { type: "success", msg: "تم إنشاء حساب جديد بنجاح: ahmed.ali@tempmail.com", time: "14:30:25" },
                    { type: "info", msg: "تم تغيير البروكسي إلى: 192.168.1.5:8080", time: "14:29:18" },
                    { type: "warning", msg: "فشل في حل الكابتشا، إعادة المحاولة...", time: "14:28:45" },
                    { type: "success", msg: "تم تفعيل البريد الإلكتروني تلقائياً", time: "14:27:33" },
                    { type: "info", msg: "بدء عملية تسجيل جديدة للمستخدم: fatima.salem", time: "14:26:12" },
                  ].map((log, i) => (
                    <div key={i} className={`p-4 rounded-lg text-sm border-l-4 ${
                      log.type === "success" ? "bg-green-50 border-green-500" :
                      log.type === "warning" ? "bg-yellow-50 border-yellow-500" :
                      "bg-blue-50 border-blue-500"
                    }`}>
                      <div className="flex justify-between items-start">
                        <span className="font-medium">{log.msg}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          log.type === "success" ? "bg-green-100 text-green-700" :
                          log.type === "warning" ? "bg-yellow-100 text-yellow-700" :
                          "bg-blue-100 text-blue-700"
                        }`}>
                          {log.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
