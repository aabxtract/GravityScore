Gravity Score is a Web3 dApp that turns your on-chain activity into a physics-based reputation model.
Every user action adds mass — and the more mass you accumulate, the stronger your gravity becomes.
Higher gravity increases your influence, pulls in random perks, and unlocks evolving collectible NFTs called Gravity Orbs.
This project blends gamified reputation, cosmic visualization, and on-chain mechanics to explore a new way of showing digital influence.

⭐ Core Concept
In Gravity Score:


Mass = activity


Gravity = influence


High Gravity = more rewards


Your presence literally becomes heavier in the system.
As you interact, your “planet” grows.
Inactive users slowly lose mass — making reputation dynamic and alive.

🚀 Features
🪐 1. Mass & Gravity Tracking


Every action (posting, staking, interacting, contributing) adds mass


Smart contract computes Gravity Score based on mass


Gravity updates dynamically


Optional mass decay for inactive users



🌟 2. Gravity Map Visualization
A live galaxy-style dashboard where:


Each user appears as a planet


Planet size = user mass


Glow intensity = Gravity Score


Users with high gravity create visual “pull fields”


Smooth animations and cosmic particles elevate the entire experience.

🎁 3. Rewards & Airdrops
High-gravity users attract:


Random token drops


Rare digital items


Chance-based rewards using randomness


Gravity Orbs — collectible, evolving NFTs


Rewards can be claimed based on thresholds or time intervals.

🔮 4. Gravity Orbs (NFTs)
Users mint NFTs that evolve based on their total mass:
Mass TierOrb StageVisual StyleLowDormant Orbdim, small glowMediumAscended Orbstronger glow, patternsHighGraviton Orbbright, pulsing animationsLegendarySingularity Orbrare, cosmic, fully animated
Art can be on-chain SVG or dynamic metadata.

📈 5. Leaderboard
A public ranking of:


Highest Gravity Score


Total mass earned


Top Orb holders


Fastest growth users



🛠️ Tech Stack
Smart Contract


Solidity


Hardhat


OpenZeppelin


Optional Chainlink VRF for random rewards


Frontend


Next.js


Tailwind CSS


Wagmi + Viem


Framer Motion animations


Backend (Optional)


Supabase / Firebase for off-chain events


CRON jobs for mass decay



📁 Project Structure
/contracts
  └── GravityScore.sol

/pages
  ├── index.tsx
  ├── profile.tsx
  ├── actions.tsx
  ├── rewards.tsx
  └── leaderboard.tsx

/components
  ├── Planet.tsx
  ├── GravityMap.tsx
  ├── RewardCard.tsx
  ├── OrbViewer.tsx
  └── Navbar.tsx

/utils
  ├── calculateGravity.ts
  └── decayLogic.ts


🚀 Getting Started
1. Install Dependencies
npm install

2. Start Local Dev Server
npm run dev

3. Compile Contracts
npx hardhat compile

4. Deploy to Testnet
npx hardhat run scripts/deploy.js --network sepolia

5. Add Environment Variables
Create .env.local:
NEXT_PUBLIC_CONTRACT_ADDRESS=xxx
NEXT_PUBLIC_RPC_URL=xxx


🧪 Testing
npx hardhat test


🔮 Future Upgrades


Social actions earning mass


Orb fusion (combine two Orbs into a higher tier)


3D orbital visualizer


Gravity-based governance power


AI-generated Orb art


Integration with multiple chains



📜 License
MIT License
