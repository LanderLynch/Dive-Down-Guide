(function () {
  const assetPath = (path) => `./${path}`;
  const iconPath = (name) =>
    assetPath(`fish-icons/${name.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "")}.png`);

  const fishDatabase = [
    { zone: "Sunlight Zone", fish: "Goldfish", rarity: "Common", note: "Basic early-game catch in the first zone.", icon: iconPath("Goldfish") },
    { zone: "Sunlight Zone", fish: "Butterflyfish", rarity: "Rare", note: "Common low-depth rare spawn.", icon: iconPath("Butterflyfish") },
    { zone: "Sunlight Zone", fish: "Piranha", rarity: "Rare", note: "Low-zone rare fish.", icon: iconPath("Piranha") },
    { zone: "Sunlight Zone", fish: "Pufferfish", rarity: "Epic", note: "Early-zone epic catch.", icon: iconPath("Pufferfish") },
    { zone: "Sunlight Zone", fish: "Koi", rarity: "Epic", note: "Valuable early epic fish.", icon: iconPath("Koi") },
    { zone: "Sunlight Zone", fish: "Stingray", rarity: "Legendary", note: "High-value Divine path fish from the first biome set.", icon: iconPath("Stingray") },

    { zone: "Coral Reef", fish: "Clownfish", rarity: "Common", note: "Reliable early Coral Reef catch.", icon: iconPath("Clownfish") },
    { zone: "Coral Reef", fish: "Blue Tang", rarity: "Common", note: "Common reef fish for quick collection progress.", icon: iconPath("Blue Tang") },
    { zone: "Coral Reef", fish: "Lionfish", rarity: "Rare", note: "Required for Rebirth 2.", icon: iconPath("Lionfish") },
    { zone: "Coral Reef", fish: "Seahorse", rarity: "Epic", note: "Required for Rebirth 2.", icon: iconPath("Seahorse") },
    { zone: "Coral Reef", fish: "Bettafish", rarity: "Epic", note: "High-value reef catch.", icon: iconPath("Bettafish") },
    { zone: "Coral Reef", fish: "Turtle", rarity: "Legendary", note: "Legendary Coral Reef milestone fish.", icon: iconPath("Turtle") },
    { zone: "Coral Reef", fish: "Shark", rarity: "Legendary", note: "One of the strongest early predator catches.", icon: iconPath("Shark") },

    { zone: "Twilight Zone", fish: "Catfish", rarity: "Common", note: "Common Twilight catch.", icon: iconPath("Catfish") },
    { zone: "Twilight Zone", fish: "Bass", rarity: "Rare", note: "Reliable rare from this biome.", icon: iconPath("Bass") },
    { zone: "Twilight Zone", fish: "Salmon", rarity: "Rare", note: "Mid-tier Twilight collection fish.", icon: iconPath("Salmon") },
    { zone: "Twilight Zone", fish: "Swordfish", rarity: "Epic", note: "Strong progression catch before legendaries.", icon: iconPath("Swordfish") },
    { zone: "Twilight Zone", fish: "Eel", rarity: "Legendary", note: "Required for Rebirth 3.", icon: iconPath("Eel") },
    { zone: "Twilight Zone", fish: "Seal", rarity: "Legendary", note: "Required for Rebirth 3.", icon: iconPath("Seal") },
    { zone: "Twilight Zone", fish: "Jellyfish", rarity: "Mythical", note: "First biome where Mythical fish appear.", icon: iconPath("Jellyfish") },

    { zone: "Deep Ocean", fish: "Parrotfish", rarity: "Common", note: "Baseline Deep Ocean fish.", icon: iconPath("Parrotfish") },
    { zone: "Deep Ocean", fish: "Mahi-Mahi", rarity: "Rare", note: "Fast value catch in this biome.", icon: iconPath("Mahi-Mahi") },
    { zone: "Deep Ocean", fish: "Sunfish", rarity: "Rare", note: "Useful rare while farming the zone.", icon: iconPath("Sunfish") },
    { zone: "Deep Ocean", fish: "Tuna", rarity: "Epic", note: "Epic Deep Ocean fish with good value.", icon: iconPath("Tuna") },
    { zone: "Deep Ocean", fish: "Squid", rarity: "Legendary", note: "Legendary benchmark before Mythicals.", icon: iconPath("Squid") },
    { zone: "Deep Ocean", fish: "Hammerhead", rarity: "Mythical", note: "Required for Rebirth 4.", icon: iconPath("Hammerhead") },
    { zone: "Deep Ocean", fish: "Narwhal", rarity: "Mythical", note: "Required for Rebirth 4.", icon: iconPath("Narwhal") },

    { zone: "The Deep Dark", fish: "Shrimp", rarity: "Common", note: "Required for Rebirth 5.", icon: iconPath("Shrimp") },
    { zone: "The Deep Dark", fish: "Rockfish", rarity: "Rare", note: "Starter rare in The Deep Dark.", icon: iconPath("Rockfish") },
    { zone: "The Deep Dark", fish: "Slickhead", rarity: "Epic", note: "Epic fish for deeper progression.", icon: iconPath("Slickhead") },
    { zone: "The Deep Dark", fish: "Gulper Eel", rarity: "Legendary", note: "Legendary fish for late-game farming.", icon: iconPath("Gulper Eel") },
    { zone: "The Deep Dark", fish: "Blobfish", rarity: "Epic", note: "Strong Epic catch from this zone.", icon: iconPath("Blobfish") },
    { zone: "The Deep Dark", fish: "Anglerfish", rarity: "Mythical", note: "Required for Rebirth 5.", icon: iconPath("Anglerfish") },
    { zone: "The Deep Dark", fish: "Whale", rarity: "Secret", note: "Secret fish tied to this biome.", icon: iconPath("Whale") },

    { zone: "The Trenches", fish: "Telescopefish", rarity: "Common", note: "Common trenches fish for collection count.", icon: iconPath("Telescopefish") },
    { zone: "The Trenches", fish: "Macropinna", rarity: "Epic", note: "Popular Epic trenches catch.", icon: iconPath("Macropinna") },
    { zone: "The Trenches", fish: "Spinyfish", rarity: "Rare", note: "Rare trenches fish.", icon: iconPath("Spinyfish") },
    { zone: "The Trenches", fish: "Fangtooth", rarity: "Rare", note: "Rare predator catch in the biome.", icon: iconPath("Fangtooth") },
    { zone: "The Trenches", fish: "Hatchetfish", rarity: "Legendary", note: "Legendary trenches milestone fish.", icon: iconPath("Hatchetfish") },
    { zone: "The Trenches", fish: "Lizardfish", rarity: "Epic", note: "Epic fish from the trenches set.", icon: iconPath("Lizardfish") },
    { zone: "The Trenches", fish: "Snailfish", rarity: "Legendary", note: "Important legendary for endgame farming.", icon: iconPath("Snailfish") },
    { zone: "The Trenches", fish: "Whalefish", rarity: "Mythical", note: "Required for Rebirth 6.", icon: iconPath("Whalefish") },

    { zone: "Atlantis", fish: "Crabfish", rarity: "Common", note: "Common Atlantis catch.", icon: iconPath("Crabfish") },
    { zone: "Atlantis", fish: "Cloudfish", rarity: "Epic", note: "Epic Atlantis fish.", icon: iconPath("Cloudfish") },
    { zone: "Atlantis", fish: "Polkafish", rarity: "Rare", note: "Rare fish from Atlantis.", icon: iconPath("Polkafish") },
    { zone: "Atlantis", fish: "Rubyfish", rarity: "Mythical", note: "Mythical Atlantis grind target.", icon: iconPath("Rubyfish") },
    { zone: "Atlantis", fish: "Pebblefish", rarity: "Legendary", note: "Legendary catch before Divine farming.", icon: iconPath("Pebblefish") },
    { zone: "Atlantis", fish: "Peeber", rarity: "Secret", note: "Secret Atlantis fish.", icon: iconPath("Peeber") },
    { zone: "Atlantis", fish: "Mermaid", rarity: "Divine", note: "Spawns in Atlantis after you catch enough fish there. Increase your luck by buying Luck in the shop.", icon: iconPath("Mermaid") },

    { zone: "Aqua Forest", fish: "Kelpy", rarity: "Common", note: "Common catch in Aqua Forest.", icon: iconPath("Kelpy") },
    { zone: "Aqua Forest", fish: "Muncher", rarity: "Rare", note: "Rare Aqua Forest fish.", icon: iconPath("Muncher") },
    { zone: "Aqua Forest", fish: "Fernback", rarity: "Rare", note: "Rare forest biome fish.", icon: iconPath("Fernback") },
    { zone: "Aqua Forest", fish: "Paddleleaf", rarity: "Epic", note: "Epic Aqua Forest catch.", icon: iconPath("Paddleleaf") },
    { zone: "Aqua Forest", fish: "Shroomster", rarity: "Legendary", note: "Legendary fish from the forest biome.", icon: iconPath("Shroomster") },
    { zone: "Aqua Forest", fish: "Weerfish", rarity: "Mythical", note: "High-value Mythical from Aqua Forest.", icon: iconPath("Weerfish") },
    { zone: "Aqua Forest", fish: "Grooty", rarity: "Secret", note: "Secret Aqua Forest fish and Rebirth 8 target.", icon: iconPath("Grooty") },

    { zone: "Shell Reef", fish: "Nautilus", rarity: "Common", note: "Common shell biome fish.", icon: iconPath("Nautilus") },
    { zone: "Shell Reef", fish: "Shellfin", rarity: "Common", note: "Common Shell Reef collection fish.", icon: iconPath("Shellfin") },
    { zone: "Shell Reef", fish: "Whorlig", rarity: "Rare", note: "Rare Shell Reef fish.", icon: iconPath("Whorlig") },
    { zone: "Shell Reef", fish: "Snailshell", rarity: "Epic", note: "Epic shell biome catch.", icon: iconPath("Snailshell") },
    { zone: "Shell Reef", fish: "Twistopus", rarity: "Legendary", note: "Legendary Shell Reef fish.", icon: iconPath("Twistopus") },
    { zone: "Shell Reef", fish: "Yapclam", rarity: "Mythical", note: "Mythical Shell Reef grind target.", icon: iconPath("Yapclam") },
    { zone: "Shell Reef", fish: "Unishell", rarity: "Divine", note: "Spawns in Shell Reef after you catch enough fish there. Increase your luck by buying Luck in the shop.", icon: iconPath("Unishell") },

    { zone: "Kraken World", fish: "Skelfin", rarity: "Common", note: "Base fish for Kraken World farming.", icon: iconPath("Skelfin") },
    { zone: "Kraken World", fish: "Bitey", rarity: "Rare", note: "Rare Kraken World fish.", icon: iconPath("Bitey") },
    { zone: "Kraken World", fish: "Riffjaw", rarity: "Epic", note: "Epic catch from Kraken World.", icon: iconPath("Riffjaw") },
    { zone: "Kraken World", fish: "Slimer", rarity: "Legendary", note: "Legendary Kraken World fish.", icon: iconPath("Slimer") },
    { zone: "Kraken World", fish: "Globby", rarity: "Legendary", note: "Late-game legendary catch.", icon: iconPath("Globby") },
    { zone: "Kraken World", fish: "Licklid", rarity: "Mythical", note: "Required for Rebirth 10.", icon: iconPath("Licklid") },
    { zone: "Kraken World", fish: "Shoober", rarity: "Secret", note: "Required for Rebirth 10.", icon: iconPath("Shoober") },

    { zone: "Megalodon's Lair", fish: "Bull Shark", rarity: "Epic", note: "Aggressive shark catch from the lair.", icon: iconPath("Bull Shark") },
    { zone: "Megalodon's Lair", fish: "Tiger Shark", rarity: "Epic", note: "Powerful Epic shark from the lair pool.", icon: iconPath("Tiger Shark") },
    { zone: "Megalodon's Lair", fish: "Whale Shark", rarity: "Epic", note: "Large Epic shark catch from Megalodon's Lair.", icon: iconPath("Whale Shark") },
    { zone: "Megalodon's Lair", fish: "Great White Shark", rarity: "Mythical", note: "Top predator catch in Megalodon's Lair.", icon: iconPath("Great White Shark") },
    { zone: "Megalodon's Lair", fish: "Thresher Shark", rarity: "Mythical", note: "High-tier shark from Megalodon's Lair.", icon: iconPath("Thresher Shark") },

    { zone: "The Arctic", fish: "Otter", rarity: "Epic", note: "Epic Ice Age catch.", icon: iconPath("Otter") },
    { zone: "The Arctic", fish: "Penguin", rarity: "Epic", note: "Epic cold-zone catch from The Arctic.", icon: iconPath("Penguin") },
    { zone: "The Arctic", fish: "Beluga Whale", rarity: "Legendary", note: "Legendary whale from the frozen biome.", icon: iconPath("Beluga Whale") },
    { zone: "The Arctic", fish: "Walrus", rarity: "Legendary", note: "Legendary Arctic fish pool entry.", icon: iconPath("Walrus") },
    { zone: "The Arctic", fish: "Orca", rarity: "Mythical", note: "Mythical predator from The Arctic.", icon: iconPath("Orca") },
    { zone: "The Arctic", fish: "Blue Whale", rarity: "Secret", note: "Secret Arctic catch.", icon: iconPath("Blue Whale") },
    { zone: "The Arctic", fish: "Polar Bear", rarity: "Secret", note: "Secret Arctic catch from the frozen biome.", icon: iconPath("Polar Bear") },

    { zone: "OP Kraken Egg Fish", fish: "Bobble Kraken", rarity: "Mythical", note: "Robux shop or quest egg fish.", icon: iconPath("Bobble Kraken") },
    { zone: "OP Kraken Egg Fish", fish: "Puddle Kraken", rarity: "Mythical", note: "Robux shop or quest egg fish.", icon: iconPath("Puddle Kraken") },
    { zone: "OP Kraken Egg Fish", fish: "Tangle Kraken", rarity: "Secret", note: "Rare Kraken egg special fish.", icon: iconPath("Tangle Kraken") },
    { zone: "OP Kraken Egg Fish", fish: "Sentinel Kraken", rarity: "Secret", note: "High-tier Kraken egg special fish.", icon: iconPath("Sentinel Kraken") },
    { zone: "OP Kraken Egg Fish", fish: "Crown Kraken", rarity: "Divine", note: "Top-tier Divine fish from the Kraken egg pool.", icon: iconPath("Crown Kraken") },

    { zone: "Limited", fish: "Cake Fish", rarity: "Limited", note: "Daily Fish Event reward. Event ended.", icon: iconPath("Cake Fish") },
    { zone: "Limited", fish: "Gift Fish", rarity: "Limited", note: "Daily Fish Event reward. Event ended.", icon: iconPath("Gift Fish") },
    { zone: "Limited", fish: "Heart Fish", rarity: "Limited", note: "Daily Fish Event reward. Event ended.", icon: iconPath("Heart Fish") },
    { zone: "Limited", fish: "Partybottle Fish", rarity: "Limited", note: "Daily Fish Event reward. Event ended.", icon: iconPath("Partybottle Fish") },
    { zone: "Limited", fish: "Partyhat Fish", rarity: "Limited", note: "Daily Fish Event reward. Event ended.", icon: iconPath("Partyhat Fish") },
    { zone: "Limited", fish: "Wheel Fish", rarity: "Limited", note: "Obtained from Wheel Spins.", icon: iconPath("Wheel Fish") },
    { zone: "Limited", fish: "UsernameFish", rarity: "Limited", note: "Admin Abuse exclusive fish.", icon: iconPath("UsernameFish") },
  ];

  const galleryImages = [
    { src: assetPath("photos/2a909-17718318971280-1920.webp"), alt: "Dive Down gameplay screenshot" },
    { src: assetPath("photos/noFilter.webp"), alt: "Dive Down underwater zone screenshot" },
    { src: assetPath("photos/noFilter (1).webp"), alt: "Dive Down fish database screenshot" },
  ];

  const mutationGroups = [
    {
      title: "Ocean Mutation",
      items: [
        { name: "Rainbow", val: "3.0x" },
        { name: "Gold", val: "2.7x" },
        { name: "Silver", val: "2.4x" },
        { name: "Normal", val: "1.0x" },
      ],
    },
    {
      title: "Weather Mutation",
      items: [
        { name: "Evil", val: "2.8x" },
        { name: "Magma", val: "2.5x" },
        { name: "Infected", val: "2.3x" },
        { name: "Chocolate", val: "2.2x" },
        { name: "Shocked", val: "1.9x" },
        { name: "Frozen", val: "1.5x" },
        { name: "Dry", val: "1.1x" },
      ],
    },
  ];

  const quickLinks = [
    { label: "Fish Database", description: "Browse all fish by zone.", target: "database" },
    { label: "Zones", description: "Jump through every biome section.", target: "database" },
    { label: "Mutations", description: "See current mutation multipliers.", target: "database" },
    { label: "Rebirth Guide", description: "Open the rebirth requirements page.", page: "rebirth" },
    { label: "Tips and Tricks", description: "Quick route and grinding advice.", target: "tips" },
    { label: "FAQ", description: "Common questions and answers.", target: "faq" },
  ];

  const tips = [
    {
      title: "Zone Farming",
      text: "Farm by zone instead of diving randomly. Each biome has its own fish pool, so targeted runs are much more efficient.",
    },
    {
      title: "Check Rarity Conflicts",
      text: "When sources disagree, verify the fish in-game before planning a long grind around it.",
    },
    {
      title: "Late-Game Route",
      text: "Push upgrades before farming Deep Dark, Trenches, Atlantis, Shell Reef, and Kraken World.",
    },
  ];

  const faqItems = [
    {
      q: "When do Secrets and Divines spawn?",
      a: "Secret spawns are completely random. Catching fish in that area increases the chance of a Secret or Divine appearing.",
    },
    {
      q: "Is there a cooldown on Secret or Divine spawns?",
      a: "No, there is no cooldown timer for Secret or Divine fish to spawn.",
    },
    {
      q: "Will I lose all my fish or money if I rebirth?",
      a: "No. You only lose the money and fish required for that rebirth tier.",
    },
    {
      q: "When is Admin Abuse?",
      a: "Admin abuse happens before updates and is usually announced in the community Discord.",
    },
    {
      q: "Do mutations stack?",
      a: "No. Fish can only have one mutation at a time.",
    },
    {
      q: "Can I trade fish?",
      a: "Trading is not currently in the game.",
    },
    {
      q: "Why have I not received my group reward fish yet?",
      a: "Group rewards can take a few minutes to arrive.",
    },
    {
      q: "Are there any codes for Dive Down?",
      a: "There are currently no codes.",
    },
    {
      q: "How do I get more Secrets to spawn?",
      a: "Catching fish rapidly in the area you want improves the chance of Secrets appearing there.",
    },
  ];

  const rebirthTips = [
    {
      title: "No Full Reset",
      text: "Rebirth does not reset your whole account. It only consumes the fish and money required for that tier.",
    },
    {
      title: "Permanent Perks",
      text: "Every rebirth increases swim speed, backpack space, and your cash multiplier.",
    },
    {
      title: "Plan Ahead",
      text: "Save required fish before selling them so you can chain rebirths more efficiently.",
    },
  ];

  const rebirthData = [
    { tier: "Rebirth 1", badge: "R1", money: "$5,000", fish: ["Goldfish"], rewards: ["+1 Swim Speed", "+5 Backpack Space", "+0.10x Cash Multiplier"] },
    { tier: "Rebirth 2", badge: "R2", money: "$50,000", fish: ["Lionfish", "Seahorse"], rewards: ["+1 Swim Speed", "+5 Backpack Space", "+0.15x Cash Multiplier"] },
    { tier: "Rebirth 3", badge: "R3", money: "$500,000", fish: ["Eel", "Seal"], rewards: ["+2 Swim Speed", "+10 Backpack Space", "+0.15x Cash Multiplier"] },
    { tier: "Rebirth 4", badge: "R4", money: "$10,000,000", fish: ["Hammerhead", "Narwhal"], rewards: ["+2 Swim Speed", "+10 Backpack Space", "+0.20x Cash Multiplier"] },
    { tier: "Rebirth 5", badge: "R5", money: "$100,000,000", fish: ["Shrimp", "Anglerfish"], rewards: ["+2 Swim Speed", "+15 Backpack Space", "+0.20x Cash Multiplier"] },
    { tier: "Rebirth 6", badge: "R6", money: "$500,000,000", fish: ["Whalefish"], rewards: ["+3 Swim Speed", "+15 Backpack Space", "+0.25x Cash Multiplier"] },
    { tier: "Rebirth 7", badge: "R7", money: "$2,500,000,000", fish: ["Mermaid"], rewards: ["+3 Swim Speed", "+20 Backpack Space", "+0.25x Cash Multiplier"] },
    { tier: "Rebirth 8", badge: "R8", money: "$10,000,000,000", fish: ["Weerfish", "Grooty"], rewards: ["+4 Swim Speed", "+30 Backpack Space", "+0.30x Cash Multiplier"] },
    { tier: "Rebirth 9", badge: "R9", money: "$50,000,000,000", fish: ["Unishell"], rewards: ["+4 Swim Speed", "+40 Backpack Space", "+0.30x Cash Multiplier"] },
    { tier: "Rebirth 10", badge: "R10", money: "$500,000,000,000", fish: ["Licklid", "Shoober"], rewards: ["+6 Swim Speed", "+75 Backpack Space", "+0.35x Cash Multiplier"] },
  ];

  const rebirthTotals = [
    { label: "Swim Speed", value: "+28" },
    { label: "Backpack Space", value: "+225" },
    { label: "Cash Multiplier", value: "+2.25x" },
  ];

  const slugify = (value) =>
    value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const getFishEntryId = (entry) => `${slugify(entry.zone)}-${slugify(entry.fish)}`;

  const getGroupedZones = () =>
    fishDatabase.reduce((zones, entry) => {
      if (!zones[entry.zone]) {
        zones[entry.zone] = [];
      }
      zones[entry.zone].push(entry);
      return zones;
    }, {});

  const findFish = (name) => {
    const loweredName = name.toLowerCase();
    return fishDatabase.find((entry) => entry.fish.toLowerCase() === loweredName) || null;
  };

  window.DiveDownData = {
    fishDatabase,
    galleryImages,
    mutationGroups,
    quickLinks,
    tips,
    faqItems,
    rebirthTips,
    rebirthData,
    rebirthTotals,
    slugify,
    getFishEntryId,
    getGroupedZones,
    findFish,
  };
})();
