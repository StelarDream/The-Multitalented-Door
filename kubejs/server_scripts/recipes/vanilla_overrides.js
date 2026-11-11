// ──────────────────────────────────────────────
// Vanilla Recipe Removals & Overrides
// ──────────────────────────────────────────────
ServerEvents.recipes(event => {

    // Rotten Flesh → Leather
    event.smoking('minecraft:leather', 'minecraft:rotten_flesh')

    // Lanterns
    event.remove({ id: "minecraft:lantern" })
    event.shaped(Item.of("minecraft:lantern", 8), ["III", "ISI", "III"], {
        I: "minecraft:iron_nugget",
        S: "minecraft:torch"
    })

    event.remove({ id: "minecraft:soul_lantern" })
    event.shaped(Item.of("minecraft:soul_lantern", 4), ["III", "ISI", "III"], {
        I: "minecraft:iron_nugget",
        S: "minecraft:soul_torch"
    })

    // Chains
    event.remove({ id: "minecraft:chain" })
    event.remove({ id: "create:crafting/appliances/chain_from_zinc" })

    event.shaped(Item.of("minecraft:chain", 16), ["I", "S", "I"], {
        I: "minecraft:iron_nugget",
        S: "minecraft:iron_ingot"
    })

    event.shaped(Item.of("minecraft:chain", 16), ["I", "S", "I"], {
        I: "create:zinc_nugget",
        S: "create:zinc_ingot"
    })

    // Arrow override (stick version)
    event.remove({ id: "minecraft:arrow" })
    event.shaped(Item.of("minecraft:arrow", 8), ["A", "B", "C"], {
        A: "minecraft:flint",
        B: "minecraft:stick",
        C: "minecraft:feather"
    })

    // Arrow variant (paper-based)
    event.shaped(Item.of("minecraft:arrow", 8), ["A", "B", "C"], {
        A: "minecraft:flint",
        B: "minecraft:stick",
        C: "minecraft:paper"
    })

    // Logs → Chests (8 logs → 4 chests)
    event.shaped(Item.of("minecraft:chest", 4), ["LLL", "L L", "LLL"], {
        L: "#minecraft:logs"
    })

    event.replaceInput(
        { "id": "create:crafting/kinetics/rope_pulley" },
        '#minecraft:wool',
        "#c:ropes"
    );

    event.shapeless(
        "create:placard",
        [
            "#createdeco:placards",
            "minecraft:white_dye"
        ]
    )



    let LampIds = [
        "supplementaries:stone_lamp",
        "supplementaries:blackstone_lamp",
        "supplementaries:deepslate_lamp",
        "supplementaries:end_stone_lamp",
    ]

    let LampIds_Materials = [
        "minecraft:stone",
        "minecraft:blackstone",
        "minecraft:deepslate",
        "minecraft:end_stone",
    ]

    LampIds.forEach((lampId, i) => {
        let material = LampIds_Materials[i]

        event.remove({ output: lampId })

        event.shaped(Item.of(lampId, 8), [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: material,
            B: "minecraft:torch"
        })
    })

    // 1️⃣ Remove the vanilla smelting recipe
    event.remove({
        id: "minecraft:smooth_stone"
    })

    // 2️⃣ Add stonecutter recipe (with explicit ID)
    event.stonecutting(
        "minecraft:smooth_stone",
        "minecraft:stone"
    ).id("kubejs:stonecutting/stone_to_smooth_stone")
})
