'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { users } from '@/lib/data';
import type { User } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Orbit } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const Planet = ({ user }: { user: User }) => {
  const size = 40 + user.mass * 0.2;
  const animationDuration = 10 + Math.random() * 10;
  const delay = Math.random() * 5;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${Math.random() * 85}%`,
        top: `${Math.random() * 80}%`,
      }}
      animate={{
        y: ['0%', '5%', '0%', '-5%', '0%'],
        x: ['0%', '-3%', '0%', '3%', '0%'],
      }}
      transition={{
        duration: animationDuration,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
        delay,
      }}
    >
      <motion.div
        className="relative flex flex-col items-center group cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <div
          className="rounded-full bg-primary/30 flex items-center justify-center shadow-lg"
          style={{
            width: size,
            height: size,
            boxShadow: `0 0 ${size / 2}px hsl(var(--primary)), 0 0 ${
              size / 1.5
            }px hsl(var(--accent) / 0.5)`,
          }}
        >
          <Avatar
            style={{ width: size * 0.6, height: size * 0.6 }}
            className="border-2 border-accent"
          >
            <AvatarImage
              src={`https://i.pravatar.cc/150?u=${user.address}`}
            />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <motion.div className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <Badge variant="secondary">{user.name}</Badge>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const GravityMap = () => {
  return (
    <div className="relative w-full h-[500px] rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100/[0.05] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      {users.slice(0, 10).map((user) => (
        <Planet key={user.address} user={user} />
      ))}
      <div className="absolute top-4 left-4">
        <h3 className="text-lg font-semibold text-foreground/80 flex items-center gap-2"><Orbit className="h-5 w-5 text-accent"/> Gravity Map</h3>
      </div>
    </div>
  );
};

const Leaderboard = () => {
  const sortedUsers = [...users].sort(
    (a, b) => b.gravityScore - a.gravityScore
  );

  return (
    <Card className="bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Rank</TableHead>
              <TableHead>User</TableHead>
              <TableHead className="text-right">Gravity Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedUsers.slice(0, 5).map((user, index) => (
              <TableRow key={user.address}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={`https://i.pravatar.cc/150?u=${user.address}`}
                      />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-mono">
                  {user.gravityScore.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-500">
          Welcome to the Gravity Well
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Your actions create mass. Your mass generates gravity. Attract rewards
          from the cosmos.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <GravityMap />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Leaderboard />
        </motion.div>
      </motion.div>
    </div>
  );
}
