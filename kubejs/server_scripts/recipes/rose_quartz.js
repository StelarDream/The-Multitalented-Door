ServerEvents.recipes(event => {
    event.recipes.createCrushing(
        [
            Item.of("biomesoplenty:rose_quartz_chunk", 5),
            CreateItem.of("biomesoplenty:rose_quartz_chunk", 0.5)
        ],
        "biomesoplenty:rose_quartz_block"
    )

    event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": [
            {
                "item": "biomesoplenty:rose_quartz_chunk"
            }
        ],
        "results": [
            {
                "id": "create:polished_rose_quartz"
            }
        ]
    }).id("kubejs:sandpaper_polishing/rose_quartz_chunk")
})