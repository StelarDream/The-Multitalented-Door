// ──────────────────────────────────────────────
// Quiver & Other Supplementaries Items
// ──────────────────────────────────────────────
ServerEvents.recipes(event => {

    event.shaped(
        Item.of("supplementaries:quiver", 1),
        [
            " AB",
            "CD ",
            "D  "
        ],
        {
            A: "minecraft:iron_nugget",
            B: "minecraft:string",
            C: "#c:ropes",
            D: "minecraft:leather"
        }
    )
})
