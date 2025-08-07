import { ArrowRight, Building2, Factory, TrendingUp, Shield, Clock, Users, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4ab28f7bdf0441198b5aa68936b3250f%2Fafdaa963bbea4078bee6f04cdb2bd580?format=webp&width=800"
                alt="कारोबार Connect Logo"
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="text-xl font-bold text-primary">कारोबार Connect</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Languages className="w-4 h-4" />
                हिंदी
              </Button>
              <Link to="/msme/dashboard">
                <Button variant="ghost">MSME Login</Button>
              </Link>
              <Link to="/buyer/dashboard">
                <Button>Buyer Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-primary-50 text-primary border-primary-100">
            AI-Powered कारोबार Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connect. कारोबार.
            <span className="text-primary"> Grow.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The intelligent marketplace that connects large enterprises with qualified MSMEs,
            powered by AI-driven confidence scoring for smarter कारोबार decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/buyer/dashboard">
              <Button size="lg" className="text-lg px-8 py-6">
                Start as Buyer <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/msme/dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white">
                Join as MSME Supplier
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose कारोबार Connect?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform revolutionizes procurement with intelligent matching and transparent scoring.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Confidence Scoring</h3>
                <p className="text-gray-600">
                  Our proprietary AI analyzes supplier capabilities and provides confidence scores to help buyers make informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Verified Suppliers</h3>
                <p className="text-gray-600">
                  All MSME suppliers are thoroughly vetted and verified to ensure quality and reliability for your procurement needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-warning" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Faster Procurement</h3>
                <p className="text-gray-600">
                  Streamline your कारोबार process with automated matching and simplified tender management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-16 px-4 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How कारोबार Connect Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and efficient procurement in three easy steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Buyer Flow */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-gray-900">For Buyers</h3>
              </div>
              <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Post Your Tender</h4>
                  <p className="text-gray-600">Create detailed कारोबार requirements and specifications for your project.</p>
                </div>
              </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Review Applications</h4>
                    <p className="text-gray-600">See AI-powered confidence scores for each applicant based on their capabilities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Select & Award</h4>
                    <p className="text-gray-600">Choose the best supplier and award the contract with confidence.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MSME Flow */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Factory className="w-8 h-8 text-success" />
                <h3 className="text-2xl font-bold text-gray-900">For MSMEs</h3>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Complete Your Profile</h4>
                    <p className="text-gray-600">Share your capabilities, machinery, and workforce details to build credibility.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Browse Opportunities</h4>
                    <p className="text-gray-600">Discover relevant tenders from verified large enterprises looking for suppliers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Submit Competitive Bids</h4>
                    <p className="text-gray-600">Apply with competitive pricing and let our AI showcase your strengths.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your कारोबार?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of buyers and suppliers already using कारोबार Connect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/buyer/dashboard">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start कारोबार Today
              </Button>
            </Link>
            <Link to="/msme/dashboard">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Join as Supplier
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4ab28f7bdf0441198b5aa68936b3250f%2Fafdaa963bbea4078bee6f04cdb2bd580?format=webp&width=800"
                  alt="कारोबार Connect Logo"
                  className="w-8 h-8 rounded-lg object-contain"
                />
                <span className="text-xl font-bold">कारोबार Connect</span>
              </div>
              <p className="text-gray-400">
                Intelligent कारोबार platform connecting enterprises with qualified suppliers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 कारोबार Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
