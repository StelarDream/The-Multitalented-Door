ServerEvents.recipes(event => {

    event.remove({ id: "minecraft:netherite_upgrade_smithing_template" });
    event.remove({ id: "minecraft:sentry_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:vex_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:wild_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:coast_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:dune_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:wayfinder_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:raiser_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:shaper_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:host_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:ward_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:tide_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:snout_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:rib_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:eye_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:spire_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:bolt_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:flow_armor_trim_smithing_template" });
    event.remove({ id: "minecraft:silence_armor_trim_smithing_template" });
    event.remove({ id: "create_dragons_plus:crafting/blaze_upgrade_smithing_template" });
    event.remove({ id: "supplementaries:blast_armor_trim_smithing_template" })

    const DATA = {
        "minecraft:netherite_upgrade_smithing_template": {
            material: "#c:netherracks",
            plate: "minecraft:diamond"
        },
        "minecraft:sentry_armor_trim_smithing_template": {
            material: "#c:cobblestones/normal",
            plate: "minecraft:diamond"
        },
        "minecraft:vex_armor_trim_smithing_template": {
            material: "#c:cobblestones/normal",
            plate: "minecraft:diamond"
        },
        "minecraft:wild_armor_trim_smithing_template": {
            material: "#c:cobblestones/mossy",
            plate: "minecraft:diamond"
        },
        "minecraft:coast_armor_trim_smithing_template": {
            material: "#c:cobblestones/normal",
            plate: "minecraft:diamond"
        },
        "minecraft:dune_armor_trim_smithing_template": {
            material: "#c:sandstone/uncolored_blocks",
            plate: "minecraft:diamond"
        },
        "minecraft:wayfinder_armor_trim_smithing_template": {
            material: "#minecraft:terracotta",
            plate: "minecraft:diamond"
        },
        "minecraft:raiser_armor_trim_smithing_template": {
            material: "#minecraft:terracotta",
            plate: "minecraft:diamond"
        },
        "minecraft:shaper_armor_trim_smithing_template": {
            material: "#minecraft:terracotta",
            plate: "minecraft:diamond"
        },
        "minecraft:host_armor_trim_smithing_template": {
            material: "#minecraft:terracotta",
            plate: "minecraft:diamond"
        },
        "minecraft:ward_armor_trim_smithing_template": {
            material: "#c:cobblestones/deepslate",
            plate: "minecraft:diamond"
        },
        "minecraft:tide_armor_trim_smithing_template": {
            material: "minecraft:prismarine",
            plate: "minecraft:diamond"
        },
        "minecraft:snout_armor_trim_smithing_template": {
            material: "minecraft:blackstone",
            plate: "minecraft:diamond"
        },
        "minecraft:rib_armor_trim_smithing_template": {
            material: "#c:netherracks",
            plate: "minecraft:diamond"
        },
        "minecraft:eye_armor_trim_smithing_template": {
            material: "#c:end_stones",
            plate: "minecraft:diamond"
        },
        "minecraft:spire_armor_trim_smithing_template": {
            material: "minecraft:purpur_block",
            plate: "minecraft:diamond"
        },
        "minecraft:bolt_armor_trim_smithing_template": {
            material: "minecraft:copper_block",
            plate: "minecraft:diamond"
        },
        "minecraft:flow_armor_trim_smithing_template": {
            material: "minecraft:breeze_rod",
            plate: "minecraft:diamond"
        },
        "minecraft:silence_armor_trim_smithing_template": {
            material: "#c:cobblestones/deepslate",
            plate: "minecraft:diamond"
        },
        "create_dragons_plus:blaze_upgrade_smithing_template": {
            material: "#c:netherracks",
            plate: "minecraft:blaze_rod"
        },
        "supplementaries:blast_armor_trim_smithing_template": {
            material: "#c:cobblestones/normal",
            plate: "minecraft:diamond"
        }
    };

    const toIngredient = (value) => {
        // Must return a *single object*, NOT array
        if (value.startsWith("#")) {
            return { tag: value.substring(1) };
        }
        return { item: value };
    };

    for (let entry of Object.entries(DATA)) {

        let _tmpl_id = entry[0];
        let _tmpl_cfg = entry[1];

        let _tmpl_key = _tmpl_id.split(":")[1];
        let _tmpl_incomplete = `kubejs:incomplete_${_tmpl_key}`;

        let recipe = {
            type: "create:sequenced_assembly",

            ingredient: [
                { item: _tmpl_id }
            ],

            transitional_item: { id: _tmpl_incomplete },

            loops: 4,

            results: [
                { id: _tmpl_id, count: 2 }
            ],

            sequence: [
                {
                    type: "create:filling",
                    ingredients: [
                        { item: _tmpl_incomplete },
                        {
                            type: "neoforge:single",
                            fluid: "minecraft:lava",
                            amount: 250
                        }
                    ],
                    results: [
                        { id: _tmpl_incomplete }
                    ]
                },
                {
                    type: "create:deploying",
                    ingredients: [
                        { item: _tmpl_incomplete },
                        toIngredient(_tmpl_cfg.material)
                    ],
                    results: [
                        { id: _tmpl_incomplete }
                    ]
                },
                {
                    type: "create:deploying",
                    ingredients: [
                        { item: _tmpl_incomplete },
                        toIngredient(_tmpl_cfg.plate)
                    ],
                    results: [
                        { id: _tmpl_incomplete }
                    ]
                },
                {
                    type: "create:pressing",
                    ingredients: [
                        { item: _tmpl_incomplete }
                    ],
                    results: [
                        { id: _tmpl_incomplete }
                    ]
                }
            ]
        };

        event.custom(recipe).id(`kubejs:smithing/${_tmpl_key}`);
    }

});
