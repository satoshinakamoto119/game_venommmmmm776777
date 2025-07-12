
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CountrySelectionProps {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  onNext: () => void;
}

export const CountrySelection = ({ selectedCountry, setSelectedCountry, onNext }: CountrySelectionProps) => {
  const countries = [
    { name: "Algeria", code: "DZ", flag: "🇩🇿", color: "bg-green-100 border-green-300" },
    { name: "Tunisia", code: "TN", flag: "🇹🇳", color: "bg-red-100 border-red-300" },
    { name: "Morocco", code: "MA", flag: "🇲🇦", color: "bg-red-100 border-red-300" },
    { name: "Egypt", code: "EG", flag: "🇪🇬", color: "bg-yellow-100 border-yellow-300" },
  ];

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setTimeout(onNext, 300);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🌍 Select Your Country</h2>
        <p className="text-gray-600">Choose the country you're applying from</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {countries.map((country) => (
          <Card
            key={country.code}
            className={`cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg ${
              selectedCountry === country.name
                ? "ring-2 ring-blue-500 bg-blue-50"
                : "hover:bg-gray-50"
            } ${country.color}`}
            onClick={() => handleCountrySelect(country.name)}
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">{country.flag}</div>
              <h3 className="text-xl font-semibold text-gray-800">{country.name}</h3>
              <p className="text-sm text-gray-600 mt-1">Code: {country.code}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedCountry && (
        <div className="text-center">
          <p className="text-green-600 font-medium">
            ✅ Selected: {selectedCountry}
          </p>
        </div>
      )}
    </div>
  );
};
