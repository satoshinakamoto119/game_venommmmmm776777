
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Pause, Square, Settings, Users, Activity, Database, Globe, Zap, Code, Bot, Shield } from "lucide-react";
import { Link } from "react-router-dom";
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
      title: "بدء تشغيل السكربت",
      description: "تم بدء عملية التسجيل التلقائي بنجاح",
    });
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
    toast({
      title: isPaused ? "استئناف التشغيل" : "إيقاف مؤقت",
      description: isPaused ? "تم استئناف العملية" : "تم إيقاف العملية مؤقتاً",
    });
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setProgress(0);
    toast({
      title: "إيقاف السكربت",
      description: "تم إيقاف عملية التسجيل التلقائي",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-card/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">BLS AutoBot Pro</h1>
              <p className="text-xs text-muted-foreground">نظام التسجيل التلقائي المتقدم</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="gap-1.5 border-green-500/30 text-green-400 bg-green-500/10">
              <Shield className="h-3 w-3" />
              محمي
            </Badge>
            <div className="flex gap-1.5">
              <Badge variant="secondary" className="text-xs">Python 3.11+</Badge>
              <Badge variant="secondary" className="text-xs">Playwright</Badge>
              <Badge variant="secondary" className="text-xs">AI</Badge>
            </div>
            <Link to="/api">
              <Button variant="outline" size="sm" className="gap-1.5">
                <Code className="h-3.5 w-3.5" />
                API
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Control Panel */}
        <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Activity className="h-5 w-5 text-primary" />
              مركز التحكم الرئيسي
            </CardTitle>
            <CardDescription>
              تحكم في عملية التسجيل التلقائي ومراقبة الأداء في الوقت الفعلي
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Button
                  onClick={handleStart}
                  disabled={isRunning}
                  size="lg"
                  className="bg-gradient-to-l from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-600/20"
                >
                  <Play className="h-5 w-5 ml-2" />
                  بدء التشغيل
                </Button>
                <Button
                  onClick={handlePause}
                  disabled={!isRunning}
                  size="lg"
                  variant="outline"
                  className="border-border/60"
                >
                  <Pause className="h-5 w-5 ml-2" />
                  {isPaused ? "استئناف" : "إيقاف مؤقت"}
                </Button>
                <Button
                  onClick={handleStop}
                  disabled={!isRunning}
                  size="lg"
                  variant="destructive"
                  className="shadow-lg shadow-red-600/20"
                >
                  <Square className="h-5 w-5 ml-2" />
                  إيقاف نهائي
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                  isRunning 
                    ? isPaused 
                      ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" 
                      : "bg-green-500/10 text-green-400 border border-green-500/20" 
                    : "bg-muted text-muted-foreground border border-border/60"
                }`}>
                  <span className={`h-2.5 w-2.5 rounded-full ${
                    isRunning 
                      ? isPaused ? "bg-yellow-400 animate-pulse" : "bg-green-400 animate-pulse" 
                      : "bg-muted-foreground"
                  }`} />
                  {isRunning ? (isPaused ? "متوقف مؤقتاً" : "يعمل") : "متوقف"}
                </div>
              </div>
            </div>

            {isRunning && (
              <div className="space-y-3 p-4 rounded-lg bg-muted/50 border border-border/40">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-foreground">التقدم الحالي</span>
                  <span className="text-primary">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2.5" />
                <div className="text-xs text-muted-foreground text-center">
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
          <TabsList className="grid w-full grid-cols-6 bg-card/80 backdrop-blur-sm border border-border/60 h-12 p-1">
            <TabsTrigger value="queue" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">قائمة الانتظار</span>
            </TabsTrigger>
            <TabsTrigger value="accounts" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">الحسابات</span>
            </TabsTrigger>
            <TabsTrigger value="proxy" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">البروكسي</span>
            </TabsTrigger>
            <TabsTrigger value="automation" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">الأدوات الذكية</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">الإعدادات</span>
            </TabsTrigger>
            <TabsTrigger value="logs" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all">
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">السجلات</span>
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
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  سجل العمليات المباشر
                </CardTitle>
                <CardDescription>تتبع جميع العمليات والأحداث في الوقت الفعلي</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {[
                    { type: "success", msg: "تم إنشاء حساب جديد بنجاح: ahmed.ali@tempmail.com", time: "14:30:25" },
                    { type: "info", msg: "تم تغيير البروكسي إلى: 192.168.1.5:8080", time: "14:29:18" },
                    { type: "warning", msg: "فشل في حل الكابتشا، إعادة المحاولة...", time: "14:28:45" },
                    { type: "success", msg: "تم تفعيل البريد الإلكتروني تلقائياً", time: "14:27:33" },
                    { type: "info", msg: "بدء عملية تسجيل جديدة للمستخدم: fatima.salem", time: "14:26:12" },
                  ].map((log, i) => (
                    <div key={i} className={`p-3 rounded-lg text-sm border-r-4 transition-colors ${
                      log.type === "success" ? "bg-green-500/5 border-green-500 text-green-300" :
                      log.type === "warning" ? "bg-yellow-500/5 border-yellow-500 text-yellow-300" :
                      "bg-blue-500/5 border-blue-500 text-blue-300"
                    }`}>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{log.msg}</span>
                        <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                          log.type === "success" ? "bg-green-500/10 text-green-400" :
                          log.type === "warning" ? "bg-yellow-500/10 text-yellow-400" :
                          "bg-blue-500/10 text-blue-400"
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
      </main>
    </div>
  );
};

export default Index;
