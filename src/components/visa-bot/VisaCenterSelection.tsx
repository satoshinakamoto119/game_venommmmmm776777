
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

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
            description: "Premium visa service center",
            color: "bg-blue-100 border-blue-300",
          },
          {
            name: "VFS Global",
            locations: ["Tunis"],
            description: "Global visa outsourcing services",
            color: "bg-green-100 border-green-300",
          },
          {
            name: "BLS International",
            locations: ["Tunis"],
            description: "Government services provider",
            color: "bg-purple-100 border-purple-300",
          },
        ];
      case "Algeria":
        return [
          {
            name: "TLScontact",
            locations: ["Algiers", "Oran"],
            description: "Premium visa service center",
            color: "bg-blue-100 border-blue-300",
          },
        ];
      case "Morocco":
        return [
          {
            name: "TLScontact",
            locations: ["Casablanca", "Rabat"],
            description: "Premium visa service center",
            color: "bg-blue-100 border-blue-300",
          },
          {
            name: "VFS Global",
            locations: ["Casablanca"],
            description: "Global visa outsourcing services",
            color: "bg-green-100 border-green-300",
          },
          {
            name: "BLS International",
            locations: ["Rabat"],
            description: "Government services provider",
            color: "bg-purple-100 border-purple-300",
          },
        ];
      case "Egypt":
        return [
          {
            name: "VFS Global",
            locations: ["Cairo", "Alexandria"],
            description: "Global visa outsourcing services",
            color: "bg-green-100 border-green-300",
          },
          {
            name: "Almaviva",
            locations: ["Cairo"],
            description: "Specialized in Italian visas",
            color: "bg-orange-100 border-orange-300",
          },
        ];
      default:
        return [];
    }
  };

  const centers = getVisaCenters(country);

  const handleCenterSelect = (centerName: string) => {
    setSelectedCenter(centerName);
    setTimeout(onNext, 300);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🏢 Choose Visa Center</h2>
        <p className="text-gray-600">Select the visa service center for {country}</p>
      </div>

      <div className="space-y-4">
        {centers.map((center) => (
          <Card
            key={center.name}
            className={`cursor-pointer transition-all duration-200 hover:scale-102 hover:shadow-lg ${
              selectedCenter === center.name
                ? "ring-2 ring-blue-500 bg-blue-50"
                : "hover:bg-gray-50"
            } ${center.color}`}
            onClick={() => handleCenterSelect(center.name)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">{center.name}</CardTitle>
                <Badge variant="outline" className="text-xs">
                  {center.locations.length} location{center.locations.length > 1 ? 's' : ''}
                </Badge>
              </div>
              <CardDescription>{center.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {center.locations.map((location) => (
                  <Badge key={location} variant="secondary" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {location}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedCenter && (
        <div className="text-center">
          <p className="text-green-600 font-medium">
            ✅ Selected: {selectedCenter}
          </p>
        </div>
      )}
    </div>
  );
};
