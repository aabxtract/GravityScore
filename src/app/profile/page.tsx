'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { currentUser } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { BarChart, Gift, Gem } from 'lucide-react';

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

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <Avatar className="h-24 w-24 border-4 border-accent">
            <AvatarImage src={`https://i.pravatar.cc/150?u=${currentUser.address}`} />
            <AvatarFallback className="text-3xl">
              {currentUser.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{currentUser.name}</h1>
            <p className="mt-1 text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md inline-block">
              {currentUser.address}
            </p>
          </div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          variants={itemVariants}
        >
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Mass</CardTitle>
              <Gem className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{currentUser.mass.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total accumulated mass</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Gravity Score</CardTitle>
              <BarChart className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{currentUser.gravityScore.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Your influence in the cosmos</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Gravity Orbs</CardTitle>
              <CardDescription>Collectible NFTs minted based on your mass milestones.</CardDescription>
            </CardHeader>
            <CardContent>
              {currentUser.orbs.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {currentUser.orbs.map(orb => (
                    <div key={orb.id} className="flex flex-col items-center gap-2 group">
                      <Image
                        data-ai-hint="abstract orb"
                        src={orb.imageUrl}
                        alt={orb.name}
                        width={100}
                        height={100}
                        className="rounded-full border-2 border-primary group-hover:border-accent transition-colors shadow-lg group-hover:shadow-accent/30"
                      />
                      <div className="text-center">
                        <p className="font-semibold">{orb.name}</p>
                        <p className="text-xs text-muted-foreground">Level {orb.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-4">No Gravity Orbs minted yet.</p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
           <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Claimed Rewards</CardTitle>
              <CardDescription>A history of rewards attracted by your gravity.</CardDescription>
            </CardHeader>
            <CardContent>
               {currentUser.rewards.length > 0 ? (
                <ul className="space-y-4">
                  {currentUser.rewards.map(reward => (
                    <li key={reward.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Gift className="w-5 h-5 text-accent" />
                        <div>
                          <p className="font-semibold">{reward.name}</p>
                          <Badge variant={reward.type === 'Token' ? 'default' : 'secondary'} className="text-xs">{reward.type}</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{reward.claimDate}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground text-center py-4">No rewards claimed yet.</p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
