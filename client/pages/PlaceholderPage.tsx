import { Building2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  userType?: "MSME" | "Buyer";
}

export default function PlaceholderPage({ title, description, userType }: PlaceholderPageProps) {
  const dashboardLink = userType === "MSME" ? "/msme/dashboard" : userType === "Buyer" ? "/buyer/dashboard" : "/";
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4ab28f7bdf0441198b5aa68936b3250f%2Fafdaa963bbea4078bee6f04cdb2bd580?format=webp&width=800"
              alt="कारोबार Connect Logo"
              className="w-8 h-8 rounded-lg object-contain"
            />
            <span className="text-xl font-bold text-primary">कारोबार Connect</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{title}</h1>
              <p className="text-gray-600 mb-8">{description}</p>
              
              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  This page is coming soon! Continue prompting to have us build out this functionality.
                </p>
                
                <div className="flex flex-col gap-3">
                  <Link to={dashboardLink}>
                    <Button className="w-full">
                      <ArrowLeft className="mr-2 w-4 h-4" />
                      Back to Dashboard
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button variant="outline" className="w-full">
                      Go to Homepage
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
