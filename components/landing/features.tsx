"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Wallet,
  ArrowRightLeft,
  Sparkles,
  Bell,
  Lock,
} from "lucide-react";

export function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and features to manage your DeFi portfolio
              effectively
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={LineChart}
            title="Advanced Analytics"
            description="Track your portfolio performance with detailed charts and metrics"
          />
          <FeatureCard
            icon={Wallet}
            title="Multi-wallet Support"
            description="Connect and manage multiple wallets across different chains"
          />
          <FeatureCard
            icon={ArrowRightLeft}
            title="DeFi Integrations"
            description="Seamlessly interact with popular DeFi protocols"
          />
          <FeatureCard
            icon={Sparkles}
            title="AI Recommendations"
            description="Get personalized investment suggestions based on your portfolio"
          />
          <FeatureCard
            icon={Bell}
            title="Smart Alerts"
            description="Stay informed with customizable notifications and alerts"
          />
          <FeatureCard
            icon={Lock}
            title="Enhanced Security"
            description="Your security is our top priority with advanced protection measures"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:bg-primary/5">
        <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  );
}
