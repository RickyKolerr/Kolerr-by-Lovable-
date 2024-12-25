import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Calendar, DollarSign, User } from "lucide-react";

export function KOLDashboard() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
        KOL Dashboard
      </h1>

      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList className="grid grid-cols-4 gap-4 bg-transparent h-auto p-0">
          <TabsTrigger
            value="campaigns"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Current Campaigns
          </TabsTrigger>
          <TabsTrigger
            value="availability"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Slot Availability
          </TabsTrigger>
          <TabsTrigger
            value="earnings"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Earnings/Status
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            KOL Info
          </TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Current Campaigns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>View and manage your active campaign commitments.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="availability">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Slot Availability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your availability for upcoming campaigns.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="earnings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Earnings & Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Track your earnings and campaign performance metrics.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                KOL Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your profile, portfolio, and social media presence.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}