import { Fish, Waves, Lightning, ArrowsClockwise, Question } from "@phosphor-icons/react";
import { getPublicAssetPath } from "@/lib/publicAsset";

export const heroContent = {
  eyebrow: "Offline-ready fish database",
  title: "Dive Down Guide",
  description:
    "Track every known biome catch from Sunlight Zone to Kraken World and plan your next deep-sea farming route with data stored directly in the site.",
  backgroundImage: getPublicAssetPath("photos/noFilter.webp"),
};

export const rebirthHeroContent = {
  eyebrow: "Permanent progression",
  title: "Rebirth Guide",
  description:
    "Rebirthing in Dive Down gives permanent upgrades without wiping your overall progress. You keep your money, gear, and fish outside of the fish and money consumed by each rebirth requirement.",
  backgroundImage: getPublicAssetPath("photos/2a909-17718318971280-1920.webp"),
};

export const quickCards = [
  { label: "Fish Database", icon: Fish, desc: "Browse all fish by zone", sectionId: "database" },
  { label: "Zones", icon: Waves, desc: "Navigate biome zones", sectionId: "zones-container" },
  { label: "Mutations", icon: Lightning, desc: "Multiplier reference", sectionId: "mutation-guide" },
  { label: "Rebirth Guide", icon: ArrowsClockwise, desc: "Permanent upgrades", href: "/rebirth", isRoute: true },
  { label: "Tips & Tricks", icon: Lightning, desc: "Farming strategies", sectionId: "tips" },
  { label: "FAQs", icon: Question, desc: "Common questions", sectionId: "faq" },
];

export const faqItems = [
  {
    q: "When do Secrets and Divines spawn?",
    a: "Secret spawns are completely random. By collecting fish in that area, it increases the chance of a Secret or Divine to spawn!",
  },
  {
    q: "Is there a cooldown on Secret or Divine spawns?",
    a: "No, there is no cooldown timers for Secret or Divine fish to spawn.",
  },
  {
    q: "Will I lose all my fish or money if I Rebirth?",
    a: "No! You do not lose anything when you rebirth other than the money and fish required for each rebirth.",
  },
  {
    q: "When is Admin Abuse?",
    a: "Admin abuse is before updates. They will be announced in this Discord.",
  },
  {
    q: "Do mutations stack? Can I get more than one mutation on a fish?",
    a: "No, currently fish can only have one mutation. Example: If your fish has Rainbow, gold, or silver, it cannot receive other mutations like chocolate, shocked, or frozen.",
  },
  {
    q: "Can I trade fish?",
    a: "Trading is not currently in the game. Currently, the only way to transfer fish from one person to another is to steal it using Robux.",
  },
  {
    q: "I followed the steps to get my group reward fish, why haven't I received it yet?",
    a: "Receiving your group reward can take a few minutes. Be patient, and you will receive it in no time.",
  },
  {
    q: "Are there any Codes for Dive Down?",
    a: "No, there are currently no codes, but that is one of the many things our Dev Team is working on!",
  },
  {
    q: "How do I get more Secrets to spawn?",
    a: "Catching fish in the area you want a secret to spawn in rapidly increases the chances of secrets to spawn.",
  },
];

export const mutationGroups = [
  {
    id: "ocean",
    title: "Ocean Mutation",
    items: [
      { name: "Rainbow", val: "3.0x" },
      { name: "Gold", val: "2.7x" },
      { name: "Silver", val: "2.4x" },
      { name: "Normal", val: "1.0x" },
    ],
  },
  {
    id: "weather",
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

export const tipCards = [
  {
    title: "Zone Farming",
    text: "Farm by zone instead of diving randomly. Each biome has its own fish pool, so targeted runs are much more efficient.",
  },
  {
    title: "Check Rarity Conflicts",
    text: "When the two sources disagree, treat the fish as a priority to verify in-game before planning a long grind around it.",
  },
  {
    title: "Late-Game Route",
    text: "Push your upgrades before farming Deep Dark, Trenches, Atlantis, Shell Reef, and Kraken World to avoid wasted dives.",
  },
];
