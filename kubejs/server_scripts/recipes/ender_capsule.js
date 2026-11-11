const UPGRADE_BASE = 'sophisticatedbackpacks:upgrade_base'

function remove_id(event, id) {
    event.remove({ id: id })
}

function basicUpgrade(event, material, output) {
    event.shaped(output, [
        ' X ',
        'RPR',
        'SSS'
    ], {
        X: material,
        R: 'minecraft:redstone',
        P: UPGRADE_BASE,
        S: 'create:iron_sheet'
    })
}

function brassUpgrade(event, material, output) {
    event.shaped(output, [
        'RXR',
        'SSS'
    ], {
        X: material,
        R: 'create:electron_tube',
        S: 'create:brass_sheet'
    })
}

function filterUpgrade(event, material, output) {
    event.shaped(output, [
        ' F ',
        ' X ',
        'SSS'
    ], {
        X: material,
        F: 'create:attribute_filter',
        S: 'create:brass_sheet'
    })
}

function advancedUpgrade(event, material, inner_material, output) {
    event.shaped(output, [
        ' X ',
        'RYR',
        'SSS'
    ], {
        X: material,
        Y: inner_material,
        R: 'create:electron_tube',
        S: 'create:brass_sheet'
    })
}


function overrideBasic(event, material, output) {
    remove_id(event, output)
    basicUpgrade(event, material, output)
}

function overrideBasicWithFilter(event, material, basic_output, advanced_output) {
    overrideBasic(event, material, basic_output)
    remove_id(event, advanced_output)
    filterUpgrade(event, basic_output, advanced_output)
}

function overrideBasicWithBrass(event, material, basic_output, advanced_output) {
    overrideBasic(event, material, basic_output)
    remove_id(event, advanced_output)
    brassUpgrade(event, basic_output, advanced_output)
}

