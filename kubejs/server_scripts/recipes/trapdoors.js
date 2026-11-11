// ──────────────────────────────────────────────
// Trapdoor Overrides
// ──────────────────────────────────────────────
ServerEvents.recipes(event => {

    // Remove vanilla & supplementary trapdoors
    event.remove({ id: 'supplementaries:gold_trapdoor' })
    event.remove({ id: 'minecraft:iron_trapdoor' })

    // Gold trapdoor (2×2 → 2)
    event.shaped(
        Item.of('supplementaries:gold_trapdoor', 2),
        ['II','II'],
        { I: 'minecraft:gold_ingot' }
    )

    // Iron trapdoor (2×2 → 2)
    event.shaped(
        Item.of('minecraft:iron_trapdoor', 2),
        ['II','II'],
        { I: 'minecraft:iron_ingot' }
    )
})
