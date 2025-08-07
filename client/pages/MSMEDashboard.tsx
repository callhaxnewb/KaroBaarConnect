import { Building2, Calendar, Package, MapPin, Clock, ArrowRight, Languages, Award, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

// Mock data for available tenders
const availableTenders = [
  {
    id: "T001",
    title: "Supply of 5,000 Cotton T-Shirts",
    buyer: "XYZ Hotels",
    buyerLogo: "XH",
    quantity: "5,000 units",
    deadline: "30 Days",
    location: "Mumbai, Maharashtra",
    category: "Textiles",
    description: "High-quality cotton t-shirts for hotel staff uniforms. Color: White and Navy Blue. Sizes: S, M, L, XL.",
    postedDate: "2 days ago",
    applicants: 12
  },
  {
    id: "T002", 
    title: "Manufacturing 2,000 Wooden Chairs",
    buyer: "Office Solutions Ltd",
    buyerLogo: "OS",
    quantity: "2,000 pieces",
    deadline: "45 Days",
    location: "Bangalore, Karnataka",
    category: "Furniture",
    description: "Ergonomic wooden office chairs with cushioned seats. Must meet BIS standards.",
    postedDate: "1 day ago",
    applicants: 8
  },
  {
    id: "T003",
    title: "Steel Components for Machinery",
    buyer: "Industrial Corp",
    buyerLogo: "IC",
    quantity: "500 kg",
    deadline: "20 Days",
    location: "Chennai, Tamil Nadu", 
    category: "Metal Works",
    description: "Precision-cut steel components as per technical drawings. Material grade: SS316.",
    postedDate: "3 days ago",
    applicants: 15
  },
  {
    id: "T004",
    title: "Custom Software Development",
    buyer: "Tech Innovations",
    buyerLogo: "TI",
    quantity: "1 project",
    deadline: "90 Days",
    location: "Pune, Maharashtra",
    category: "Technology",
    description: "Development of inventory management system with mobile app integration.",
    postedDate: "1 week ago",
    applicants: 22
  },
  {
    id: "T005",
    title: "Packaging Materials Supply",
    buyer: "FoodCorp Industries",
    buyerLogo: "FC",
    quantity: "10,000 units",
    deadline: "15 Days",
    location: "Delhi, NCR",
    category: "Packaging",
    description: "Eco-friendly packaging boxes for food products. FSC certified materials required.",
    postedDate: "4 days ago",
    applicants: 9
  },
  {
    id: "T006",
    title: "Electrical Panel Assembly",
    buyer: "Power Systems Ltd",
    buyerLogo: "PS",
    quantity: "50 panels",
    deadline: "35 Days",
    location: "Hyderabad, Telangana",
    category: "Electronics",
    description: "Industrial control panels with PLC integration. Must comply with electrical safety standards.",
    postedDate: "5 days ago",
    applicants: 6
  }
];

const categories = ["All Categories", "Textiles", "Furniture", "Metal Works", "Technology", "Packaging", "Electronics"];

export default function MSMEDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4ab28f7bdf0441198b5aa68936b3250f%2Fafdaa963bbea4078bee6f04cdb2bd580?format=webp&width=800"
                alt="कारो���ार Connect Logo"
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="text-xl font-bold text-primary">कारोबार Connect</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-primary font-medium">Dashboard</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">My Applications</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Profile</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Help</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Languages className="w-4 h-4" />
                हिंदी
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary-100 text-primary text-sm">AB</AvatarFallback>
              </Avatar>
              <span className="hidden sm:block text-sm font-medium">ABC Weavers</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, ABC Weavers!</h1>
          <p className="text-gray-600">Discover new procurement opportunities and grow your business.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Applications</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Contracts Won</p>
                  <p className="text-2xl font-bold text-gray-900">23</p>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Success Rate</p>
                  <p className="text-2xl font-bold text-gray-900">74%</p>
                </div>
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">₹12.4L</p>
                </div>
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input 
              placeholder="Search tenders by title, company, or location..." 
              className="w-full"
            />
          </div>
          <Select defaultValue="All Categories">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="deadline">Deadline Soon</SelectItem>
              <SelectItem value="applicants">Least Competition</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Available Tenders */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Available Tenders</h2>
            <Badge variant="secondary" className="bg-primary-50 text-primary">
              {availableTenders.length} opportunities
            </Badge>
          </div>

          <div className="grid gap-6">
            {availableTenders.map((tender) => (
              <Card key={tender.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-primary-100 text-primary font-semibold">
                          {tender.buyerLogo}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg mb-1">{tender.title}</CardTitle>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {tender.buyer}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-primary-50 text-primary border-primary-200">
                      {tender.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-700 mb-4 line-clamp-2">{tender.description}</p>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Package className="w-4 h-4" />
                      <span>{tender.quantity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{tender.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{tender.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{tender.postedDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">
                        {tender.applicants} suppliers applied
                      </span>
                    </div>
                    <Button className="bg-primary hover:bg-primary-700">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center py-8">
            <Button variant="outline" size="lg">
              Load More Tenders
            </Button>
          </div>
        </div>

        {/* Government Schemes Section */}
        <div className="mt-12 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Relevant Government Schemes</h2>
            <Badge variant="secondary" className="bg-success/10 text-success">
              Personalized for you
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Scheme 1 - MSME Technology Upgradation */}
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Technology Upgradation Scheme</CardTitle>
                      <p className="text-sm text-gray-600">Ministry of MSME</p>
                    </div>
                  </div>
                  <Badge className="bg-success/10 text-success border-success/20">
                    95% Match
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 mb-4 text-sm">
                  Financial assistance for technology upgradation and modernization of MSME units.
                  Subsidies up to 25% for general category and 35% for SC/ST entrepreneurs.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <span className="text-gray-600">Subsidy:</span>
                    <p className="font-medium">Up to ₹1 Crore</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Deadline:</span>
                    <p className="font-medium">March 31, 2024</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Recommended for textile machinery</span>
                  <Button size="sm" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                    <ExternalLink className="mr-1 w-3 h-3" />
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Scheme 2 - Credit Guarantee Scheme */}
            <Card className="border-l-4 border-l-success hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                      <FileText className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Credit Guarantee Fund</CardTitle>
                      <p className="text-sm text-gray-600">CGTMSE - SIDBI</p>
                    </div>
                  </div>
                  <Badge className="bg-warning/10 text-warning border-warning/20">
                    88% Match
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 mb-4 text-sm">
                  Collateral-free credit facility for MSMEs. Get loans up to ₹2 crore without
                  providing collateral security to banks and financial institutions.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <span className="text-gray-600">Credit Limit:</span>
                    <p className="font-medium">₹10L - ₹2Cr</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Guarantee:</span>
                    <p className="font-medium">75-85%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">No collateral required</span>
                  <Button size="sm" variant="outline" className="text-success border-success hover:bg-success hover:text-white">
                    <ExternalLink className="mr-1 w-3 h-3" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Scheme 3 - Prime Minister's Employment Generation Programme */}
            <Card className="border-l-4 border-l-warning hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-warning" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">PMEGP Scheme</CardTitle>
                      <p className="text-sm text-gray-600">Ministry of MSME</p>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    82% Match
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 mb-4 text-sm">
                  Financial assistance for setting up new MSME units. Margin money subsidy
                  for manufacturing and service sector enterprises.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <span className="text-gray-600">Max Project:</span>
                    <p className="font-medium">₹25 Lakh</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Subsidy:</span>
                    <p className="font-medium">15-35%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">For new enterprises</span>
                  <Button size="sm" variant="outline" className="text-warning border-warning hover:bg-warning hover:text-white">
                    <ExternalLink className="mr-1 w-3 h-3" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Scheme 4 - Udyam Registration Benefits */}
            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Udyam Registration</CardTitle>
                      <p className="text-sm text-gray-600">Government of India</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-50 text-blue-600 border-blue-200">
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 mb-4 text-sm">
                  Free online registration for MSMEs providing various benefits including
                  priority lending, patent filing rebates, and government scheme access.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <span className="text-gray-600">Registration:</span>
                    <p className="font-medium">Free & Online</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Benefits:</span>
                    <p className="font-medium">Multiple</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Your status: Registered ✓</span>
                  <Button size="sm" variant="outline" className="text-blue-600 border-blue-500 hover:bg-blue-500 hover:text-white">
                    <ExternalLink className="mr-1 w-3 h-3" />
                    View Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* View More Schemes */}
          <Card className="bg-gradient-to-r from-primary-50 to-blue-50">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore More Government Benefits</h3>
              <p className="text-gray-600 mb-4">Discover additional schemes and incentives tailored for your business profile and location.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline">View All Schemes</Button>
                <Button className="bg-primary hover:bg-primary-700">
                  Get Personalized Recommendations
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
