ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:honeycomb"
            },
            {
                "type": "neoforge:components",
                "amount": 1000,
                "components": {
                    "create:potion_fluid_bottle_type": "regular",
                    "minecraft:potion_contents": {
                        "potion": "minecraft:awkward"
                    }
                },
                "fluids": "create:potion"
            }
        ],
        "results": [
            {
                "id": "create:potion",               // REQUIRED
                "type": "neoforge:components",
                "amount": 1000,
                "components": {
                    "create:potion_fluid_bottle_type": "regular",
                    "minecraft:potion_contents": {
                        "potion": "minecraft:luck"
                    }
                },
                "fluids": "create:potion"
            }
        ]
    });

    event.custom({
        "type": "create:compacting",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:honey_block"
            }
        ],
        "results": [
            {
                "id": "minecraft:honeycomb",
                "count": 4
            }
        ]
    });

    event.remove({ id: "create:splashing/sand" })
    event.custom({
        "type": "create:compacting",
        "heat_requirement": "none",
        "ingredients": [
            { "item": "minecraft:sand" },
            { "item": "minecraft:sand" },
            { "type": "neoforge:single", "amount": 250, "fluid": "minecraft:water" }
        ],
        "processing_time": 120,
        "results": [
            { "id": "minecraft:clay", "count": 2 }
        ]
    });

    event.remove({ id: "create:milling/dripstone_block" })
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "minecraft:dripstone_block"
            }
        ],
        "processing_time": 150,
        "results": [
            {
                "id": "kubejs:salt_dust",
                "count": 2
            },
            {
                "id": "kubejs:salt_dust",
                "count": 2,
                "chance": 0.50
            },
            {
                "id": "minecraft:iron_nugget",
                "count": 1,
                "chance": 0.15
            }
        ]
    })

    event.custom({
        "type": "create:splashing",
        "ingredients": [
            { "item": "minecraft:clay_ball" }
        ],
        "results": [
            {
                "id": "kubejs:salt_dust",
                "count": 2,
                "chance": 0.10
            },
            {
                "id": "kubejs:salt_dust",
                "count": 1,
                "chance": 0.05
            },
            {
                "id": "minecraft:iron_nugget",
                "count": 1,
                "chance": 0.02
            }
        ]
    })

    event.custom({
        "type": "create:splashing",
        "ingredients": [
            { "item": "minecraft:clay" }
        ],
        "results": [
            {
                "id": "kubejs:salt_dust",
                "count": 4,
                "chance": 0.20
            },
            {
                "id": "kubejs:salt_dust",
                "count": 2,
                "chance": 0.10
            },
            {
                "id": "minecraft:iron_nugget",
                "count": 2,
                "chance": 0.04
            }
        ]
    })
    event.remove({ id: "create:milling/coal" })
    event.custom({
        "type": "create:milling",
        "ingredients": [
            { "item": "minecraft:coal" }
        ],
        "processing_time": 100,
        "results": [
            {
                "id": "kubejs:coal_dust",
                "count": 4
            },
            {
                "id": "kubejs:coal_dust",
                "count": 1,
                "chance": 0.25
            },
            {
                "id": "minecraft:gray_dye",
                "count": 1,
                "chance": 0.20
            },
            {
                "id": "kubejs:sulphur_dust",
                "count": 1,
                "chance": 0.15
            }
        ]
    })

    event.remove({ id: "create:milling/charcoal" })
    event.custom({
        "type": "create:milling",
        "ingredients": [
            { "item": "minecraft:charcoal" }
        ],
        "processing_time": 100,
        "results": [
            {
                "id": "kubejs:coal_dust",
                "count": 2
            },
            {
                "id": "kubejs:coal_dust",
                "count": 2,
                "chance": 0.25
            },
            {
                "id": "minecraft:gray_dye",
                "count": 2,
                "chance": 0.10
            },
            {
                "id": "kubejs:sulphur_dust",
                "count": 1,
                "chance": 0.20
            }
        ]
    })

    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "c:dusts/coal"
            },
            {
                "type": "neoforge:single",
                "amount": 200,
                "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "amount": 200,
                "id": "create_dragons_plus:black_dye"
            }
        ]
    })


    event.custom({
        "type": "create:splashing",
        "ingredients": [
            { "item": "minecraft:gunpowder" }
        ],
        "results": [
            {
                "id": "kubejs:coal_dust",
                "count": 1,
                "chance": 0.40
            },
            {
                "id": "minecraft:bone_meal",
                "count": 1,
                "chance": 0.60
            },
            {
                "id": "kubejs:sulphur_dust",
                "count": 1,
                "chance": 0.20
            }
        ]
    })

    event.shapeless(
        Item.of('minecraft:gunpowder', 4),
        [
            'kubejs:coal_dust',
            'kubejs:coal_dust',
            'minecraft:bone_meal',
            'minecraft:bone_meal',
            'minecraft:bone_meal',
            'kubejs:sulphur_dust'
        ]
    );

    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            { "item": "kubejs:salt_dust" },
            { "item": "kubejs:salt_dust" },
            { "item": "kubejs:salt_dust" },
            { "item": "kubejs:salt_dust" },
            { "item": "kubejs:sulphur_dust" },
            { "item": "minecraft:redstone" },
            {
                "id": "create:potion",               // REQUIRED
                "type": "neoforge:components",
                "amount": 250,
                "components": {
                    "create:potion_fluid_bottle_type": "regular",
                    "minecraft:potion_contents": {
                        "potion": "minecraft:luck"
                    }
                },
                "fluids": "create:potion"
            }
        ],
        "results": [
            {
                "id": "minecraft:lapis_lazuli",
                "count": 5
            },
            {
                "id": "minecraft:lapis_lazuli",
                "count": 2,
                "chance": 0.50
            }
        ]
    })

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            { "item": "kubejs:sulphur_dust" },
            { "item": "minecraft:nether_wart" },
            { "type": "neoforge:single", "fluid": "minecraft:lava", "amount": 250 }
        ],
        "results": [
            { "id": "minecraft:netherrack", "count": 4 }
        ]
    })
});