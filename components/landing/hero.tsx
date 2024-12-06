"use client";

import { Button } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react";
import { toast } from "sonner";
import { useAccount } from "wagmi";

export function LandingHero() {
  const { isConnected } = useAccount();

  const handleLaunchApp = () => {
    if (!isConnected) {
      toast.error("Please connect your wallet to continue");
      return;
    }
    // Navigate to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="relative overflow-hidden text-center">
      <div className="absolute inset-x-0 top-10 z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="bg-gradient-to-r from-primary/90 to-primary/70 dark:from-primary/80 dark:to-primary/60 text-white dark:text-primary-foreground py-3 px-4 rounded-lg shadow-lg max-w-2xl mx-auto">
            <p className="text-lg font-semibold">
              🚀 Don't miss out on potential 100x gains! Join thousands of
              successful traders today.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Your Gateway to{" "}
            <span className="text-primary">Decentralized Finance</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Track, manage and optimize your DeFi portfolio with advanced
            analytics and AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <ConnectButton />
            <Button
              size="lg"
              onClick={handleLaunchApp}
              className="bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              Launch App <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <Feature
            icon={TrendingUp}
            title="Portfolio Tracking"
            description="Real-time tracking of your DeFi investments across multiple chains"
          />
          <Feature
            icon={Shield}
            title="Security First"
            description="Non-custodial solution with industry-leading security measures"
          />
          <Feature
            icon={Zap}
            title="AI Insights"
            description="Smart recommendations powered by advanced AI algorithms"
          />
        </div>
      </div>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-primary/5 transition-colors">
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <div className="rounded-full bg-primary/10 p-4 mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>
    </div>
  );
}
