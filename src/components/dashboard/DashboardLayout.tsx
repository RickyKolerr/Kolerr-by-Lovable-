import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserType } from "@/utils/userTypeUtils";
import { BrandDashboard } from "./brand/BrandDashboard";
import { AgencyDashboard } from "./agency/AgencyDashboard";
import { KOLDashboard } from "./kol/KOLDashboard";

export function DashboardLayout() {
  const navigate = useNavigate();
  const userType = getUserType();

  useEffect(() => {
    if (!userType) {
      navigate("/auth/login");
    }
  }, [userType, navigate]);

  if (!userType) return null;

  return (
    <div className="min-h-screen bg-background">
      {userType === "brand" && <BrandDashboard />}
      {userType === "agency" && <AgencyDashboard />}
      {userType === "kol" && <KOLDashboard />}
    </div>
  );
}