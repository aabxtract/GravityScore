'use server';

/**
 * @fileOverview A tool to fairly randomize airdrops using Chainlink VRF, ensuring on-chain verifiability based on milestones met.
 *
 * - checkAirdropEligibility - A function that checks if a user is eligible for an airdrop based on verifiable randomness.
 * - CheckAirdropEligibilityInput - The input type for the checkAirdropEligibility function.
 * - CheckAirdropEligibilityOutput - The return type for the checkAirdropEligibility function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CheckAirdropEligibilityInputSchema = z.object({
  userAddress: z.string().describe('The address of the user to check for airdrop eligibility.'),
  milestoneId: z.string().describe('The ID of the milestone the user is attempting to meet.'),
  chainlinkVrfResponse: z.boolean().describe('The result from Chainlink VRF that determines randomness, true meaning airdrop succeeds.'),
});
export type CheckAirdropEligibilityInput = z.infer<typeof CheckAirdropEligibilityInputSchema>;

const CheckAirdropEligibilityOutputSchema = z.object({
  isEligible: z.boolean().describe('Whether the user is eligible for the airdrop based on the Chainlink VRF response.'),
});
export type CheckAirdropEligibilityOutput = z.infer<typeof CheckAirdropEligibilityOutputSchema>;

export async function checkAirdropEligibility(input: CheckAirdropEligibilityInput): Promise<CheckAirdropEligibilityOutput> {
  return checkAirdropEligibilityFlow(input);
}

const checkAirdropEligibilityPrompt = ai.definePrompt({
  name: 'checkAirdropEligibilityPrompt',
  input: {schema: CheckAirdropEligibilityInputSchema},
  output: {schema: CheckAirdropEligibilityOutputSchema},
  prompt: `You are an airdrop eligibility verification assistant.

You will check if a user is eligible for an airdrop based on whether they have met a specific milestone, and if the Chainlink VRF call was successful (true) or not (false).

Given the following information, determine if the user is eligible for the airdrop:

User Address: {{{userAddress}}}
Milestone ID: {{{milestoneId}}}
Chainlink VRF Response: {{{chainlinkVrfResponse}}}

If the Chainlink VRF Response is true, then the user is eligible.
If the Chainlink VRF Response is false, then the user is not eligible.

Return true or false in the isEligible output field.
`,
});

const checkAirdropEligibilityFlow = ai.defineFlow(
  {
    name: 'checkAirdropEligibilityFlow',
    inputSchema: CheckAirdropEligibilityInputSchema,
    outputSchema: CheckAirdropEligibilityOutputSchema,
  },
  async input => {
    const {output} = await checkAirdropEligibilityPrompt(input);
    return output!;
  }
);
