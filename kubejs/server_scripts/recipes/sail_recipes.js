const SAIL_COLORS = [
    'black', 'blue', 'brown', 'cyan', 'gray', 'green',
    'light_blue', 'light_gray', 'lime', 'magenta',
    'orange', 'pink', 'purple', 'red', 'white', 'yellow'
]

ServerEvents.recipes(event => {

    // Crafting: 3 colored silk + andesite alloy -> 4 colored sail blocks
    SAIL_COLORS.forEach(color => {
        event.shaped(`4x kubejs:${color}_sail_block`, [
            'SS',
            'SA'
        ], {
            S: `kubejs:${color}_silk`,
            A: 'create:andesite_alloy'
        })
    })

    // Coloring: 1 dye + any sail block -> colored sail block
    SAIL_COLORS.forEach(color => {
        event.shapeless(`kubejs:${color}_sail_block`, [
            `minecraft:${color}_dye`,
            Ingredient.of('#kubejs:sail_blocks')
        ])
    })

    // Fan washing: any sail block -> white sail block
    event.recipes.create.splashing('kubejs:white_sail_block', Ingredient.of('#kubejs:sail_blocks'))

    // Soap: any sail block -> white sail block
    event.shapeless('kubejs:white_sail_block', [
        'supplementaries:soap',
        Ingredient.of('#kubejs:sail_blocks')
    ])

})
