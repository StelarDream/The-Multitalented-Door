// === Register Incomplete Smithing Template Items ===
StartupEvents.registry("item", event => {

    const TEMPLATE_IDS = [
        "minecraft:netherite_upgrade_smithing_template",
        "minecraft:sentry_armor_trim_smithing_template",
        "minecraft:vex_armor_trim_smithing_template",
        "minecraft:wild_armor_trim_smithing_template",
        "minecraft:coast_armor_trim_smithing_template",
        "minecraft:dune_armor_trim_smithing_template",
        "minecraft:wayfinder_armor_trim_smithing_template",
        "minecraft:raiser_armor_trim_smithing_template",
        "minecraft:shaper_armor_trim_smithing_template",
        "minecraft:host_armor_trim_smithing_template",
        "minecraft:ward_armor_trim_smithing_template",
        "minecraft:tide_armor_trim_smithing_template",
        "minecraft:snout_armor_trim_smithing_template",
        "minecraft:rib_armor_trim_smithing_template",
        "minecraft:eye_armor_trim_smithing_template",
        "minecraft:spire_armor_trim_smithing_template",
        "minecraft:bolt_armor_trim_smithing_template",
        "minecraft:flow_armor_trim_smithing_template",
        "minecraft:silence_armor_trim_smithing_template",
        "create_dragons_plus:blaze_upgrade_smithing_template",
        "supplementaries:blast_armor_trim_smithing_template"
    ];

    TEMPLATE_IDS.forEach(id => {
        const clean = id.split(":")[1];
        const incomplete = `incomplete_${clean}`;

        event.create(`kubejs:${incomplete}`)
            .displayName("Incomplete " + clean.replace(/_/g, " "))
    });
});

