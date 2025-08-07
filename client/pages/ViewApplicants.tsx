import { Building2, ArrowLeft, Star, Users, Calendar, Package, Factory, Award, X, Check, Eye, Phone, Mail, MapPin, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Link, useParams } from "react-router-dom";

// Mock data for tender applicants
const tenderDetails = {
  id: "T001",
  title: "Supply of 5,000 Cotton T-Shirts",
  description: "High-quality cotton t-shirts for hotel staff uniforms. Color: White and Navy Blue. Sizes: S, M, L, XL.",
  quantity: "5,000 units",
  deadline: "30 Days",
  postedDate: "2 days ago",
  category: "Textiles"
};

const applicants = [
  {
    id: "A001",
    name: "ABC Weavers",
    logo: "AW",
    location: "Mumbai, Maharashtra", 
    bidPrice: 150000,
    confidence: "High",
    rating: 4.8,
    completedProjects: 23,
    experience: "8 years",
    machines: 12,
    workers: 45,
    specialization: "Cotton textiles, uniforms",
    certifications: ["ISO 9001", "GOTS"],
    deliveryTime: "25 days",
    appliedDate: "2 days ago",
    phoneNumber: "+91 98765 43210",
    email: "contact@abcweavers.com"
  },
  {
    id: "A002", 
    name: "Textile Solutions Ltd",
    logo: "TS",
    location: "Tirupur, Tamil Nadu",
    bidPrice: 142000,
    confidence: "High", 
    rating: 4.6,
    completedProjects: 31,
    experience: "12 years",
    machines: 18,
    workers: 67,
    specialization: "Corporate uniforms, garments",
    certifications: ["ISO 9001", "Oeko-Tex"],
    deliveryTime: "22 days",
    appliedDate: "1 day ago",
    phoneNumber: "+91 99887 65432",
    email: "info@textilesolutions.com"
  },
  {
    id: "A003",
    name: "Quality Garments Co",
    logo: "QG", 
    location: "Bangalore, Karnataka",
    bidPrice: 165000,
    confidence: "Medium",
    rating: 4.2,
    completedProjects: 15,
    experience: "5 years",
    machines: 8,
    workers: 28,
    specialization: "Cotton apparel, customization",
    certifications: ["ISO 9001"],
    deliveryTime: "28 days",
    appliedDate: "1 day ago",
    phoneNumber: "+91 98123 45678",
    email: "orders@qualitygarments.in"
  },
  {
    id: "A004",
    name: "Metro Textiles",
    logo: "MT",
    location: "Delhi, NCR",
    bidPrice: 138000,
    confidence: "Medium",
    rating: 4.0,
    completedProjects: 12,
    experience: "6 years", 
    machines: 10,
    workers: 35,
    specialization: "Bulk textiles, uniforms",
    certifications: ["BIS"],
    deliveryTime: "30 days",
    appliedDate: "3 hours ago",
    phoneNumber: "+91 98765 12345",
    email: "sales@metrotextiles.com"
  },
  {
    id: "A005",
    name: "Sunrise Apparels",
    logo: "SA",
    location: "Chennai, Tamil Nadu",
    bidPrice: 175000,
    confidence: "Low",
    rating: 3.8,
    completedProjects: 8,
    experience: "3 years",
    machines: 6,
    workers: 20,
    specialization: "Basic garments",
    certifications: ["BIS"],
    deliveryTime: "35 days",
    appliedDate: "4 hours ago",
    phoneNumber: "+91 97654 32109",
    email: "contact@sunriseapparels.in"
  },
  {
    id: "A006",
    name: "Premium Weavers",
    logo: "PW",
    location: "Coimbatore, Tamil Nadu",
    bidPrice: 155000,
    confidence: "High",
    rating: 4.7,
    completedProjects: 28,
    experience: "10 years",
    machines: 15,
    workers: 52,
    specialization: "Premium textiles, hospitality uniforms",
    certifications: ["ISO 9001", "GOTS", "Oeko-Tex"],
    deliveryTime: "24 days",
    appliedDate: "5 hours ago",
    phoneNumber: "+91 98876 54321",
    email: "business@premiumweavers.com"
  }
];

