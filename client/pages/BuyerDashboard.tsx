import { Building2, Plus, Users, Calendar, Package, TrendingUp, Eye, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

// Mock data for buyer's tenders
const myTenders = [
  {
    id: "T001",
    title: "Supply of 5,000 Cotton T-Shirts",
    description: "High-quality cotton t-shirts for hotel staff uniforms. Color: White and Navy Blue.",
    quantity: "5,000 units",
    deadline: "30 Days",
    postedDate: "2 days ago",
    applicants: 12,
    status: "Active",
    category: "Textiles"
  },
  {
    id: "T002", 
    title: "Manufacturing 2,000 Wooden Chairs",
    description: "Ergonomic wooden office chairs with cushioned seats. Must meet BIS standards.",
    quantity: "2,000 pieces", 
    deadline: "45 Days",
    postedDate: "1 week ago",
    applicants: 8,
    status: "Active",
    category: "Furniture"
  },
  {
    id: "T003",
    title: "Steel Components for Machinery",
    description: "Precision-cut steel components as per technical drawings. Material grade: SS316.",
    quantity: "500 kg",
    deadline: "20 Days",
    postedDate: "3 days ago", 
    applicants: 15,
    status: "Active",
    category: "Metal Works"
  },
  {
    id: "T004",
    title: "Office Stationery Bulk Order",
    description: "Various office supplies including pens, papers, folders for corporate use.",
    quantity: "1000 units",
    deadline: "25 Days",
    postedDate: "5 days ago",
    applicants: 22,
    status: "Active", 
    category: "Office Supplies"
  },
  {
    id: "T005",
    title: "IT Equipment Procurement",
    description: "Laptops, monitors, and networking equipment for new office setup.",
    quantity: "50 pieces",
    deadline: "60 Days",
    postedDate: "1 week ago",
    applicants: 6,
    status: "Draft",
    category: "Technology"
  },
  {
    id: "T006",
    title: "Packaging Materials Supply",
    description: "Eco-friendly packaging boxes for food products. FSC certified materials required.",
    quantity: "10,000 units",
    deadline: "15 Days",
    postedDate: "2 weeks ago",
    applicants: 35,
    status: "Closed",
    category: "Packaging"
  }
];

export default function BuyerDashboard() {
  const activeTenders = myTenders.filter(t => t.status === "Active");
  const totalApplicants = myTenders.reduce((sum, tender) => sum + tender.applicants, 0);
  const avgApplicants = Math.round(totalApplicants / myTenders.length);

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
              <a href="#" className="text-primary font-medium">Dashboard</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Analytics</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Suppliers</a>
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
        {/* Welcome Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, XYZ Hotels!</h1>
            <p className="text-gray-600">Manage your procurement tenders and review supplier applications.</p>
          </div>
          <Link to="/buyer/create-tender">
            <Button size="lg" className="bg-primary hover:bg-primary-700">
              <Plus className="mr-2 w-5 h-5" />
              Create New Tender
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Tenders</p>
                  <p className="text-2xl font-bold text-gray-900">{activeTenders.length}</p>
                </div>
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Applications</p>
                  <p className="text-2xl font-bold text-gray-900">{totalApplicants}</p>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg. Applications</p>
                  <p className="text-2xl font-bold text-gray-900">{avgApplicants}</p>
                </div>
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Success Rate</p>
                  <p className="text-2xl font-bold text-gray-900">92%</p>
                </div>
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Tenders Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">My Tenders</h2>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-primary-50 text-primary">
                {myTenders.length} total tenders
              </Badge>
            </div>
          </div>

          <div className="grid gap-6">
            {myTenders.map((tender) => (
              <Card key={tender.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg">{tender.title}</CardTitle>
                        <Badge 
                          className={`
                            ${tender.status === 'Active' ? 'bg-success/10 text-success border-success/20' : ''}
                            ${tender.status === 'Draft' ? 'bg-warning/10 text-warning border-warning/20' : ''}
                            ${tender.status === 'Closed' ? 'bg-gray-100 text-gray-600 border-gray-200' : ''}
                          `}
                        >
                          {tender.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{tender.description}</p>
                      <p className="text-xs text-gray-500">Posted {tender.postedDate} • {tender.category}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Package className="w-4 h-4" />
                      <span>{tender.quantity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{tender.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{tender.applicants} applicants</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-medium ${
                        tender.applicants > 15 ? 'text-success' : 
                        tender.applicants > 8 ? 'text-warning' : 'text-gray-500'
                      }`}>
                        {tender.applicants > 15 ? 'High Interest' : 
                         tender.applicants > 8 ? 'Moderate Interest' : 'Low Interest'}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {tender.status === 'Active' && (
                        <Link to={`/buyer/applicants/${tender.id}`}>
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 w-4 h-4" />
                            View Applicants ({tender.applicants})
                          </Button>
                        </Link>
                      )}
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to post a new procurement requirement?</h3>
            <p className="text-gray-600 mb-4">Create a tender and connect with qualified MSME suppliers in minutes.</p>
            <Link to="/buyer/create-tender">
              <Button size="lg" className="bg-primary hover:bg-primary-700">
                <Plus className="mr-2 w-5 h-5" />
                Create New Tender
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
