let materials = {
    ores: {
        iron: [
            "minecraft:iron_block",
            "minecraft:iron_ingot",
            "minecraft:iron_nugget",
            "minecraft:raw_iron_block",
            "minecraft:raw_iron",
            "minecraft:iron_ore",
            "minecraft:deepslate_iron_ore",
            "create:iron_sheet",
            "create:crushed_raw_iron"
        ],

        gold: [
            "minecraft:gold_block",
            "minecraft:gold_ingot",
            "minecraft:gold_nugget",
            "minecraft:raw_gold_block",
            "minecraft:raw_gold",
            "minecraft:gold_ore",
            "minecraft:deepslate_gold_ore",
            "minecraft:nether_gold_ore",
            "create:golden_sheet",
            "create:crushed_raw_gold"
        ],

        copper: [
            "minecraft:copper_block",
            "minecraft:copper_ingot",
            "create:copper_nugget",
            "minecraft:raw_copper_block",
            "minecraft:raw_copper",
            "minecraft:copper_ore",
            "minecraft:deepslate_copper_ore",
            "create:copper_sheet",
            "create:crushed_raw_copper"
        ],

        zinc: [
            "create:zinc_block",
            "create:zinc_ingot",
            "create:zinc_nugget",
            "create:raw_zinc_block",
            "create:raw_zinc",
            "create:zinc_ore",
            "create:deepslate_zinc_ore",
            "create:zinc_sheet",
            "create:crushed_raw_zinc"
        ],

        coal: [
            "minecraft:coal_block",
            "minecraft:coal",
            "minecraft:charcoal",
            "minecraft:coal_ore",
            "minecraft:deepslate_coal_ore",
            "kubejs:coal_dust"
        ],

        redstone: [
            "minecraft:redstone_block",
            "minecraft:redstone",
            "minecraft:redstone_ore",
            "minecraft:deepslate_redstone_ore"
        ],

        diamond: [
            "minecraft:diamond_block",
            "minecraft:diamond",
            "minecraft:diamond_ore",
            "minecraft:deepslate_diamond_ore"
        ],

        netherite: [
            "minecraft:ancient_debris",
            "minecraft:netherite_block",
            "minecraft:netherite_ingot",
            "minecraft:netherite_scrap"
        ],

        lapis_lazuli: [
            "minecraft:lapis_block",
            "minecraft:lapis_lazuli",
            "minecraft:lapis_ore",
            "minecraft:deepslate_lapis_ore"
        ],

        emerald: [
            "minecraft:emerald_block",
            "minecraft:emerald",
            "minecraft:emerald_ore",
            "minecraft:deepslate_emerald_ore"
        ],

        quartz: [
            "minecraft:quartz_block",
            "minecraft:quartz",
            "minecraft:nether_quartz_ore"
        ],

        amethyst: [
            "minecraft:amethyst_cluster",
            "minecraft:large_amethyst_bud",
            "minecraft:medium_amethyst_bud",
            "minecraft:small_amethyst_bud",
            "minecraft:amethyst_block",
            "minecraft:budding_amethyst",
            "minecraft:amethyst_shard"
        ],

        rose_quartz: [
            "biomesoplenty:rose_quartz_cluster",
            "biomesoplenty:large_rose_quartz_bud",
            "biomesoplenty:medium_rose_quartz_bud",
            "biomesoplenty:small_rose_quartz_bud",
            "biomesoplenty:rose_quartz_chunk",
            "create:rose_quartz",
            "create:polished_rose_quartz",
            "biomesoplenty:rose_quartz_block",
            "create:rose_quartz_block"
        ],

        glowstone: [
            "minecraft:glowstone",
            "minecraft:glowstone_dust"
        ],

        andesite_alloy: [
            "create:andesite_alloy",
            "create:andesite_alloy_block",
            "createdeco:andesite_sheet"
        ],

        brass: [
            "create:brass_block",
            "create:brass_ingot",
            "create:brass_nugget",
            "create:brass_sheet"
        ],
    },
    salt: [
        "kubejs:salt_dust"
    ],
    sulphur: [
        "kubejs:sulphur_dust",
        "biomesoplenty:brimstone"
    ],
    limestone: [
        "kubejs:lime_dust",
        "create:limestone"
    ],

    flint: ["minecraft:flint", "supplementaries:flint_block"],
    clay: ["minecraft:clay_ball", "minecraft:clay", "minecraft:brick"],
    experience: [
        "create:experience_nugget",
        "create:experience_block",
        "create_enchantment_industry:supper_experience_block",
        "create_enchantment_industry:supper_experience_block"
    ],
    mob_drops: {
        passive: [
            "minecraft:leather",
            "minecraft:feather",
            "minecraft:ink_sac",
            "minecraft:glow_ink_sac",
        ],
        hostile: [
            "minecraft:breeze_rod",
            "minecraft:wind_charge",
            "minecraft:blaze_rod",
            "minecraft:blaze_powder",
            "minecraft:ender_pearl",
            "minecraft:ender_eye",
            "minecraft:phantom_membrane",
            "minecraft:magma_cream",
            "minecraft:slime_ball",
            "minecraft:ghast_tear",
            "minecraft:rotten_flesh",
            "minecraft:gunpowder",
            "minecraft:bone",
            "minecraft:bone_meal",
            "minecraft:bone_block",
        ]
    }
};


ServerEvents.tags('item', event => {
    const BASE = "kubejs:materials";

    // Add parent tag
    event.add(BASE);

    // Handle each top-level category
    for (let category in materials) {
        let value = materials[category];

        // Case 1: category is an OBJECT (subcategories, like ores)
        if (typeof value === "object" && !Array.isArray(value)) {
            let baseTag = `${BASE}/${category}`;
            event.add(baseTag);

            for (let sub in value) {
                let items = value[sub];
                let tag = `${baseTag}/${sub}`;

                // Add the subtag and parent tags
                event.add(tag, items);
                event.add(baseTag, items);
                event.add(BASE, items);
            }
        }

        // Case 2: category is a simple array (flint, clay, etc.)
        else if (Array.isArray(value)) {
            let tag = `${BASE}/${category}`;
            event.add(tag);
            event.add(tag, value);
            event.add(BASE, value);
        }
    }
});
