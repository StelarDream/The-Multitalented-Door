// ──────────────────────────────────────────────
// Item Tags
// ──────────────────────────────────────────────

let incomplete = [
    'kubejs:incomplete_netherite_upgrade_smithing_template',
    'kubejs:incomplete_sentry_armor_trim_smithing_template',
    'kubejs:incomplete_vex_armor_trim_smithing_template',
    'kubejs:incomplete_wild_armor_trim_smithing_template',
    'kubejs:incomplete_coast_armor_trim_smithing_template',
    'kubejs:incomplete_dune_armor_trim_smithing_template',
    'kubejs:incomplete_wayfinder_armor_trim_smithing_template',
    'kubejs:incomplete_raiser_armor_trim_smithing_template',
    'kubejs:incomplete_shaper_armor_trim_smithing_template',
    'kubejs:incomplete_host_armor_trim_smithing_template',
    'kubejs:incomplete_ward_armor_trim_smithing_template',
    'kubejs:incomplete_tide_armor_trim_smithing_template',
    'kubejs:incomplete_snout_armor_trim_smithing_template',
    'kubejs:incomplete_rib_armor_trim_smithing_template',
    'kubejs:incomplete_eye_armor_trim_smithing_template',
    'kubejs:incomplete_spire_armor_trim_smithing_template',
    'kubejs:incomplete_bolt_armor_trim_smithing_template',
    'kubejs:incomplete_flow_armor_trim_smithing_template',
    'kubejs:incomplete_silence_armor_trim_smithing_template',
    'kubejs:incomplete_blaze_upgrade_smithing_template',
];

let rose_quartz = [
    "biomesoplenty:rose_quartz_chunk",
    "create:rose_quartz",
    "create:polished_rose_quartz",
]

ServerEvents.tags('item', event => {

    // Dough tag
    event.add('c:foods/dough', 'create:dough')

    // Create pulpifiable items
    event.add('create:pulpifiable', 'farmersdelight:tree_bark')
    event.add('create:pulpifiable', 'farmersdelight:straw')

    event.add('kubejs:incomplete_templates', incomplete);
    event.add('c:gems', rose_quartz);
    event.add('c:gems/rose_quartz', rose_quartz);
    event.add('c:clusters', "biomesoplenty:rose_quartz_cluster")
    event.add('c:buds', [
        "biomesoplenty:large_rose_quartz_bud",
        "biomesoplenty:medium_rose_quartz_bud",
        "biomesoplenty:small_rose_quartz_bud"
    ])
    event.add('c:clusters/rose_quartz', "biomesoplenty:rose_quartz_cluster")
    event.add('c:buds/rose_quartz', [
        "biomesoplenty:large_rose_quartz_bud",
        "biomesoplenty:medium_rose_quartz_bud",
        "biomesoplenty:small_rose_quartz_bud"
    ])
    event.add('c:clusters/amethyst', "minecraft:amethyst_cluster")
    event.add('c:buds/amethyst', [
        "minecraft:large_amethyst_bud",
        "minecraft:medium_amethyst_bud",
        "minecraft:small_amethyst_bud"
    ])

    event.remove('c:foods', 'minecraft:ominous_bottle');

    event.add('c:buds/amethyst', [
        "minecraft:large_amethyst_bud",
        "minecraft:medium_amethyst_bud",
        "minecraft:small_amethyst_bud"
    ])

    event.add('c:armors', [
        "minecraft:saddle",
        "minecraft:leather_horse_armor",
        "minecraft:iron_horse_armor",
        "minecraft:golden_horse_armor",
        "minecraft:diamond_horse_armor",
    ])

    event.add('c:armors/horse', [
        "minecraft:saddle",
        "minecraft:leather_horse_armor",
        "minecraft:iron_horse_armor",
        "minecraft:golden_horse_armor",
        "minecraft:diamond_horse_armor",
    ])

    event.add('c:foods', [
        "minecraft:egg",
        "minecraft:sugar",
        "minecraft:brown_mushroom",
        "minecraft:red_mushroom",
        "farmersdelight:brown_mushroom_colony",
        "farmersdelight:red_mushroom_colony",
    ])
})

