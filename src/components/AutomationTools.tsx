
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Zap, 
  FileText, 
  Upload, 
  Download, 
  Brain, 
  Code, 
  Database, 
  Shuffle,
  UserPlus,
  Mail
} from "lucide-react";

export const AutomationTools = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="generator" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-card/80 backdrop-blur-sm border border-border/60 p-1">
          <TabsTrigger value="generator">مولد البيانات</TabsTrigger>
          <TabsTrigger value="scripts">السكربتات</TabsTrigger>
          <TabsTrigger value="import-export">الاستيراد/التصدير</TabsTrigger>
          <TabsTrigger value="ai-tools">أدوات الذكاء الاصطناعي</TabsTrigger>
        </TabsList>

        <TabsContent value="generator">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-primary" />
                  مولد بيانات المستخدمين
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name-count">عدد الأسماء المطلوبة</Label>
                  <Input id="name-count" type="number" defaultValue="10" className="bg-muted/30 border-border/40" />
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40">
                  <div className="space-y-0.5">
                    <Label>أسماء عربية</Label>
                    <p className="text-sm text-muted-foreground">توليد أسماء عربية أصلية</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40">
                  <div className="space-y-0.5">
                    <Label>تضمين الألقاب</Label>
                    <p className="text-sm text-muted-foreground">إضافة ألقاب مع الأسماء</p>
                  </div>
                  <Switch />
                </div>

                <Button className="w-full">
                  <Shuffle className="h-4 w-4 ml-2" />
                  توليد الأسماء
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  مولد رسائل البريد
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-count">عدد رسائل البريد</Label>
                  <Input id="email-count" type="number" defaultValue="10" className="bg-muted/30 border-border/40" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-domain">النطاق المطلوب</Label>
                  <Input id="email-domain" placeholder="@tempmail.com" className="bg-muted/30 border-border/40" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40">
                  <div className="space-y-0.5">
                    <Label>أرقام عشوائية</Label>
                    <p className="text-sm text-muted-foreground">إضافة أرقام للبريد</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Button className="w-full">
                  <Mail className="h-4 w-4 ml-2" />
                  توليد رسائل البريد
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                البيانات المولدة مؤخراً
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  { type: "name", data: "أحمد محمد العلي", time: "منذ دقيقتين" },
                  { type: "email", data: "fatima.salem.2024@tempmail.com", time: "منذ 5 دقائق" },
                  { type: "name", data: "زينب حسن المحمودي", time: "منذ 8 دقائق" },
                  { type: "email", data: "mohamed.karim.dz@1secmail.org", time: "منذ 12 دقيقة" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40">
                    <div className="flex items-center gap-3">
                      <Badge variant={item.type === "name" ? "default" : "secondary"}>
                        {item.type === "name" ? "اسم" : "بريد"}
                      </Badge>
                      <span className="font-mono text-sm text-foreground">{item.data}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scripts">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  سكربت Python الأساسي
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-700">
                  <div># BLS Auto Registration Script</div>
                  <div>from playwright.sync_api import sync_playwright</div>
                  <div>import random, time</div>
                  <div></div>
                  <div>def register_account():</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;# كود التسجيل هنا</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;pass</div>
                </div>
                <Button className="w-full">
                  <Download className="h-4 w-4 ml-2" />
                  تحميل السكربت الكامل
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  ملف الإعدادات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder="أدخل إعدادات السكربت هنا..."
                  rows={8}
                  className="bg-muted/30 border-border/40 font-mono text-sm"
                  defaultValue={`# إعدادات السكربت
target_country: "algeria"
max_accounts: 100
delay_between_requests: 5
use_proxy: true
captcha_service: "2captcha"
email_service: "tempmail"`}
                />
                <Button className="w-full">
                  <Upload className="h-4 w-4 ml-2" />
                  حفظ الإعدادات
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="import-export">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-primary" />
                  استيراد البيانات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="import-file">ملف البيانات</Label>
                  <Input id="import-file" type="file" accept=".csv,.txt,.json" className="bg-muted/30 border-border/40" />
                </div>
                
                <div className="space-y-2">
                  <Label>نوع البيانات</Label>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">حسابات</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">بروكسيات</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">أسماء</Badge>
                  </div>
                </div>

                <Button className="w-full">
                  <Upload className="h-4 w-4 ml-2" />
                  استيراد البيانات
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  تصدير البيانات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Download className="h-4 w-4 ml-2" />
                  تصدير جميع الحسابات (CSV)
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Download className="h-4 w-4 ml-2" />
                  تصدير البروكسيات (TXT)
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Download className="h-4 w-4 ml-2" />
                  تصدير الأسماء المولدة (JSON)
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Download className="h-4 w-4 ml-2" />
                  تصدير السجلات (LOG)
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai-tools">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  حل الكابتشا بالذكاء الاصطناعي
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40">
                  <div className="space-y-0.5">
                    <Label>تفعيل AI Solver</Label>
                    <p className="text-sm text-muted-foreground">استخدام الذكاء الاصطناعي لحل الكابتشا</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40">
                  <div className="space-y-0.5">
                    <Label>التعرف على النصوص</Label>
                    <p className="text-sm text-muted-foreground">OCR لحل الكابتشا النصية</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-green-400" />
                    <span className="font-medium text-green-400">إحصائيات AI</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>معدل النجاح: <span className="text-green-400 font-medium">94.2%</span></div>
                    <div>الكابتشا المحلولة: <span className="text-foreground font-medium">2,847</span></div>
                    <div>متوسط الوقت: <span className="text-foreground font-medium">3.2 ثانية</span></div>
                    <div>التوفير: <span className="text-green-400 font-medium">$142.35</span></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  أدوات متقدمة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40">
                  <div className="space-y-0.5">
                    <Label>مكافحة الكشف</Label>
                    <p className="text-sm text-muted-foreground">تقنيات متقدمة لتجاوز الحماية</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40">
                  <div className="space-y-0.5">
                    <Label>محاكاة السلوك البشري</Label>
                    <p className="text-sm text-muted-foreground">حركات فأرة وتأخيرات عشوائية</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40">
                  <div className="space-y-0.5">
                    <Label>تبديل البصمة</Label>
                    <p className="text-sm text-muted-foreground">تغيير بصمة المتصفح تلقائياً</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Button className="w-full">
                  <Zap className="h-4 w-4 ml-2" />
                  تطبيق جميع الإعدادات
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
