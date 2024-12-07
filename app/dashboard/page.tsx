import { AssetDistribution } from "@/components/dashboard/asset-distribution";
import { DashboardSkeleton } from "@/components/dashboard/dashboard-skeleton";
import { MarketCapAnalysis } from "@/components/dashboard/marketcap-analysis";
import { PortfolioOverview } from "@/components/dashboard/portfolio-overview";
import { TokenAnalysis } from "@/components/dashboard/token-analysis";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold">Portfolio Dashboard</h1>
        <Link href="/analysis">
          <Button className="bg-[#0500FF] hover:bg-[#0500FF]/90 text-white">
            View AI Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <PortfolioOverview />
            <TokenAnalysis />
          </div>
          <div className="space-y-6">
            <AssetDistribution />
            <MarketCapAnalysis />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
