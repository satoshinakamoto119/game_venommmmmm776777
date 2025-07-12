
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, User, Passport, Calendar, MapPin } from "lucide-react";

interface VisaFormStepProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
}

export const VisaFormStep = ({ formData, setFormData, onNext }: VisaFormStepProps) => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { title: "Visa Type", icon: FileText },
    { title: "Personal Info", icon: User },
    { title: "Passport Details", icon: Passport },
    { title: "Travel Info", icon: MapPin },
  ];

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Select Visa Type
            </h3>
            <Select onValueChange={(value) => updateFormData('visaType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose visa type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="schengen">Schengen Visa</SelectItem>
                <SelectItem value="student">Student Visa</SelectItem>
                <SelectItem value="work">Work Visa</SelectItem>
                <SelectItem value="tourist">Tourist Visa</SelectItem>
                <SelectItem value="business">Business Visa</SelectItem>
                <SelectItem value="family">Family Reunion</SelectItem>
              </SelectContent>
            </Select>
            <div className="space-y-2">
              <Label htmlFor="destination">Destination Country</Label>
              <Input
                id="destination"
                placeholder="e.g., France, Germany, Italy"
                onChange={(e) => updateFormData('destination', e.target.value)}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="Enter first name"
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Enter last name"
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input
                  id="nationality"
                  placeholder="Enter nationality"
                  onChange={(e) => updateFormData('nationality', e.target.value)}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Passport className="h-5 w-5" />
              Passport Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="passportNumber">Passport Number</Label>
                <Input
                  id="passportNumber"
                  placeholder="Enter passport number"
                  onChange={(e) => updateFormData('passportNumber', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="passportExpiry">Expiry Date</Label>
                <Input
                  id="passportExpiry"
                  type="date"
                  onChange={(e) => updateFormData('passportExpiry', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="passportScan">Upload Passport Scan</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                <Input type="file" className="hidden" id="passportScan" accept=".pdf,.jpg,.png" />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Travel Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="travelDateFrom">Travel Date From</Label>
                <Input
                  id="travelDateFrom"
                  type="date"
                  onChange={(e) => updateFormData('travelDateFrom', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="travelDateTo">Travel Date To</Label>
                <Input
                  id="travelDateTo"
                  type="date"
                  onChange={(e) => updateFormData('travelDateTo', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="purposeOfVisit">Purpose of Visit</Label>
              <Textarea
                id="purposeOfVisit"
                placeholder="Describe the purpose of your visit..."
                onChange={(e) => updateFormData('purposeOfVisit', e.target.value)}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      onNext();
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🗂 Fill Out Visa Form</h2>
        <p className="text-gray-600">Complete your visa application step by step</p>
      </div>

      {/* Section Navigation */}
      <div className="flex justify-center space-x-2 mb-6">
        {sections.map((section, index) => {
          const SectionIcon = section.icon;
          return (
            <div
              key={index}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                index === currentSection
                  ? "bg-blue-100 text-blue-700"
                  : index < currentSection
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              <SectionIcon className="h-4 w-4" />
              <span className="hidden sm:inline">{section.title}</span>
            </div>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            Step {currentSection + 1} of {sections.length}
          </CardTitle>
          <CardDescription>
            Section {currentSection + 1}: {sections[currentSection].title}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {renderCurrentSection()}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevSection}
          disabled={currentSection === 0}
        >
          Previous
        </Button>
        <Button onClick={nextSection}>
          {currentSection < sections.length - 1 ? "Next Section" : "Continue to Appointment"}
        </Button>
      </div>
    </div>
  );
};
