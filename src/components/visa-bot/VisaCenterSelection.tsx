
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, ArrowLeftRight } from "lucide-react";

interface VisaCenterSelectionProps {
  country: string;
  selectedCenter: string;
  setSelectedCenter: (center: string) => void;
  onNext: () => void;
}

export const VisaCenterSelection = ({ country, selectedCenter, setSelectedCenter, onNext }: VisaCenterSelectionProps) => {
  const getVisaCenters = (country: string) => {
    switch (country) {
      case "Tunisia":
        return [
          {
            name: "TLScontact",
            locations: ["Tunis", "Sfax"],
            description: "Premium visa service center - France, Spain, Netherlands, Germany",
            color: "bg-blue-100 border-blue-300",
            countries: ["France", "Spain", "Netherlands", "Germany"],
            processingTime: "5-15 days",
            rating: 4.2
          },
          {
            name: "VFS Global",
            locations: ["Tunis"],
            description: "Global visa services - UK, Italy, Germany, Belgium",
            color: "bg-green-100 border-green-300",
            countries: ["UK", "Italy", "Germany", "Belgium"],
            processingTime: "10-20 days",
            rating: 4.0
          },
          {
            name: "BLS International",
            locations: ["Tunis"],
            description: "Government services - Spain, Italy, Portugal",
            color: "bg-purple-100 border-purple-300",
            countries: ["Spain", "Italy", "Portugal"],
            processingTime: "7-12 days",
            rating: 3.8
          },
        ];
      case "Algeria":
        return [
          {
            name: "TLScontact",
            locations: ["Algiers", "Oran"],
            description: "Premium visa service center - France, Spain, Germany",
            color: "bg-blue-100 border-blue-300",
            countries: ["France", "Spain", "Germany"],
            processingTime: "5-15 days",
            rating: 4.1
          },
          {
            name: "VFS Global",
            locations: ["Algiers"],
            description: "Global visa services - UK, Germany, Netherlands, Italy",
            color: "bg-green-100 border-green-300",
            countries: ["UK", "Germany", "Netherlands", "Italy"],
            processingTime: "10-20 days",
            rating: 4.3
          },
        ];
      case "Morocco":
        return [
          {
            name: "TLScontact",
            locations: ["Casablanca", "Rabat"],
            description: "Premium visa service center - France, Spain, Germany",
            color: "bg-blue-100 border-blue-300",
            countries: ["France", "Spain", "Germany"],
            processingTime: "5-15 days",
            rating: 4.4
          },
          {
            name: "VFS Global",
            locations: ["Casablanca"],
            description: "Global visa services - UK, Italy, Germany, Belgium",
            color: "bg-green-100 border-green-300",
            countries: ["UK", "Italy", "Germany", "Belgium"],
            processingTime: "10-20 days",
            rating: 4.1
          },
          {
            name: "BLS International",
            locations: ["Rabat"],
            description: "Government services - Spain, Italy, Portugal",
            color: "bg-purple-100 border-purple-300",
            countries: ["Spain", "Italy", "Portugal"],
            processingTime: "7-12 days",
            rating: 3.9
          },
        ];
      case "Egypt":
        return [
          {
            name: "VFS Global",
            locations: ["Cairo", "Alexandria"],
            description: "Global visa services - UK, Germany, Netherlands, France",
            color: "bg-green-100 border-green-300",
            countries: ["UK", "Germany", "Netherlands", "France"],
            processingTime: "10-20 days",
            rating: 4.2
          },
          {
            name: "Almaviva",
            locations: ["Cairo"],
            description: "Specialized in Italian visas",
            color: "bg-orange-100 border-orange-300",
            countries: ["Italy"],
            processingTime: "8-15 days",
            rating: 4.0
          },
          {
            name: "TLScontact",
            locations: ["Cairo"],
            description: "Premium visa service center - France, Spain, Germany",
            color: "bg-blue-100 border-blue-300",
            countries: ["France", "Spain", "Germany"],
            processingTime: "5-15 days",
            rating: 4.3
          },
        ];
      default:
        return [];
    }
  };

  const centers = getVisaCenters(country);

  const handleCenterSelect = (centerName: string) => {
    setSelectedCenter(centerName);
  };

  const handleNext = () => {
    if (selectedCenter) {
      onNext();
    }
  };

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🏢 اختر مركز الفيزا</h2>
        <p className="text-gray-600">اختر مركز خدمة الفيزا في {country}</p>
      </div>

      {/* Center Switching Buttons - Fixed Layout */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-center">تبديل بين مراكز الفيزا</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {centers.map((center) => (
            <Button
              key={center.name}
              variant={selectedCenter === center.name ? "default" : "outline"}
              onClick={() => handleCenterSelect(center.name)}
              className="flex items-center justify-center gap-2 p-4 h-auto min-h-[60px] text-center"
              size="lg"
            >
              <ArrowLeftRight className="h-4 w-4 flex-shrink-0" />
              <span className="font-medium">{center.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Center Details Cards */}
      <div className="space-y-4">
        {centers.map((center) => (
          <Card
            key={center.name}
            className={`cursor-pointer transition-all duration-200 hover:scale-102 hover:shadow-lg ${
              selectedCenter === center.name
                ? "ring-2 ring-blue-500 bg-blue-50 border-blue-300"
                : "hover:bg-gray-50 border-gray-200"
            }`}
            onClick={() => handleCenterSelect(center.name)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  {center.name}
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{center.rating}</span>
                  </div>
                </CardTitle>
                <Badge variant="outline" className="text-xs">
                  {center.locations.length} موقع
                </Badge>
              </div>
              <CardDescription>{center.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {center.locations.map((location) => (
                  <Badge key={location} variant="secondary" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {location}
                  </Badge>
                ))}
              </div>
              
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  <span className="text-sm text-gray-600">الدول المتاحة:</span>
                  {center.countries.map((country) => (
                    <Badge key={country} variant="outline" className="text-xs">
                      {country}
                    </Badge>
                  ))}
                </div>
                
                <div className="text-sm text-gray-600">
                  <span className="font-medium">مدة المعالجة:</span> {center.processingTime}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selection Confirmation and Payment Button */}
      {selectedCenter && (
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-green-600 font-medium">
              ✅ تم الاختيار: {selectedCenter}
            </p>
          </div>
          
          {/* Payment for Booking */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 text-center">💳 دفع مبلغ الحجز</CardTitle>
              <CardDescription className="text-center">
                يتطلب دفع رسوم الحجز المسبق لتأكيد موعدك
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center items-center gap-4">
                <Badge className="bg-green-600 text-white text-lg px-4 py-2">
                  رسوم الحجز: $25
                </Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="outline"
                  className="bg-yellow-100 border-yellow-300 text-yellow-800 hover:bg-yellow-200"
                >
                  🟡 Binance Pay
                </Button>
                <Button 
                  variant="outline"
                  className="bg-blue-100 border-blue-300 text-blue-800 hover:bg-blue-200"
                >
                  💳 بطاقة ائتمان
                </Button>
                <Button 
                  variant="outline"
                  className="bg-green-100 border-green-300 text-green-800 hover:bg-green-200"
                >
                  🏦 تحويل بنكي
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Next Button */}
          <div className="flex justify-center">
            <Button 
              onClick={handleNext}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              المتابعة إلى النموذج
            </Button>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">💡 نصيحة</h3>
        <p className="text-sm text-blue-700">
          اختر المركز بناءً على الدولة التي تريد السفر إليها ومدة المعالجة المطلوبة
        </p>
      </div>
    </div>
  );
};