ServerEvents.recipes(event => {
    event.recipes.create.deploying('kubejs:ender_capsule', ['create:brass_sheet', 'minecraft:ender_pearl'])

    remove_id(event, 'create_power_loader:empty_brass_chunk_loader')
    event.recipes.create.mechanical_crafting('create_power_loader:empty_brass_chunk_loader', [
        'GGGGG',
        'G   G',
        'GEREG',
        'CPPPC',
        'CCSCC'
    ], {
        G: '#c:glass_blocks',
        R: 'minecraft:respawn_anchor',
        E: 'kubejs:ender_capsule',
        S: 'create:shaft',
        C: 'create:brass_casing',
        P: 'create:precision_mechanism'
    })

    overrideBasic(event, 'create:chute', 'sophisticatedbackpacks:pickup_upgrade')

    remove_id(event, 'sophisticatedbackpacks:advanced_pickup_upgrade')
    advancedUpgrade(event, 'create:smart_chute', UPGRADE_BASE, 'sophisticatedbackpacks:advanced_pickup_upgrade')

    overrideBasic(event, 'create:filter', 'sophisticatedbackpacks:filter_upgrade')

    remove_id(event, 'sophisticatedbackpacks:advanced_filter_upgrade')
    event.shaped('sophisticatedbackpacks:advanced_filter_upgrade', [
        ' F ',
        'RXR',
        'SSS'
    ], {
        X: UPGRADE_BASE,
        R: 'minecraft:redstone',
        F: 'create:attribute_filter',
        S: 'create:brass_sheet'
    })

    remove_id(event, 'sophisticatedbackpacks:magnet_upgrade')
    event.shaped('sophisticatedbackpacks:magnet_upgrade', [
        'AXA',
        'RPR',
        'SSS'
    ], {
        X: 'create:chute',
        A: 'minecraft:amethyst_shard',
        R: 'minecraft:redstone',
        P: UPGRADE_BASE,
        S: 'create:iron_sheet'
    })

    remove_id(event, 'sophisticatedbackpacks:advanced_magnet_upgrade')
    remove_id(event, 'sophisticatedbackpacks:advanced_magnet_upgrade_from_basic')
    event.shaped('sophisticatedbackpacks:advanced_magnet_upgrade', [
        'AXA',
        'RPR',
        'SSS'
    ], {
        X: 'create:smart_chute',
        A: 'minecraft:amethyst_shard',
        R: 'kubejs:ender_capsule',
        P: UPGRADE_BASE,
        S: 'create:brass_sheet'
    })

    remove_id(event, 'sophisticatedbackpacks:feeding_upgrade')
    event.shaped('sophisticatedbackpacks:feeding_upgrade', [
        ' X ',
        'RYR',
        'SSS'
    ], {
        X: 'minecraft:bowl',
        Y: UPGRADE_BASE,
        R: 'create:whisk',
        S: 'create:iron_sheet'
    })

    remove_id(event, 'sophisticatedbackpacks:advanced_feeding_upgrade')
    filterUpgrade(event, 'sophisticatedbackpacks:feeding_upgrade', 'sophisticatedbackpacks:advanced_feeding_upgrade')

    remove_id(event, 'sophisticatedbackpacks:compacting_upgrade')
    event.shaped('sophisticatedbackpacks:compacting_upgrade', [
        ' X ',
        'RBR',
        'SYS'
    ], {
        X: 'create:mechanical_press',
        Y: 'create:basin',
        B: UPGRADE_BASE,
        R: 'minecraft:redstone',
        S: 'create:iron_sheet'
    })

    remove_id(event, 'sophisticatedbackpacks:advanced_compacting_upgrade')
    event.shaped('sophisticatedbackpacks:advanced_compacting_upgrade', [
        ' X ',
        'RBR',
        'SYS'
    ], {
        X: 'create:mechanical_press',
        Y: 'create:basin',
        B: UPGRADE_BASE,
        R: 'create:electron_tube',
        S: 'create:brass_sheet'
    })

    overrideBasicWithFilter(event, 'minecraft:respawn_anchor', 'sophisticatedbackpacks:void_upgrade', 'sophisticatedbackpacks:advanced_void_upgrade')

    overrideBasicWithFilter(event, 'create:item_hatch', 'sophisticatedbackpacks:restock_upgrade', 'sophisticatedbackpacks:advanced_restock_upgrade')

    overrideBasicWithFilter(event, 'minecraft:dropper', 'sophisticatedbackpacks:deposit_upgrade', 'sophisticatedbackpacks:advanced_deposit_upgrade')

    overrideBasic(event, "create:portable_storage_interface", "sophisticatedbackpacks:refill_upgrade")

    remove_id(event, "sophisticatedbackpacks:advanced_refill_upgrade")
    advancedUpgrade(event, "create:mechanical_arm", "sophisticatedbackpacks:refill_upgrade", "sophisticatedbackpacks:advanced_refill_upgrade")

    remove_id(event, "sophisticatedbackpacks:everlasting_upgrade")
    event.shaped('sophisticatedbackpacks:everlasting_upgrade', [
        'NEN',
        'CBC',
        'NSN'
    ], {
        N: "minecraft:netherite_ingot",
        E: "minecraft:end_crystal",
        C: "create:railway_casing",
        B: UPGRADE_BASE,
        S: "create:sturdy_sheet"
    })

    overrideBasicWithBrass(event, "minecraft:furnace", "sophisticatedbackpacks:smelting_upgrade", "sophisticatedbackpacks:auto_smelting_upgrade")

    overrideBasicWithBrass(event, "minecraft:smoker", "sophisticatedbackpacks:smoking_upgrade", "sophisticatedbackpacks:auto_smoking_upgrade")

    overrideBasicWithBrass(event, "minecraft:blast_furnace", "sophisticatedbackpacks:blasting_upgrade", "sophisticatedbackpacks:auto_blasting_upgrade")

    overrideBasic(event, "minecraft:crafting_table", "sophisticatedbackpacks:crafting_upgrade")

    overrideBasic(event, "minecraft:stonecutter", "sophisticatedbackpacks:stonecutter_upgrade")

    remove_id(event, "sophisticatedbackpacks:stack_upgrade_starter_tier")
    event.shaped("sophisticatedbackpacks:stack_upgrade_starter_tier", [
        'NEN',
        'CBC',
        'NEN'
    ], {
        N: "create:copper_sheet",
        E: "minecraft:redstone",
        C: "minecraft:barrel",
        B: UPGRADE_BASE,
    })

    remove_id(event, "sophisticatedbackpacks:stack_upgrade_tier_1_from_starter")
    remove_id(event, "sophisticatedbackpacks:stack_upgrade_tier_1")
    event.shaped("sophisticatedbackpacks:stack_upgrade_tier_1", [
        'NEN',
        'CBC',
        'NEN'
    ], {
        N: "create:iron_sheet",
        E: "minecraft:redstone",
        C: "create:item_vault",
        B: "sophisticatedbackpacks:stack_upgrade_starter_tier",
    })

    remove_id(event, "sophisticatedbackpacks:stack_upgrade_tier_2")
    event.shaped("sophisticatedbackpacks:stack_upgrade_tier_2", [
        'NCN',
        'CBC',
        'NEN'
    ], {
        N: "create:brass_sheet",
        E: "kubejs:ender_capsule",
        C: "create:item_vault",
        B: "sophisticatedbackpacks:stack_upgrade_tier_1",
    })

    remove_id(event, "sophisticatedbackpacks:stack_upgrade_tier_3")
    event.shaped("sophisticatedbackpacks:stack_upgrade_tier_3", [
        'ECE',
        'CBC',
        'NNN'
    ], {
        N: "minecraft:diamond",
        E: "kubejs:ender_capsule",
        C: "create:item_vault",
        B: "sophisticatedbackpacks:stack_upgrade_tier_2",
    })

    remove_id(event, "sophisticatedbackpacks:stack_upgrade_tier_4")
    event.shaped("sophisticatedbackpacks:stack_upgrade_tier_4", [
        'ECE',
        'CBC',
        'CNC'
    ], {
        N: "minecraft:echo_shard",
        E: "kubejs:ender_capsule",
        C: "minecraft:netherite_ingot",
        B: "sophisticatedbackpacks:stack_upgrade_tier_3",
    })

    remove_id(event, "sophisticatedbackpacks:stack_downgrade_tier_1")
    event.shaped("sophisticatedbackpacks:stack_downgrade_tier_1", [
        'NCN',
        'CBC',
        'EEE'
    ], {
        N: "minecraft:string",
        C: "minecraft:flint",
        E: "create:iron_sheet",
        B: UPGRADE_BASE,
    })

    remove_id(event, "sophisticatedbackpacks:stack_downgrade_tier_2")
    event.shaped("sophisticatedbackpacks:stack_downgrade_tier_2", [
        'CNC',
        'NBN',
        'CNC'
    ], {
        N: "minecraft:string",
        C: "minecraft:flint",
        B: "sophisticatedbackpacks:stack_downgrade_tier_1",
    })

    remove_id(event, "sophisticatedbackpacks:stack_downgrade_tier_3")
    event.shaped("sophisticatedbackpacks:stack_downgrade_tier_3", [
        'NCN',
        'CBC',
        'NCN'
    ], {
        N: "minecraft:string",
        C: "minecraft:flint",
        B: "sophisticatedbackpacks:stack_downgrade_tier_2",
    })

    overrideBasic(event, "minecraft:jukebox", "sophisticatedbackpacks:jukebox_upgrade")

    remove_id(event, "sophisticatedbackpacks:advanced_jukebox_upgrade")
    advancedUpgrade(event, "create:item_vault", "sophisticatedbackpacks:jukebox_upgrade", "sophisticatedbackpacks:advanced_jukebox_upgrade")

    remove_id(event, "sophisticatedbackpacks:tool_swapper_upgrade")
    event.shaped("sophisticatedbackpacks:tool_swapper_upgrade", [
        'APA',
        'EBE',
        'SSS'
    ], {
        A: "create:brass_hand",
        P: "create:precision_mechanism",
        E: "create:electron_tube",
        B: UPGRADE_BASE,
        S: "create:brass_sheet"
    })

    remove_id(event, "sophisticatedbackpacks:advanced_tool_swapper_upgrade")
    advancedUpgrade(event, "create:brass_hand", "sophisticatedbackpacks:tool_swapper_upgrade", "sophisticatedbackpacks:advanced_tool_swapper_upgrade")

    remove_id(event, "sophisticatedbackpacks:tank_upgrade")
    event.shaped("sophisticatedbackpacks:tank_upgrade", [
        'PAP',
        'CBD',
        'SSS'
    ], {
        A: "create:fluid_tank",
        C: "create:spout",
        D: "create_dragons_plus:fluid_hatch",
        P: "create:fluid_pipe",
        B: UPGRADE_BASE,
        S: "create:brass_sheet"
    })

    overrideBasic(event, "create:mechanical_pump", "sophisticatedbackpacks:pump_upgrade")

    remove_id(event, "sophisticatedbackpacks:advanced_pump_upgrade")
    advancedUpgrade(event, "create:smart_fluid_pipe", "sophisticatedbackpacks:pump_upgrade", "sophisticatedbackpacks:advanced_pump_upgrade")

    overrideBasic(event, "minecraft:anvil", "sophisticatedbackpacks:anvil_upgrade")

    overrideBasic(event, "minecraft:smithing_table", "sophisticatedbackpacks:smithing_upgrade")

    remove_id(event, 'sophisticatedbackpacks:alchemy_upgrade')
    event.shaped('sophisticatedbackpacks:alchemy_upgrade', [
        'CXC',
        'RYR',
        'SSS'
    ], {
        X: 'minecraft:glass_bottle',
        Y: UPGRADE_BASE,
        C: 'create:spout',
        R: 'minecraft:redstone',
        S: 'create:iron_sheet'
    })

    remove_id(event, 'sophisticatedbackpacks:advanced_alchemy_upgrade')
    filterUpgrade(event, 'sophisticatedbackpacks:alchemy_upgrade', 'sophisticatedbackpacks:advanced_alchemy_upgrade')

    overrideBasic(event, "chipped:botanist_workbench", "sophisticatedbackpacks:chipped/botanist_workbench_upgrade")
    overrideBasic(event, "chipped:glassblower", "sophisticatedbackpacks:chipped/glassblower_upgrade")
    overrideBasic(event, "chipped:carpenters_table", "sophisticatedbackpacks:chipped/carpenters_table_upgrade")
    overrideBasic(event, "chipped:loom_table", "sophisticatedbackpacks:chipped/loom_table_upgrade")
    overrideBasic(event, "chipped:mason_table", "sophisticatedbackpacks:chipped/mason_table_upgrade")
    overrideBasic(event, "chipped:alchemy_bench", "sophisticatedbackpacks:chipped/alchemy_bench_upgrade")
    overrideBasic(event, "chipped:tinkering_table", "sophisticatedbackpacks:chipped/tinkering_table_upgrade")


    remove_id(event, "sophisticatedbackpacks:inception_upgrade")
    remove_id(event, "sophisticatedbackpacks:stack_upgrade_omega_tier")
    remove_id(event, "sophisticatedbackpacks:battery_upgrade")
    remove_id(event, "sophisticatedbackpacks:xp_pump_upgrade")
    remove_id(event, "sophisticatedbackpacks:mob_catcher_upgrade")
    remove_id(event, "sophisticatedbackpacks:advanced_mob_catcher_upgrade")

})
