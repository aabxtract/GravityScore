import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bot, Gem } from 'lucide-react';
import AirdropChecker from '@/components/rewards/AirdropChecker';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
    },
  },
};

export default function RewardsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight">Rewards & Mints</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Claim airdrops and mint exclusive Gravity Orbs.
        </p>
      </motion.div>

      <motion.div
        className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card className="h-full flex flex-col shadow-lg hover:border-accent transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Bot className="w-7 h-7 text-accent" />
                Airdrop Eligibility Checker
              </CardTitle>
              <CardDescription>
                Use our AI-powered tool to check your airdrop eligibility using
                verifiable on-chain data.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <AirdropChecker />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="shadow-lg hover:border-primary transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Gem className="w-7 h-7 text-primary" />
                Mint Gravity Orbs
              </CardTitle>
              <CardDescription>
                As your mass grows, you unlock the ability to mint rare,
                evolving Gravity Orbs (ERC-721).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-muted/50 rounded-lg text-center">
                <p className="font-semibold">Next Milestone: Supergiant</p>
                <p className="text-3xl font-bold my-2 text-primary">10,000 Mass</p>
                <p className="text-sm text-muted-foreground">
                  You are 4,800 mass away from minting the Supergiant Orb.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg" disabled>
                Mint Supergiant Orb (Locked)
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
