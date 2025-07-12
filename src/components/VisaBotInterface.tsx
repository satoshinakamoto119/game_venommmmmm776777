
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Globe, MapPin, Calendar, CreditCard, MessageCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { WelcomeStep } from "./visa-bot/WelcomeStep";
import { CountrySelection } from "./visa-bot/CountrySelection";
import { VisaCenterSelection } from "./visa-bot/VisaCenterSelection";
import { VisaFormStep } from "./visa-bot/VisaFormStep";
import { AppointmentStep } from "./visa-bot/AppointmentStep";
import { PaymentStep } from "./visa-bot/PaymentStep";
import { ConfirmationStep } from "./visa-bot/ConfirmationStep";

export const VisaBotInterface = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCenter, setSelectedCenter] = useState("");
  const [formData, setFormData] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [language, setLanguage] = useState("ar");

  const steps = [
    { id: 0, name: "مرحباً", icon: MessageCircle },
    { id: 1, name: "الدولة", icon: Globe },
    { id: 2, name: "المركز", icon: MapPin },
    { id: 3, name: "النموذج", icon: MessageCircle },
    { id: 4, name: "الموعد", icon: Calendar },
    { id: 5, name: "الدفع", icon: CreditCard },
    { id: 6, name: "التأكيد", icon: MessageCircle },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeStep onStart={nextStep} language={language} setLanguage={setLanguage} />;
      case 1:
        return <CountrySelection selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} onNext={nextStep} />;
      case 2:
        return <VisaCenterSelection country={selectedCountry} selectedCenter={selectedCenter} setSelectedCenter={setSelectedCenter} onNext={nextStep} />;
      case 3:
        return <VisaFormStep formData={formData} setFormData={setFormData} onNext={nextStep} />;
      case 4:
        return <AppointmentStep selectedDate={selectedDate} setSelectedDate={setSelectedDate} onNext={nextStep} />;
      case 5:
        return <PaymentStep country={selectedCountry} center={selectedCenter} onNext={nextStep} />;
      case 6:
        return <ConfirmationStep country={selectedCountry} center={selectedCenter} date={selectedDate} />;
      default:
        return null;
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🤖 بوت طلب الفيزا
          </h1>
          <p className="text-xl text-gray-600">
            مساعدك الذكي لتقديم طلبات الفيزا عبر TLS، VFS Global، BLS International، وAlmaviva
          </p>
        </div>

        {/* Progress Bar */}
        <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="flex items-center gap-2">
                الخطوة {currentStep + 1} من {steps.length}
              </CardTitle>
              <Badge variant="outline" className="text-sm">
                {Math.round(progress)}% مكتمل
              </Badge>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-4">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <div key={step.id} className={`flex flex-col items-center ${index <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}>
                    <div className={`p-2 rounded-full ${index <= currentStep ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      <StepIcon className="h-4 w-4" />
                    </div>
                    <span className="text-xs mt-1 hidden sm:block">{step.name}</span>
                  </div>
                );
              })}
            </div>
          </CardHeader>
        </Card>

        {/* Main Content */}
        <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-xl min-h-[500px]">
          <CardContent className="p-8">
            {getStepContent()}
          </CardContent>
        </Card>

        {/* Navigation */}
        {currentStep > 0 && currentStep < steps.length - 1 && (
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep} className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              السابق
            </Button>
            <Button onClick={nextStep} className="flex items-center gap-2">
              التالي
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
