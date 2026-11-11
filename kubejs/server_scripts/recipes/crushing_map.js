const CRUSHING_MAP = {
  "minecraft:diamond_helmet": [
    { id: "minecraft:diamond", count: 1 },
    { id: "minecraft:diamond", count: 1, chance: 0.5625 },
  ],
  "minecraft:diamond_chestplate": [
    { id: "minecraft:diamond", count: 2 },
    { id: "minecraft:diamond", count: 1, chance: 0.5 },
  ],
  "minecraft:diamond_leggings": [
    { id: "minecraft:diamond", count: 2 },
    { id: "minecraft:diamond", count: 1, chance: 0.1875 },
  ],
  "minecraft:diamond_boots": [
    { id: "minecraft:diamond", count: 1 },
    { id: "minecraft:diamond", count: 1, chance: 0.25 },
  ],
  "minecraft:diamond_hoe": [
    { id: "minecraft:diamond", count: 1 },
    { id: "minecraft:diamond", count: 1, chance: 0.25 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "minecraft:diamond_pickaxe": [
    { id: "minecraft:diamond", count: 1 },
    { id: "minecraft:diamond", count: 1, chance: 0.875 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "minecraft:diamond_axe": [
    { id: "minecraft:diamond", count: 1 },
    { id: "minecraft:diamond", count: 1, chance: 0.875 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "minecraft:diamond_shovel": [
    { id: "minecraft:diamond", count: 1, chance: 0.625 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "farmersdelight:diamond_knife": [
    { id: "minecraft:diamond", count: 1, chance: 0.625 },
    { id: "minecraft:stick", count: 1, chance: 0.125 },
  ],
  "minecraft:diamond_sword": [
    { id: "minecraft:diamond", count: 1 },
    { id: "minecraft:diamond", count: 1, chance: 0.25 },
    { id: "minecraft:stick", count: 1, chance: 0.125 },
  ],
  "minecraft:diamond_horse_armor": [
    { id: "minecraft:diamond", count: 4 },
    { id: "minecraft:diamond", count: 1, chance: 0.0625 },
    { id: "minecraft:leather", count: 1, chance: 0.5 },
  ],
  "minecraft:golden_helmet": [
    { id: "minecraft:gold_ingot", count: 1 },
    { id: "minecraft:gold_ingot", count: 1, chance: 0.5625 },
  ],
  "minecraft:golden_chestplate": [
    { id: "minecraft:gold_ingot", count: 2 },
    { id: "minecraft:gold_ingot", count: 1, chance: 0.5 },
  ],
  "minecraft:golden_leggings": [
    { id: "minecraft:gold_ingot", count: 2 },
    { id: "minecraft:gold_ingot", count: 1, chance: 0.1875 },
  ],
  "minecraft:golden_boots": [
    { id: "minecraft:gold_ingot", count: 1 },
    { id: "minecraft:gold_ingot", count: 1, chance: 0.25 },
  ],
  "minecraft:golden_hoe": [
    { id: "minecraft:gold_ingot", count: 1 },
    { id: "minecraft:gold_ingot", count: 1, chance: 0.25 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "minecraft:golden_pickaxe": [
    { id: "minecraft:gold_ingot", count: 1 },
    { id: "minecraft:gold_ingot", count: 1, chance: 0.875 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "minecraft:golden_axe": [
    { id: "minecraft:gold_ingot", count: 1 },
    { id: "minecraft:gold_ingot", count: 1, chance: 0.875 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "minecraft:golden_shovel": [
    { id: "minecraft:gold_ingot", count: 1, chance: 0.625 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "farmersdelight:golden_knife": [
    { id: "minecraft:gold_ingot", count: 1, chance: 0.625 },
    { id: "minecraft:stick", count: 1, chance: 0.125 },
  ],
  "minecraft:golden_sword": [
    { id: "minecraft:gold_ingot", count: 1 },
    { id: "minecraft:gold_ingot", count: 1, chance: 0.25 },
    { id: "minecraft:stick", count: 1, chance: 0.125 },
  ],
  "minecraft:golden_horse_armor": [
    { id: "minecraft:gold_ingot", count: 4 },
    { id: "minecraft:gold_ingot", count: 1, chance: 0.0625 },
    { id: "minecraft:leather", count: 1, chance: 0.5 },
  ],
  "minecraft:golden_apple": [
    { id: "minecraft:gold_ingot", count: 5 },
    { id: "minecraft:gold_ingot", count: 1, chance: 0.5 },
  ],
  "minecraft:enchanted_golden_apple": [
    { id: "minecraft:gold_ingot", count: 8 },
    { id: "minecraft:gold_ingot", count: 1, chance: 0.5 },
    { id: "create:experience_nugget", count: 5 },
  ],
  "minecraft:iron_helmet": [
    { id: "minecraft:iron_ingot", count: 1 },
    { id: "minecraft:iron_ingot", count: 1, chance: 0.5625 },
  ],
  "minecraft:iron_chestplate": [
    { id: "minecraft:iron_ingot", count: 2 },
    { id: "minecraft:iron_ingot", count: 1, chance: 0.5 },
  ],
  "minecraft:iron_leggings": [
    { id: "minecraft:iron_ingot", count: 2 },
    { id: "minecraft:iron_ingot", count: 1, chance: 0.1875 },
  ],
  "minecraft:iron_boots": [
    { id: "minecraft:iron_ingot", count: 1 },
    { id: "minecraft:iron_ingot", count: 1, chance: 0.25 },
  ],
  "minecraft:iron_hoe": [
    { id: "minecraft:iron_ingot", count: 1 },
    { id: "minecraft:iron_ingot", count: 1, chance: 0.25 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "minecraft:iron_pickaxe": [
    { id: "minecraft:iron_ingot", count: 1 },
    { id: "minecraft:iron_ingot", count: 1, chance: 0.875 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "minecraft:iron_axe": [
    { id: "minecraft:iron_ingot", count: 1 },
    { id: "minecraft:iron_ingot", count: 1, chance: 0.875 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "minecraft:iron_shovel": [
    { id: "minecraft:iron_ingot", count: 1, chance: 0.625 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "farmersdelight:iron_knife": [
    { id: "minecraft:iron_ingot", count: 1, chance: 0.625 },
    { id: "minecraft:stick", count: 1, chance: 0.125 },
  ],
  "minecraft:iron_sword": [
    { id: "minecraft:iron_ingot", count: 1 },
    { id: "minecraft:iron_ingot", count: 1, chance: 0.25 },
    { id: "minecraft:stick", count: 1, chance: 0.125 },
  ],
  "minecraft:iron_horse_armor": [
    { id: "minecraft:iron_ingot", count: 4 },
    { id: "minecraft:iron_ingot", count: 1, chance: 0.0625 },
    { id: "minecraft:leather", count: 1, chance: 0.5 },
  ],
  "minecraft:leather_helmet": [
    { id: "minecraft:leather", count: 1 },
    { id: "minecraft:leather", count: 1, chance: 0.5625 },
  ],
  "minecraft:leather_chestplate": [
    { id: "minecraft:leather", count: 2 },
    { id: "minecraft:leather", count: 1, chance: 0.5 },
  ],
  "minecraft:leather_leggings": [
    { id: "minecraft:leather", count: 2 },
    { id: "minecraft:leather", count: 1, chance: 0.1875 },
  ],
  "minecraft:leather_boots": [
    { id: "minecraft:leather", count: 1 },
    { id: "minecraft:leather", count: 1, chance: 0.25 },
  ],
  "minecraft:wooden_hoe": [
    { id: "minecraft:stick", count: 1 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "minecraft:wooden_pickaxe": [
    { id: "minecraft:stick", count: 1 },
    { id: "minecraft:stick", count: 1, chance: 0.875 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "minecraft:wooden_axe": [
    { id: "minecraft:stick", count: 1 },
    { id: "minecraft:stick", count: 1, chance: 0.875 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "minecraft:wooden_shovel": [
    { id: "minecraft:stick", count: 1, chance: 0.625 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
  ],
  "farmersdelight:flint_knife": [
    { id: "minecraft:flint", count: 1, chance: 0.625 },
    { id: "minecraft:stick", count: 1, chance: 0.125 },
  ],
  "minecraft:wooden_sword": [
    { id: "minecraft:stick", count: 1 },
    { id: "minecraft:stick", count: 1, chance: 0.25 },
    { id: "minecraft:stick", count: 1, chance: 0.125 },
  ],
};

const DEFAULT_PROCESSING_TIME = 2400

ServerEvents.recipes(event => {
  const removeIds = [
    "create:crushing/iron_horse_armor",
    "create:crushing/golden_horse_armor",
    "create:crushing/diamond_horse_armor",
  ];

  removeIds.forEach(id => {
    event.remove({ "id": id });
    console.log(`[CrushingMap] Removed default recipe: ${id}`);
  });

  for (const [input, outputs] of Object.entries(CRUSHING_MAP)) {

    event.custom({
      type: "create:crushing",
      ingredients: [
        { item: input }
      ],
      processing_time: DEFAULT_PROCESSING_TIME,
      results: outputs.map(o => {
        const out = { id: o.id };
        if (o.count) out.count = o.count;
        if (o.chance) out.chance = o.chance;
        return out;
      }),
    });

    console.log(`[CrushingMap] Registered crushing recipe for ${input}`);
  }


});