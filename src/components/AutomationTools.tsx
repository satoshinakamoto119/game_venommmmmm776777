
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
        <TabsList className="grid w-full grid-cols-4 bg-white/90 backdrop-blur-lg">
          <TabsTrigger value="generator">مولد البيانات</TabsTrigger>
          <TabsTrigger value="scripts">السكربتات</TabsTrigger>
          <TabsTrigger value="import-export">الاستيراد/التصدير</TabsTrigger>
          <TabsTrigger value="ai-tools">أدوات الذكاء الاصطناعي</TabsTrigger>
        </TabsList>

        <TabsContent value="generator">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  مولد بيانات المستخدمين
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name-count">عدد الأسماء المطلوبة</Label>
                  <Input id="name-count" type="number" defaultValue="10" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>أسماء عربية</Label>
                    <p className="text-sm text-gray-500">توليد أسماء عربية أصلية</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تضمين الألقاب</Label>
                    <p className="text-sm text-gray-500">إضافة ألقاب مع الأسماء</p>
                  </div>
                  <Switch />
                </div>

                <Button className="w-full">
                  <Shuffle className="h-4 w-4 mr-2" />
                  توليد الأسماء
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  مولد رسائل البريد
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-count">عدد رسائل البريد</Label>
                  <Input id="email-count" type="number" defaultValue="10" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-domain">النطاق المطلوب</Label>
                  <Input id="email-domain" placeholder="@tempmail.com" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>أرقام عشوائية</Label>
                    <p className="text-sm text-gray-500">إضافة أرقام للبريد</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Button className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  توليد رسائل البريد
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                البيانات المولدة مؤخراً
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { type: "name", data: "أحمد محمد العلي", time: "منذ دقيقتين" },
                  { type: "email", data: "fatima.salem.2024@tempmail.com", time: "منذ 5 دقائق" },
                  { type: "name", data: "زينب حسن المحمودي", time: "منذ 8 دقائق" },
                  { type: "email", data: "mohamed.karim.dz@1secmail.org", time: "منذ 12 دقيقة" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant={item.type === "name" ? "default" : "secondary"}>
                        {item.type === "name" ? "اسم" : "بريد"}
                      </Badge>
                      <span className="font-mono">{item.data}</span>
                    </div>
                    <span className="text-sm text-gray-500">{item.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scripts">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  سكربت Python الأساسي
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div># BLS Auto Registration Script</div>
                  <div>from playwright.sync_api import sync_playwright</div>
                  <div>import random, time</div>
                  <div></div>
                  <div>def register_account():</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;# كود التسجيل هنا</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;pass</div>
                </div>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  تحميل السكربت الكامل
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  ملف الإعدادات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder="أدخل إعدادات السكربت هنا..."
                  rows={8}
                  defaultValue={`# إعدادات السكربت
target_country: "algeria"
max_accounts: 100
delay_between_requests: 5
use_proxy: true
captcha_service: "2captcha"
email_service: "tempmail"`}
                />
                <Button className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  حفظ الإعدادات
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="import-export">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  استيراد البيانات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="import-file">ملف البيانات</Label>
                  <Input id="import-file" type="file" accept=".csv,.txt,.json" />
                </div>
                
                <div className="space-y-2">
                  <Label>نوع البيانات</Label>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="cursor-pointer">حسابات</Badge>
                    <Badge variant="outline" className="cursor-pointer">بروكسيات</Badge>
                    <Badge variant="outline" className="cursor-pointer">أسماء</Badge>
                  </div>
                </div>

                <Button className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  استيراد البيانات
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  تصدير البيانات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    تصدير جميع الحسابات (CSV)
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    تصدير البروكسيات (TXT)
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    تصدير السجلات (JSON)
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    تصدير التقرير الكامل (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai-tools">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  محلل الأخطاء الذكي
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="error-log">رسالة الخطأ</Label>
                  <Textarea 
                    id="error-log"
                    placeholder="الصق رسالة الخطأ هنا..."
                    rows={4}
                  />
                </div>
                
                <Button className="w-full">
                  <Brain className="h-4 w-4 mr-2" />
                  تحليل الخطأ بالذكاء الاصطناعي
                </Button>

                <div className="bg-blue-50 p-3 rounded-lg text-sm">
                  <strong>آخر تحليل:</strong> مشكلة في اتصال البروكسي - يُنصح بتغيير الخادم
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  مُحسن الأداء الذكي
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>تحسين التوقيتات</span>
                    <Badge className="bg-green-100 text-green-800">نشط</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>اختيار البروكسي الأمثل</span>
                    <Badge className="bg-blue-100 text-blue-800">تلقائي</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>تجنب ساعات الذروة</span>
                    <Badge variant="secondary">معطل</Badge>
                  </div>
                </div>

                <Button className="w-full">
                  <Zap className="h-4 w-4 mr-2" />
                  تحسين الإعدادات تلقائياً
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
