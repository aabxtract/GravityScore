export interface User {
  address: string;
  name: string;
  mass: number;
  gravityScore: number;
  orbs: Orb[];
  rewards: Reward[];
}

export interface Action {
  id: string;
  name: string;
  description: string;
  massGained: number;
}

export interface Orb {
  id: number;
  name: string;
  level: number;
  imageUrl: string;
  mintDate: string;
}

export interface Reward {
  id: string;
  name: string;
  type: 'Token' | 'NFT' | 'Boost';
  claimDate: string;
}
