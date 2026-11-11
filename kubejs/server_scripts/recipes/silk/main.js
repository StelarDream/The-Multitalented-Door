ServerEvents.recipes(event => {
    event.remove({ id: "minecraft:white_wool_from_string" })

    let colors = [
        "black",
        "blue",
        "brown",
        "cyan",
        "gray",
        "green",
        "light_blue",
        "light_gray",
        "lime",
        "magenta",
        "orange",
        "pink",
        "purple",
        "red",
        "white",
        "yellow"
    ];

    // ------------------------------------------------------------
    // 1) WHITE SILK BASE
    // ------------------------------------------------------------

    event.shapeless("4x kubejs:white_silk", [
        "minecraft:string",
        "minecraft:string",
        "minecraft:string",
        "minecraft:string"
    ]);


    // ------------------------------------------------------------
    // 2) 4 silk -> wool
    // ------------------------------------------------------------

    colors.forEach(color => {
        event.shapeless(`minecraft:${color}_wool`, [
            `kubejs:${color}_silk`,
            `kubejs:${color}_silk`,
            `kubejs:${color}_silk`,
            `kubejs:${color}_silk`
        ]);
    });

    // ------------------------------------------------------------
    // 4) MILLING
    // ------------------------------------------------------------

    // Milling any silk (tag), not each item individually
    event.recipes.createMilling(
        [
            CreateItem.of("minecraft:string", 0.5),
        ],
        Ingredient.of("#kubejs:silk")
    ).processingTime(50);

    // ------------------------------------------------------------
    // 5) CUTTING (Farmer's Delight)
    // ------------------------------------------------------------
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "kubejs:silk" }],
        result: [
            { item: { id: "minecraft:string", count: 2 } }
        ],
        tool: { tag: "c:tools/shear" }
    });

    colors.forEach(color => {
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [{ item: `minecraft:${color}_wool` }],
            result: [
                { item: { id: `kubejs:${color}_silk`, count: 4 } }
            ],
            tool: { tag: "c:tools/shear" }
        });
    });

});
