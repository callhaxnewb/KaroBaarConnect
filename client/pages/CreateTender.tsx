import { Building2, ArrowLeft, Save, Send, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function CreateTender() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4ab28f7bdf0441198b5aa68936b3250f%2Fafdaa963bbea4078bee6f04cdb2bd580?format=webp&width=800"
                alt="कारोबार Connect Logo"
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="text-xl font-bold text-primary">कारोबार Connect</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/buyer/dashboard" className="text-gray-600 hover:text-primary transition-colors">Dashboard</Link>
              <a href="#" className="text-primary font-medium">Create Tender</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Analytics</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Settings</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Languages className="w-4 h-4" />
                हिंदी
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary-100 text-primary text-sm">XH</AvatarFallback>
              </Avatar>
              <span className="hidden sm:block text-sm font-medium">XYZ Hotels</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link to="/buyer/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Tender</h1>
          <p className="text-gray-600">Post a procurement requirement and connect with qualified MSME suppliers.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Tender Details</CardTitle>
                <p className="text-sm text-gray-600">Provide clear and detailed information about your procurement requirement.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Job Title */}
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input 
                    id="jobTitle"
                    placeholder="e.g., Supply of 1,000 Office Chairs"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500">Be specific and descriptive to attract the right suppliers</p>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="textiles">Textiles & Apparel</SelectItem>
                      <SelectItem value="furniture">Furniture & Fixtures</SelectItem>
                      <SelectItem value="metalworks">Metal Works & Engineering</SelectItem>
                      <SelectItem value="technology">Technology & Software</SelectItem>
                      <SelectItem value="packaging">Packaging & Materials</SelectItem>
                      <SelectItem value="electronics">Electronics & Components</SelectItem>
                      <SelectItem value="office-supplies">Office Supplies</SelectItem>
                      <SelectItem value="construction">Construction & Building</SelectItem>
                      <SelectItem value="automotive">Automotive Parts</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Detailed Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea 
                    id="description"
                    placeholder="Provide comprehensive details about your requirements including specifications, quality standards, delivery expectations, and any special requirements..."
                    className="min-h-32"
                  />
                  <p className="text-xs text-gray-500">Include technical specifications, quality standards, and delivery requirements</p>
                </div>

                {/* Quantity and Unit */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity Required *</Label>
                    <Input 
                      id="quantity"
                      type="number"
                      placeholder="1000"
                      min="1"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pieces">Pieces</SelectItem>
                        <SelectItem value="units">Units</SelectItem>
                        <SelectItem value="kg">Kilograms</SelectItem>
                        <SelectItem value="meters">Meters</SelectItem>
                        <SelectItem value="liters">Liters</SelectItem>
                        <SelectItem value="boxes">Boxes</SelectItem>
                        <SelectItem value="sets">Sets</SelectItem>
                        <SelectItem value="projects">Projects</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Deadline and Budget */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Deadline (in days) *</Label>
                    <Input 
                      id="deadline"
                      type="number"
                      placeholder="30"
                      min="1"
                      max="365"
                    />
                    <p className="text-xs text-gray-500">Number of days from posting date</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Expected Budget Range (₹)</Label>
                    <Input 
                      id="budget"
                      placeholder="e.g., 1,00,000 - 2,00,000"
                    />
                    <p className="text-xs text-gray-500">Optional: Helps suppliers provide competitive bids</p>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Delivery Location *</Label>
                  <Input 
                    id="location"
                    placeholder="e.g., Mumbai, Maharashtra"
                  />
                  <p className="text-xs text-gray-500">Primary delivery location for this tender</p>
                </div>

                {/* Additional Requirements */}
                <div className="space-y-2">
                  <Label htmlFor="requirements">Additional Requirements</Label>
                  <Textarea 
                    id="requirements"
                    placeholder="Any additional requirements, certifications needed, or special instructions for suppliers..."
                    className="min-h-24"
                  />
                  <p className="text-xs text-gray-500">Certifications, compliance requirements, special instructions</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preview Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Tender Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">How suppliers will see your tender:</h4>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>• Clear and specific job title</p>
                    <p>• Detailed requirements and specifications</p>
                    <p>• Quantity and delivery timeline</p>
                    <p>• Your company information</p>
                    <p>• Application deadline</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Tips for Better Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Use specific, descriptive titles to attract the right suppliers</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Include technical specifications and quality standards</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Provide realistic timelines for better response rates</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Mention required certifications or compliance needs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-primary hover:bg-primary-700" size="lg">
                <Send className="mr-2 w-5 h-5" />
                Post Tender
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Save className="mr-2 w-5 h-5" />
                Save as Draft
              </Button>
            </div>

            {/* Estimated Timeline */}
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium text-gray-900 mb-3">Estimated Timeline</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Applications start</span>
                    <span className="font-medium">Immediately</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Peak application period</span>
                    <span className="font-medium">Days 1-7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Review period</span>
                    <span className="font-medium">Days 7-14</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Award decision</span>
                    <span className="font-medium">Day 15+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