export default function ViewApplicants() {
  const { tenderId } = useParams();

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case "High": return "bg-success text-success-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Low": return "bg-destructive text-destructive-foreground";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const sortedApplicants = [...applicants].sort((a, b) => {
    const confidenceOrder = { "High": 3, "Medium": 2, "Low": 1 };
    if (confidenceOrder[a.confidence as keyof typeof confidenceOrder] !== confidenceOrder[b.confidence as keyof typeof confidenceOrder]) {
      return confidenceOrder[b.confidence as keyof typeof confidenceOrder] - confidenceOrder[a.confidence as keyof typeof confidenceOrder];
    }
    return a.bidPrice - b.bidPrice;
  });

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
              <a href="#" className="text-primary font-medium">View Applicants</a>
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
            Back to My Tenders
          </Link>
        </div>

        {/* Tender Details Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">{tenderDetails.title}</CardTitle>
                <p className="text-gray-600 mb-4">{tenderDetails.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Package className="w-4 h-4" />
                    {tenderDetails.quantity}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {tenderDetails.deadline}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {applicants.length} applicants
                  </div>
                </div>
              </div>
              <Badge className="bg-primary-50 text-primary border-primary-200">
                {tenderDetails.category}
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">{applicants.length}</div>
              <div className="text-sm text-gray-600">Total Applications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-success mb-1">{applicants.filter(a => a.confidence === "High").length}</div>
              <div className="text-sm text-gray-600">High Confidence</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">₹{Math.min(...applicants.map(a => a.bidPrice)).toLocaleString()}</div>
              <div className="text-sm text-gray-600">Lowest Bid</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">₹{Math.round(applicants.reduce((sum, a) => sum + a.bidPrice, 0) / applicants.length).toLocaleString()}</div>
              <div className="text-sm text-gray-600">Average Bid</div>
            </CardContent>
          </Card>
        </div>

        {/* Applicants List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Applicants (Sorted by Confidence & Price)</h2>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">High Confidence</Badge>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">Medium Confidence</Badge>
              <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">Low Confidence</Badge>
            </div>
          </div>

          <div className="space-y-4">
            {sortedApplicants.map((applicant, index) => (
              <Card key={applicant.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-primary-100 text-primary font-semibold">
                          {applicant.logo}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{applicant.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{applicant.location}</span>
                          <Separator orientation="vertical" className="h-4" />
                          <span className="text-sm text-gray-600">{applicant.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{applicant.rating}</span>
                          <span className="text-sm text-gray-600">({applicant.completedProjects} projects)</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900 mb-1">₹{applicant.bidPrice.toLocaleString()}</div>
                      <div className="text-sm text-gray-600 mb-2">Delivery: {applicant.deliveryTime}</div>
                      <Badge className={getConfidenceColor(applicant.confidence)}>
                        {applicant.confidence} Confidence
                      </Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Capabilities</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Factory className="w-4 h-4" />
                          <span>{applicant.machines} key machines, {applicant.workers} skilled workers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>Specializes in: {applicant.specialization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4" />
                          <span>Certifications: {applicant.certifications.join(", ")}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Contact Information</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>{applicant.phoneNumber}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span>{applicant.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Applied {applicant.appliedDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {index === 0 && applicant.confidence === "High" && (
                        <Badge className="bg-primary-50 text-primary border-primary-200">
                          Recommended
                        </Badge>
                      )}
                      <span className="text-sm text-gray-500">
                        Rank #{index + 1} • AI Score: {applicant.confidence}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-1 w-4 h-4" />
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive hover:text-white">
                        <X className="mr-1 w-4 h-4" />
                        Reject
                      </Button>
                      <Button size="sm" className="bg-success hover:bg-success/90 text-white">
                        <Check className="mr-1 w-4 h-4" />
                        Accept Application
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Panel */}
          <Card className="bg-gradient-to-r from-primary-50 to-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Ready to make a decision?</h3>
                  <p className="text-sm text-gray-600">Review all applications and select the best supplier for your requirements.</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline">Compare Selected</Button>
                  <Button className="bg-primary hover:bg-primary-700">Award Contract</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
