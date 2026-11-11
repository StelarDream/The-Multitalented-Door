// ──────────────────────────────────────────────
// Moss Compression Recipes
// ──────────────────────────────────────────────
ServerEvents.recipes(event => {

    // Moss carpet → moss block
    event.shapeless(
        Item.of("minecraft:moss_block"),
        compact("minecraft:moss_carpet")
    )


})

function compact(input) {
    return [
        input, input, input,
        input, input, input,
        input, input, input
    ]
}