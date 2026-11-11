ServerEvents.recipes(event => {

    const woolReplaceRecipes = [
        "create:crafting/kinetics/nozzle",
        "create:crafting/kinetics/white_sail",
        "minecraft:workbench/loom_table",
        "create:crafting/kinetics/package_filter",
        "minecraft:painting",
        "create:crafting/kinetics/attribute_filter",
        "create:crafting/kinetics/filter"
    ];

    woolReplaceRecipes.forEach(id => {
        event.replaceInput(
            { "id": id },
            '#minecraft:wool',               // any wool block ingredient
            "#kubejs:silk"           // our silk tag
        );
    });

});

const colors = [
    "black", "blue", "brown", "cyan", "gray", "green", "light_blue", "light_gray", "lime",
    "magenta", "orange", "pink", "purple", "red", "white", "yellow"
];

ServerEvents.recipes(event => {

    colors.forEach(color => {

        const W = `kubejs:${color}_silk`;
        const S = "minecraft:string";
        const T = "minecraft:stick";
        const P = "#minecraft:planks";
        const L = "#minecraft:wooden_slabs";
        const A = "create:andesite_alloy";

        // -------------------------------------------------------
        // 1) SUPPLEMENTARIES – BUNTING
        // ID: supplementaries:buntings/bunt_<color>_2
        // Result: bunting_<color> x4
        // Pattern:
        // S S S
        // W W W
        //   W
        // -------------------------------------------------------
        event.remove({ id: `supplementaries:buntings/bunting_${color}_2` });
        event.shaped(
            Item.of(`supplementaries:bunting_${color}`, 4),
            [
                "SSS",
                "WWW",
                " W "
            ],
            {
                S: S,
                W: W
            }
        );

        // -------------------------------------------------------
        // 2) COMFORTS – SLEEPING BAG
        // ID: comforts:sleeping_bag_<color>
        // Pattern:
        // W
        // W
        // W
        // -------------------------------------------------------
        event.remove({ id: `comforts:sleeping_bag_${color}` });
        event.shaped(
            Item.of(`comforts:sleeping_bag_${color}`),
            [
                "W",
                "W",
                "W"
            ],
            { W: W }
        );

        // -------------------------------------------------------
        // 3) MINECRAFT – BANNER
        // ID: minecraft:<color>_banner
        // Pattern:
        // WWW
        // WWW
        //  T
        // -------------------------------------------------------
        event.remove({ id: `minecraft:${color}_banner` });
        event.shaped(
            Item.of(`minecraft:${color}_banner`),
            [
                "WWW",
                "WWW",
                " T "
            ],
            { W: W, T: T }
        );

        // -------------------------------------------------------
        // 4) MINECRAFT – BED
        // ID: minecraft:<color>_bed
        // Pattern:
        // WWW
        // PPP
        // -------------------------------------------------------
        event.remove({ id: `minecraft:${color}_bed` });
        event.shaped(
            Item.of(`minecraft:${color}_bed`),
            [
                "WWW",
                "PPP"
            ],
            { W: W, P: P }
        );

        // -------------------------------------------------------
        // 5) CREATE – SEAT
        // ID: create:crafting/kinetics/<color>_seat
        // Pattern: WL
        // -------------------------------------------------------
        event.remove({ id: `create:crafting/kinetics/${color}_seat` });
        event.shaped(
            Item.of(`create:${color}_seat`),
            [
                "WL"
            ],
            { W: W, L: L }
        );

        // -------------------------------------------------------
        // 6) CREATE – TABLE CLOTH
        // ID: create:crafting/logistics/<color>_table_cloth
        // Pattern: WWA → result x2
        // -------------------------------------------------------
        event.remove({ id: `create:crafting/logistics/${color}_table_cloth` });
        event.shaped(
            Item.of(`create:${color}_table_cloth`, 2),
            [
                "WWA"
            ],
            { W: W, A: A }
        );

        // -------------------------------------------------------
        // 7) SUPPLEMENTARIES – FLAG
        // ID: supplementaries:flags/flag_<color>
        // Pattern:
        // WWW
        // WWW
        // T
        // -------------------------------------------------------
        event.remove({ id: `supplementaries:flags/flag_${color}` });
        event.shaped(
            Item.of(`supplementaries:flag_${color}`),
            [
                "WWW",
                "WWW",
                "T  "
            ],
            { W: W, T: T }
        );

        // -------------------------------------------------------
        // 8) MINECRAFT – CARPET
        // ID: minecraft:<color>_carpet
        // Pattern:
        // WW  → result x2
        // -------------------------------------------------------
        event.shaped(
            Item.of(`minecraft:${color}_carpet`, 2),
            [
                "WW"
            ],
            { W: W }
        );

        // -------------------------------------------------------
        // 9) COMFORTS – HAMMOCK
        // ID: comforts:hammock_<color>
        // Pattern:
        //  T 
        // SWS
        //  T
        // -------------------------------------------------------
        event.remove({ id: `comforts:hammock_${color}` });
        event.shaped(
            Item.of(`comforts:hammock_${color}`),
            [
                " T ",
                "SWS",
                " T "
            ],
            { W: W, S: S, T: T }
        );

    });
});
