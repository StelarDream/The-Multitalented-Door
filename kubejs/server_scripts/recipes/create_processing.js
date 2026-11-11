// ──────────────────────────────────────────────
// Create Mod Processing Recipes
// ──────────────────────────────────────────────
ServerEvents.recipes(event => {

    event.recipes.createCrushing(
        [
            Item.of('create_enchantment_industry:super_experience_nugget', 4),
            CreateItem.of('create_enchantment_industry:super_experience_nugget', 0.5)
        ],
        'create_enchantment_industry:super_enchanting_template'
    )

    event.recipes.createCrushing(
        [
            Item.of('create:experience_nugget', 4),
            CreateItem.of('create:experience_nugget', 0.5)
        ],
        'create_enchantment_industry:enchanting_template'
    )

    // Override Amethyst Crushing
    event.remove({ type: 'create:crushing', input: 'minecraft:amethyst_block' })
    event.recipes.createCrushing(
        [
            Item.of('minecraft:amethyst_shard', 5),
            CreateItem.of('minecraft:amethyst_shard', 0.5)
        ],
        'minecraft:amethyst_block'
    )

    // Milling: coarse dirt → dirt
    event.recipes.create.milling("minecraft:dirt", "minecraft:coarse_dirt")
        .processingTime(30)

    // Emptying antique ink → 250 mB fluid + bottle
    event.recipes.createEmptying(
        [
            'minecraft:glass_bottle',
            Fluid.of('create_dragons_plus:black_dye', 250)
        ],
        'supplementaries:antique_ink'
    )

    // Milling Wheat Override
    event.remove({ id: 'create:milling/wheat' })
    event.recipes.createMilling(
        [
            Item.of('create:wheat_flour', 1),
            CreateItem.of('create:wheat_flour', 0.50),
            CreateItem.of('minecraft:wheat_seeds', 0.25),
            CreateItem.of('farmersdelight:straw', 0.20)
        ],
        'minecraft:wheat'
    ).processingTime(50)

    // Milling Seeds → flour (rare)
    event.recipes.createMilling(
        [CreateItem.of("create:wheat_flour", 0.20)],
        "minecraft:wheat_seeds"
    ).processingTime(20)

    event.remove({ id: "create:crushing/tuff" });
    event.remove({ id: "create:crushing/tuff_recycling" });
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            { "tag": "create:stone_types/tuff" }
        ],
        "processing_time": 350,
        "results": [
            { "id": "minecraft:flint", "chance": 0.25 },
            { "id": "minecraft:gold_nugget", "chance": 0.1 },
            { "id": "create:copper_nugget", "chance": 0.1 },
            { "id": "create:zinc_nugget", "chance": 0.1 },
            { "id": "minecraft:iron_nugget", "chance": 0.1 },

            // ⭐ Your added output:
            { "id": "create:experience_nugget", "chance": 0.1 }
        ]
    })

    event.recipes.createCrushing(
        [
            Item.of('minecraft:netherite_scrap', 1),
            CreateItem.of('minecraft:netherite_scrap', 0.75),
            CreateItem.of('minecraft:gold_nugget', 0.80)
        ],
        'minecraft:ancient_debris'
    )

})
