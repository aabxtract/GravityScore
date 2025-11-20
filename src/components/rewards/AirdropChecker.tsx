'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, XCircle, Loader, Sparkles } from 'lucide-react';
import { checkAirdropEligibility } from '@/ai/flows/airdrop-randomization-tool';
import { currentUser } from '@/lib/data';

const formSchema = z.object({
  userAddress: z.string().startsWith('0x', 'Must be a valid wallet address.'),
  milestoneId: z.string().min(1, 'Milestone ID is required.'),
  chainlinkVrfResponse: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

type EligibilityResult = {
  status: 'eligible' | 'ineligible';
  message: string;
} | null;

export default function AirdropChecker() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<EligibilityResult>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userAddress: currentUser.address,
      milestoneId: 'milestone-moon',
      chainlinkVrfResponse: true,
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);
    try {
      const eligibility = await checkAirdropEligibility(values);
      if (eligibility.isEligible) {
        setResult({
          status: 'eligible',
          message: 'Congratulations! You are eligible for this airdrop.',
        });
      } else {
        setResult({
          status: 'ineligible',
          message:
            'You are not eligible for this airdrop based on the verification.',
        });
      }
    } catch (error) {
      console.error('Eligibility check failed:', error);
      setResult({
        status: 'ineligible',
        message: 'An error occurred during verification. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="userAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Address</FormLabel>
                <FormControl>
                  <Input placeholder="0x..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="milestoneId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Milestone ID</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., milestone-mainnet-launch" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="chainlinkVrfResponse"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel>Chainlink VRF Response</FormLabel>
                  <FormDescription>
                    Simulate a successful (on) or failed (off) random roll.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <Loader className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Verify Eligibility
          </Button>
        </form>
      </Form>
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Alert
              variant={
                result.status === 'eligible' ? 'default' : 'destructive'
              }
              className={
                result.status === 'eligible'
                  ? 'bg-green-500/10 border-green-500/50'
                  : ''
              }
            >
              {result.status === 'eligible' ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <XCircle className="h-4 w-4" />
              )}
              <AlertTitle>
                {result.status === 'eligible'
                  ? 'Verification Successful'
                  : 'Verification Result'}
              </AlertTitle>
              <AlertDescription>{result.message}</AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
