import { getPublicAssetPath } from "@/lib/publicAsset";

const iconPath = (name) =>
  getPublicAssetPath(
    `fish-icons/${name.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "")}.png`,
  );

export const fishDatabase = [
  // Sunlight Zone
  { zone: "Sunlight Zone", fish: "Goldfish", rarity: "Common", note: "Basic early-game catch in the first zone.", icon: iconPath("Goldfish") },
  { zone: "Sunlight Zone", fish: "Butterflyfish", rarity: "Rare", note: "Common low-depth rare spawn.", icon: iconPath("Butterflyfish") },
  { zone: "Sunlight Zone", fish: "Piranha", rarity: "Rare", note: "Low-zone rare fish.", icon: iconPath("Piranha") },
  { zone: "Sunlight Zone", fish: "Pufferfish", rarity: "Epic", note: "Early-zone epic catch.", icon: iconPath("Pufferfish") },
  { zone: "Sunlight Zone", fish: "Koi", rarity: "Epic", note: "Valuable early epic fish.", icon: iconPath("Koi") },
  { zone: "Sunlight Zone", fish: "Stingray", rarity: "Legendary", note: "High-value Divine path fish from the first biome set.", icon: iconPath("Stingray") },

  // Coral Reef
  { zone: "Coral Reef", fish: "Clownfish", rarity: "Common", note: "Reliable early Coral Reef catch.", icon: iconPath("Clownfish") },
  { zone: "Coral Reef", fish: "Blue Tang", rarity: "Common", note: "Common reef fish for quick collection progress.", icon: iconPath("Blue Tang") },
  { zone: "Coral Reef", fish: "Lionfish", rarity: "Rare", note: "Required for Rebirth 2.", icon: iconPath("Lionfish") },
  { zone: "Coral Reef", fish: "Seahorse", rarity: "Epic", note: "Required for Rebirth 2.", icon: iconPath("Seahorse") },
  { zone: "Coral Reef", fish: "Bettafish", rarity: "Epic", note: "High-value reef catch.", icon: iconPath("Bettafish") },
  { zone: "Coral Reef", fish: "Turtle", rarity: "Legendary", note: "Legendary Coral Reef milestone fish.", icon: iconPath("Turtle") },
  { zone: "Coral Reef", fish: "Shark", rarity: "Legendary", note: "One of the strongest early predator catches.", icon: iconPath("Shark") },

  // Twilight Zone
  { zone: "Twilight Zone", fish: "Catfish", rarity: "Common", note: "Common Twilight catch.", icon: iconPath("Catfish") },
  { zone: "Twilight Zone", fish: "Bass", rarity: "Rare", note: "Reliable rare from this biome.", icon: iconPath("Bass") },
  { zone: "Twilight Zone", fish: "Salmon", rarity: "Rare", note: "Mid-tier Twilight collection fish.", icon: iconPath("Salmon") },
  { zone: "Twilight Zone", fish: "Swordfish", rarity: "Epic", note: "Strong progression catch before legendaries.", icon: iconPath("Swordfish") },
  { zone: "Twilight Zone", fish: "Eel", rarity: "Legendary", note: "Required for Rebirth 3.", icon: iconPath("Eel") },
  { zone: "Twilight Zone", fish: "Seal", rarity: "Legendary", note: "Required for Rebirth 3.", icon: iconPath("Seal") },
  { zone: "Twilight Zone", fish: "Jellyfish", rarity: "Mythical", note: "First biome where Mythical fish appear.", icon: iconPath("Jellyfish") },

  // Deep Ocean
  { zone: "Deep Ocean", fish: "Parrotfish", rarity: "Common", note: "Baseline Deep Ocean fish.", icon: iconPath("Parrotfish") },
  { zone: "Deep Ocean", fish: "Mahi-Mahi", rarity: "Rare", note: "Fast value catch in this biome.", icon: iconPath("Mahi-Mahi") },
  { zone: "Deep Ocean", fish: "Sunfish", rarity: "Rare", note: "Useful rare while farming the zone.", icon: iconPath("Sunfish") },
  { zone: "Deep Ocean", fish: "Tuna", rarity: "Epic", note: "Epic Deep Ocean fish with good value.", icon: iconPath("Tuna") },
  { zone: "Deep Ocean", fish: "Squid", rarity: "Legendary", note: "Legendary benchmark before Mythicals.", icon: iconPath("Squid") },
  { zone: "Deep Ocean", fish: "Hammerhead", rarity: "Mythical", note: "Required for Rebirth 4.", icon: iconPath("Hammerhead") },
  { zone: "Deep Ocean", fish: "Narwhal", rarity: "Mythical", note: "Required for Rebirth 4.", icon: iconPath("Narwhal") },

  // The Deep Dark
  { zone: "The Deep Dark", fish: "Shrimp", rarity: "Common", note: "Required for Rebirth 5.", icon: iconPath("Shrimp") },
  { zone: "The Deep Dark", fish: "Rockfish", rarity: "Rare", note: "Starter rare in The Deep Dark.", icon: iconPath("Rockfish") },
  { zone: "The Deep Dark", fish: "Slickhead", rarity: "Epic", note: "Epic fish for deeper progression.", icon: iconPath("Slickhead") },
  { zone: "The Deep Dark", fish: "Gulper Eel", rarity: "Legendary", note: "Legendary fish for late-game farming.", icon: iconPath("Gulper Eel") },
  { zone: "The Deep Dark", fish: "Blobfish", rarity: "Epic", note: "Strong Epic catch from this zone.", icon: iconPath("Blobfish") },
  { zone: "The Deep Dark", fish: "Anglerfish", rarity: "Mythical", note: "Required for Rebirth 5.", icon: iconPath("Anglerfish") },
  { zone: "The Deep Dark", fish: "Whale", rarity: "Secret", note: "Secret fish tied to this biome.", icon: iconPath("Whale") },

  // The Trenches
  { zone: "The Trenches", fish: "Telescopefish", rarity: "Common", note: "Common trenches fish for collection count.", icon: iconPath("Telescopefish") },
  { zone: "The Trenches", fish: "Macropinna", rarity: "Epic", note: "Popular Epic trenches catch.", icon: iconPath("Macropinna") },
  { zone: "The Trenches", fish: "Spinyfish", rarity: "Rare", note: "Rare trenches fish.", icon: iconPath("Spinyfish") },
  { zone: "The Trenches", fish: "Fangtooth", rarity: "Rare", note: "Rare predator catch in the biome.", icon: iconPath("Fangtooth") },
  { zone: "The Trenches", fish: "Hatchetfish", rarity: "Legendary", note: "Legendary trenches milestone fish.", icon: iconPath("Hatchetfish") },
  { zone: "The Trenches", fish: "Lizardfish", rarity: "Epic", note: "Epic fish from the trenches set.", icon: iconPath("Lizardfish") },
  { zone: "The Trenches", fish: "Snailfish", rarity: "Legendary", note: "Important legendary for endgame farming.", icon: iconPath("Snailfish") },
  { zone: "The Trenches", fish: "Whalefish", rarity: "Mythical", note: "Required for Rebirth 6.", icon: iconPath("Whalefish") },

  // Atlantis
  { zone: "Atlantis", fish: "Crabfish", rarity: "Common", note: "Common Atlantis catch.", icon: iconPath("Crabfish") },
  { zone: "Atlantis", fish: "Cloudfish", rarity: "Epic", note: "Epic Atlantis fish.", icon: iconPath("Cloudfish") },
  { zone: "Atlantis", fish: "Polkafish", rarity: "Rare", note: "Rare fish from Atlantis.", icon: iconPath("Polkafish") },
  { zone: "Atlantis", fish: "Rubyfish", rarity: "Mythical", note: "Mythical Atlantis grind target.", icon: iconPath("Rubyfish") },
  { zone: "Atlantis", fish: "Pebblefish", rarity: "Legendary", note: "Legendary catch before Divine farming.", icon: iconPath("Pebblefish") },
  { zone: "Atlantis", fish: "Peeber", rarity: "Secret", note: "Secret Atlantis fish.", icon: iconPath("Peeber") },
  { zone: "Atlantis", fish: "Mermaid", rarity: "Divine", note: "Spawns in Atlantis after you catch enough fish there. Increase your luck by buying Luck in the shop.", icon: iconPath("Mermaid") },

  // Aqua Forest
  { zone: "Aqua Forest", fish: "Kelpy", rarity: "Common", note: "Common catch in Aqua Forest.", icon: iconPath("Kelpy") },
  { zone: "Aqua Forest", fish: "Muncher", rarity: "Rare", note: "Rare Aqua Forest fish.", icon: iconPath("Muncher") },
  { zone: "Aqua Forest", fish: "Fernback", rarity: "Rare", note: "Rare forest biome fish.", icon: iconPath("Fernback") },
  { zone: "Aqua Forest", fish: "Paddleleaf", rarity: "Epic", note: "Epic Aqua Forest catch.", icon: iconPath("Paddleleaf") },
  { zone: "Aqua Forest", fish: "Shroomster", rarity: "Legendary", note: "Legendary fish from the forest biome.", icon: iconPath("Shroomster") },
  { zone: "Aqua Forest", fish: "Weerfish", rarity: "Mythical", note: "High-value Mythical from Aqua Forest.", icon: iconPath("Weerfish") },
  { zone: "Aqua Forest", fish: "Grooty", rarity: "Secret", note: "Secret Aqua Forest fish and Rebirth 8 target.", icon: iconPath("Grooty") },

  // Shell Reef
  { zone: "Shell Reef", fish: "Nautilus", rarity: "Common", note: "Common shell biome fish.", icon: iconPath("Nautilus") },
  { zone: "Shell Reef", fish: "Shellfin", rarity: "Common", note: "Common Shell Reef collection fish.", icon: iconPath("Shellfin") },
  { zone: "Shell Reef", fish: "Whorlig", rarity: "Rare", note: "Rare Shell Reef fish.", icon: iconPath("Whorlig") },
  { zone: "Shell Reef", fish: "Snailshell", rarity: "Epic", note: "Epic shell biome catch.", icon: iconPath("Snailshell") },
  { zone: "Shell Reef", fish: "Twistopus", rarity: "Legendary", note: "Legendary Shell Reef fish.", icon: iconPath("Twistopus") },
  { zone: "Shell Reef", fish: "Yapclam", rarity: "Mythical", note: "Mythical Shell Reef grind target.", icon: iconPath("Yapclam") },
  { zone: "Shell Reef", fish: "Unishell", rarity: "Divine", note: "Spawns in Shell Reef after you catch enough fish there. Increase your luck by buying Luck in the shop.", icon: iconPath("Unishell") },

  // Kraken World
  { zone: "Kraken World", fish: "Skelfin", rarity: "Common", note: "Base fish for Kraken World farming.", icon: iconPath("Skelfin") },
  { zone: "Kraken World", fish: "Bitey", rarity: "Rare", note: "Rare Kraken World fish.", icon: iconPath("Bitey") },
  { zone: "Kraken World", fish: "Riffjaw", rarity: "Epic", note: "Epic catch from Kraken World.", icon: iconPath("Riffjaw") },
  { zone: "Kraken World", fish: "Slimer", rarity: "Legendary", note: "Legendary Kraken World fish.", icon: iconPath("Slimer") },
  { zone: "Kraken World", fish: "Globby", rarity: "Legendary", note: "Late-game legendary catch.", icon: iconPath("Globby") },
  { zone: "Kraken World", fish: "Licklid", rarity: "Mythical", note: "Required for Rebirth 10.", icon: iconPath("Licklid") },
  { zone: "Kraken World", fish: "Shoober", rarity: "Secret", note: "Required for Rebirth 10.", icon: iconPath("Shoober") },

  // Megalodon's Lair
  { zone: "Megalodon's Lair", fish: "Bull Shark", rarity: "Epic", note: "Aggressive shark catch from the lair.", icon: iconPath("Bull Shark") },
  { zone: "Megalodon's Lair", fish: "Tiger Shark", rarity: "Epic", note: "Powerful Epic shark from the lair pool.", icon: iconPath("Tiger Shark") },
  { zone: "Megalodon's Lair", fish: "Whale Shark", rarity: "Epic", note: "Large Epic shark catch from Megalodon's Lair.", icon: iconPath("Whale Shark") },
  { zone: "Megalodon's Lair", fish: "Great White Shark", rarity: "Mythical", note: "Top predator catch in Megalodon's Lair.", icon: iconPath("Great White Shark") },
  { zone: "Megalodon's Lair", fish: "Thresher Shark", rarity: "Mythical", note: "High-tier shark from Megalodon's Lair.", icon: iconPath("Thresher Shark") },

  // The Arctic
  { zone: "The Arctic", fish: "Otter", rarity: "Epic", note: "Epic Ice Age catch.", icon: iconPath("Otter") },
  { zone: "The Arctic", fish: "Penguin", rarity: "Epic", note: "Epic cold-zone catch from The Arctic.", icon: iconPath("Penguin") },
  { zone: "The Arctic", fish: "Beluga Whale", rarity: "Legendary", note: "Legendary whale from the frozen biome.", icon: iconPath("Beluga Whale") },
  { zone: "The Arctic", fish: "Walrus", rarity: "Legendary", note: "Legendary Arctic fish pool entry.", icon: iconPath("Walrus") },
  { zone: "The Arctic", fish: "Orca", rarity: "Mythical", note: "Mythical predator from The Arctic.", icon: iconPath("Orca") },
  { zone: "The Arctic", fish: "Blue Whale", rarity: "Secret", note: "Secret Arctic catch.", icon: iconPath("Blue Whale") },
  { zone: "The Arctic", fish: "Polar Bear", rarity: "Secret", note: "Secret Arctic catch from the frozen biome.", icon: iconPath("Polar Bear") },

  // OP Kraken Egg Fish
  { zone: "OP Kraken Egg Fish", fish: "Bobble Kraken", rarity: "Mythical", note: "Robux shop or quest egg fish.", icon: iconPath("Bobble Kraken") },
  { zone: "OP Kraken Egg Fish", fish: "Puddle Kraken", rarity: "Mythical", note: "Robux shop or quest egg fish.", icon: iconPath("Puddle Kraken") },
  { zone: "OP Kraken Egg Fish", fish: "Tangle Kraken", rarity: "Secret", note: "Rare Kraken egg special fish.", icon: iconPath("Tangle Kraken") },
  { zone: "OP Kraken Egg Fish", fish: "Sentinel Kraken", rarity: "Secret", note: "High-tier Kraken egg special fish.", icon: iconPath("Sentinel Kraken") },
  { zone: "OP Kraken Egg Fish", fish: "Crown Kraken", rarity: "Divine", note: "Top-tier Divine fish from the Kraken egg pool.", icon: iconPath("Crown Kraken") },

  // Limited
  { zone: "Limited", fish: "Cake Fish", rarity: "Limited", note: "Daily Fish Event reward. Event ended.", icon: iconPath("Cake Fish") },
  { zone: "Limited", fish: "Gift Fish", rarity: "Limited", note: "Daily Fish Event reward. Event ended.", icon: iconPath("Gift Fish") },
  { zone: "Limited", fish: "Heart Fish", rarity: "Limited", note: "Daily Fish Event reward. Event ended.", icon: iconPath("Heart Fish") },
  { zone: "Limited", fish: "Partybottle Fish", rarity: "Limited", note: "Daily Fish Event reward. Event ended.", icon: iconPath("Partybottle Fish") },
  { zone: "Limited", fish: "Partyhat Fish", rarity: "Limited", note: "Daily Fish Event reward. Event ended.", icon: iconPath("Partyhat Fish") },
  { zone: "Limited", fish: "Wheel Fish", rarity: "Limited", note: "Obtained from Wheel Spins.", icon: iconPath("Wheel Fish") },
  { zone: "Limited", fish: "UsernameFish", rarity: "Limited", note: "Admin Abuse exclusive fish.", icon: iconPath("UsernameFish") },
];

export const galleryImages = [
  { src: getPublicAssetPath("photos/2a909-17718318971280-1920.webp"), alt: "Dive Down gameplay screenshot" },
  { src: getPublicAssetPath("photos/noFilter.webp"), alt: "Dive Down underwater zone screenshot" },
  { src: getPublicAssetPath("photos/noFilter (1).webp"), alt: "Dive Down fish database screenshot" }
];

export const specialZones = new Set(["OP Kraken Egg Fish", "Limited"]);

export const slugify = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const getFishEntryId = (entry) => `${slugify(entry.zone)}-${slugify(entry.fish)}`;

export const getGroupedZones = () => {
  return fishDatabase.reduce((zones, entry) => {
    if (!zones[entry.zone]) zones[entry.zone] = [];
    zones[entry.zone].push(entry);
    return zones;
  }, {});
};
