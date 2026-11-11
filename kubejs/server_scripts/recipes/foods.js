// ──────────────────────────────────────────────
// Food & Cooking Recipes
// ──────────────────────────────────────────────
ServerEvents.recipes(event => {

    // Cookies (custom dough tag)
    event.shapeless(Item.of("farmersdelight:honey_cookie", 8), [
        "minecraft:honey_bottle",
        "#c:foods/dough"
    ])

    event.shapeless(Item.of("minecraft:cookie", 8), [
        "minecraft:cocoa_beans",
        "#c:foods/dough"
    ])

    event.shapeless(Item.of("farmersdelight:sweet_berry_cookie", 8), [
        "minecraft:sweet_berries",
        "#c:foods/dough"
    ])

    // Pie crust & doughs
    event.shaped(Item.of("farmersdelight:pie_crust", 2), ["ABA"," A "], {
        A: "#c:flours",
        B: "#c:drinks/milk"
    })

    event.shapeless(Item.of("farmersdelight:wheat_dough", 3), [
        "#c:flours",
        "#c:flours",
        "#c:eggs"
    ])

    // Brewin & chewin
    event.remove({ id: "brewinandchewin:cooking/fiery_fondue_pot"})

    // Re-add corrected fiery fondue pot recipe (use drinks milk tag)
    event.custom({
        type: "farmersdelight:cooking",
        container: { count: 1, id: "minecraft:cauldron" },
        cookingtime: 400,
        experience: 2.0,
        ingredients: [
            { item: "farmersdelight:tomato_sauce" },
            { tag: "c:crops/potato" },
            { tag: "c:drinks/milk" },
            { item: "brewinandchewin:scarlet_cheese_wheel" },
            { item: "farmersdelight:ham" },
            { tag: "c:foods/bread" }
        ],
        recipe_book_tab: "meals",
        result: { count: 1, id: "brewinandchewin:fiery_fondue_pot" }
    }).id('brewinandchewin:cooking/fiery_fondue_pot')


    // Apple Pie
    event.shaped(Item.of("farmersdelight:apple_pie", 1), [
        " A ",
        "BBB",
        "CDC"
    ], {
        A: "#c:foods/dough",
        B: "minecraft:apple",
        C: "minecraft:sugar",
        D: "farmersdelight:pie_crust"
    })
})
