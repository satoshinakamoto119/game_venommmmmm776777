
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Save, RefreshCw, Key, Bot, Mail, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    maxAccountsPerHour: [5],
    delayBetweenActions: [3],
    captchaService: "2captcha",
    autoEmailActivation: true,
    useProxyRotation: true,
    defaultCountry: "DZ",
    retryFailedAttempts: true,
    maxRetries: [3],
    captchaApiKey: "",
    emailService: "mail.tm",
    userAgentRotation: true,
    randomDelay: true,
    telegramNotifications: false,
    telegramBotToken: "",
    telegramChatId: "",
  });

  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "تم حفظ الإعدادات",
      description: "تم حفظ جميع الإعدادات بنجاح",
    });
  };

  const handleReset = () => {
    toast({
      title: "تم إعادة تعيين الإعدادات",
      description: "تم إعادة تعيين الإعدادات إلى القيم الافتراضية",
    });
  };

  return (
    <div className="space-y-6">
      {/* General Settings */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            إعدادات عامة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>عدد الحسابات في الساعة الواحدة</Label>
              <div className="px-3">
                <Slider
                  value={settings.maxAccountsPerHour}
                  onValueChange={(value) =>
                    setSettings({ ...settings, maxAccountsPerHour: value })
                  }
                  max={20}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1</span>
                  <span>الحالي: {settings.maxAccountsPerHour[0]}</span>
                  <span>20</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>التأخير بين العمليات (ثانية)</Label>
              <div className="px-3">
                <Slider
                  value={settings.delayBetweenActions}
                  onValueChange={(value) =>
                    setSettings({ ...settings, delayBetweenActions: value })
                  }
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1</span>
                  <span>الحالي: {settings.delayBetweenActions[0]}s</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="country">الدولة الافتراضية</Label>
              <Select value={settings.defaultCountry} onValueChange={(value) => setSettings({ ...settings, defaultCountry: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الدولة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DZ">الجزائر 🇩🇿</SelectItem>
                  <SelectItem value="MA">المغرب 🇲🇦</SelectItem>
                  <SelectItem value="TN">تونس 🇹🇳</SelectItem>
                  <SelectItem value="EG">مصر 🇪🇬</SelectItem>
                  <SelectItem value="SA">السعودية 🇸🇦</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>عدد المحاولات عند الفشل</Label>
              <div className="px-3">
                <Slider
                  value={settings.maxRetries}
                  onValueChange={(value) =>
                    setSettings({ ...settings, maxRetries: value })
                  }
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1</span>
                  <span>الحالي: {settings.maxRetries[0]}</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>إعادة المحاولة عند الفشل</Label>
                <p className="text-sm text-gray-500">إعادة التجربة تلقائياً بقيانات جديدة</p>
              </div>
              <Switch
                checked={settings.retryFailedAttempts}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, retryFailedAttempts: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>استخدام دوران البروكسي</Label>
                <p className="text-sm text-gray-500">تغيير البروكسي مع كل تسجيل</p>
              </div>
              <Switch
                checked={settings.useProxyRotation}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, useProxyRotation: checked })
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Anti-Detection Settings */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            إعدادات مكافحة الكشف
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>تدوير User-Agent</Label>
                <p className="text-sm text-gray-500">تغيير بصمة المتصفح تلقائياً</p>
              </div>
              <Switch
                checked={settings.userAgentRotation}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, userAgentRotation: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>تأخير عشوائي</Label>
                <p className="text-sm text-gray-500">إضافة تأخير عشوائي بين الحقول</p>
              </div>
              <Switch
                checked={settings.randomDelay}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, randomDelay: checked })
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Captcha & Email Settings */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            إعدادات الكابتشا والبريد
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>خدمة حل الكابتشا</Label>
              <Select value={settings.captchaService} onValueChange={(value) => setSettings({ ...settings, captchaService: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر خدمة الكابتشا" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2captcha">2Captcha</SelectItem>
                  <SelectItem value="capmonster">CapMonster.cloud</SelectItem>
                  <SelectItem value="anticaptcha">AntiCaptcha</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>خدمة البريد المؤقت</Label>
              <Select value={settings.emailService} onValueChange={(value) => setSettings({ ...settings, emailService: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر خدمة البريد" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mail.tm">Mail.tm</SelectItem>
                  <SelectItem value="1secmail">1SecMail</SelectItem>
                  <SelectItem value="guerrillamail">GuerrillaMail</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="captcha-key">مفتاح API الكابتشا</Label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="captcha-key"
                type="password"
                placeholder="أدخل مفتاح API الخاص بخدمة الكابتشا"
                value={settings.captchaApiKey}
                onChange={(e) => setSettings({ ...settings, captchaApiKey: e.target.value })}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>تفعيل البريد تلقائياً</Label>
              <p className="text-sm text-gray-500">البحث عن رابط التفعيل في البريد وفتحه</p>
            </div>
            <Switch
              checked={settings.autoEmailActivation}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, autoEmailActivation: checked })
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Telegram Notifications */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            إشعارات تلغرام
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>تفعيل إشعارات تلغرام</Label>
              <p className="text-sm text-gray-500">إرسال إشعار عند نجاح التسجيل</p>
            </div>
            <Switch
              checked={settings.telegramNotifications}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, telegramNotifications: checked })
              }
            />
          </div>

          {settings.telegramNotifications && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bot-token">رمز البوت</Label>
                <Input
                  id="bot-token"
                  type="password"
                  placeholder="123456789:ABCdefGHIjklMNOpqrSTUvwxyz"
                  value={settings.telegramBotToken}
                  onChange={(e) => setSettings({ ...settings, telegramBotToken: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="chat-id">معرف المحادثة</Label>
                <Input
                  id="chat-id"
                  placeholder="-123456789"
                  value={settings.telegramChatId}
                  onChange={(e) => setSettings({ ...settings, telegramChatId: e.target.value })}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <Button onClick={handleReset} variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          إعادة تعيين
        </Button>
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
          <Save className="h-4 w-4 mr-2" />
          حفظ الإعدادات
        </Button>
      </div>
    </div>
  );
};
