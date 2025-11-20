'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { actions } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      stiffness: 100,
    },
  },
};

export default function ActionsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight">Action Feed</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Perform actions to increase your mass and climb the leaderboard.
        </p>
      </motion.div>

      <motion.div
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {actions.map((action) => (
          <motion.div key={action.id} variants={itemVariants}>
            <Card className="h-full hover:border-accent transition-colors duration-300 shadow-lg hover:shadow-accent/20">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-semibold">{action.name}</CardTitle>
                <Star className="w-6 h-6 text-accent" />
              </CardHeader>
              <CardContent>
                <CardDescription>{action.description}</CardDescription>
                <div className="mt-4 font-semibold text-accent">
                  + {action.massGained} Mass
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
