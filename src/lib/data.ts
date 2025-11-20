import type { User, Action } from './types';

export const users: User[] = [
  {
    address: '0x1a2b3c4d5e6f7g8h9i0j',
    name: 'CosmoNaut',
    mass: 5200,
    gravityScore: 10400,
    orbs: [
      {
        id: 1,
        name: 'Genesis Orb',
        level: 3,
        imageUrl: 'https://picsum.photos/seed/orb1/200/200',
        mintDate: '2023-05-10',
      },
    ],
    rewards: [
      {
        id: 'rew1',
        name: '100 $GRAV',
        type: 'Token',
        claimDate: '2023-08-15',
      },
    ],
  },
  {
    address: '0x9j8h7g6f5e4d3c2b1a0',
    name: 'StardustSeeker',
    mass: 4100,
    gravityScore: 8200,
    orbs: [],
    rewards: [],
  },
  {
    address: '0xabcdef1234567890',
    name: 'Galaxian',
    mass: 3500,
    gravityScore: 7000,
    orbs: [
      {
        id: 2,
        name: 'Stellar Orb',
        level: 1,
        imageUrl: 'https://picsum.photos/seed/orb2/200/200',
        mintDate: '2023-09-01',
      },
    ],
    rewards: [],
  },
  {
    address: '0x0987654321fedcba',
    name: 'VoidWalker',
    mass: 2800,
    gravityScore: 5600,
    orbs: [],
    rewards: [],
  },
  {
    address: '0xfedcba9876543210',
    name: 'Supernova',
    mass: 6500,
    gravityScore: 13000,
    orbs: [],
    rewards: [],
  },
  {
    address: '0x1122334455667788',
    name: 'Comet',
    mass: 1500,
    gravityScore: 3000,
    orbs: [],
    rewards: [],
  },
  {
    address: '0x8877665544332211',
    name: 'Nebula',
    mass: 2200,
    gravityScore: 4400,
    orbs: [],
    rewards: [],
  },
  {
    address: '0xaabbccddeeff0011',
    name: 'Pulsar',
    mass: 3100,
    gravityScore: 6200,
    orbs: [],
    rewards: [],
  },
  {
    address: '0x2233445566778899',
    name: 'Quasar',
    mass: 4800,
    gravityScore: 9600,
    orbs: [],
    rewards: [],
  },
  {
    address: '0x9988776655443322',
    name: 'Blackhole',
    mass: 8900,
    gravityScore: 17800,
    orbs: [],
    rewards: [],
  },
];

export const currentUser = users[0];

export const actions: Action[] = [
  {
    id: 'post',
    name: 'Post Content',
    description: 'Share your thoughts and creations with the community.',
    massGained: 50,
  },
  {
    id: 'interact',
    name: 'Interact with a Post',
    description: 'Like, comment, or share posts to engage with others.',
    massGained: 10,
  },
  {
    id: 'stake',
    name: 'Stake $GRAV Tokens',
    description: 'Lock your tokens to increase your influence and earn rewards.',
    massGained: 200,
  },
  {
    id: 'login',
    name: 'Daily Login',
    description: 'Visit daily to maintain your presence in the cosmos.',
    massGained: 5,
  },
];
