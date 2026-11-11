const COLORS = [
    "black", "blue", "brown", "cyan", "gray", "green", "light_blue", "light_gray",
    "lime", "magenta", "orange", "pink", "purple", "red", "white", "yellow"
];

const DYE_TEMPLATE = "minecraft:{color}_dye";

function expandTemplate(template, color) {
    return template.replace("{color}", color);
}

function gen_from_color(template) {
    let out = [];
    for (let color of COLORS) {
        out.push(expandTemplate(template, color));
    }
    return out;
}

function gen_from_dye(template) {
    let out = [];
    for (let color of COLORS) {
        let item = expandTemplate(template, color);
        let dye = expandTemplate(DYE_TEMPLATE, color);
        out.push({
            item: item,
            dye: dye,
            color: color
        });
    }
    return out;
}

const COLOR_GROUPS = {
    wool: {
        default: "minecraft:white_wool",
        tag: "minecraft:wool",

        items: gen_from_dye("minecraft:{color}_wool"),

        recipes: {
            remove: [],
            defaults: {
                soap: false,
                washing: false,
                dyeing: false
            }
        }
    },

    wool_carpet: {
        default: "minecraft:white_carpet",
        tag: "minecraft:wool_carpet",

        items: gen_from_dye("minecraft:{color}_carpet"),

        recipes: {
            remove: [],
            defaults: {
                soap: false,
                washing: false,
                dyeing: false
            }
        }
    },

    terracotta: {
        default: "minecraft:terracotta",
        tag: "minecraft:terracotta",

        items: [
            { item: "minecraft:terracotta", dye: null, color: "default" }
        ].concat(gen_from_dye("minecraft:{color}_terracotta")),

        recipes: {
            remove: [],
            defaults: {
                soap: false,
                washing: false,
                dyeing: false
            }
        }
    },

    concrete: {
        default: "minecraft:white_concrete",
        tag: "c:concrete",

        items: gen_from_dye("minecraft:{color}_concrete"),

        recipes: {
            remove: [],
            defaults: {
                soap: false,
                washing: false,
                dyeing: true
            }
        }
    },

    concrete_powder: {
        default: "minecraft:white_concrete_powder",
        tag: "c:concrete_powder",

        items: gen_from_dye("minecraft:{color}_concrete_powder"),

        recipes: {
            remove: [],
            defaults: {
                soap: false,
                washing: false,
                dyeing: true
            }
        }
    },

    glazed_terracotta: {
        default: "minecraft:white_glazed_terracotta",
        tag: "c:glazed_terracotta",

        items: gen_from_dye("minecraft:{color}_glazed_terracotta"),

        recipes: {
            remove: [],
            defaults: {
                soap: false,
                washing: false,
                dyeing: false
            }
        }
    },

    glass: {
        default: "minecraft:glass",

        items: [
            { item: "minecraft:glass", dye: null, color: "default" }
        ].concat(gen_from_dye("minecraft:{color}_stained_glass")),

        recipes: {
            amount: 8,
            remove: [
                "create:splashing/stained_glass"
            ].concat(gen_from_color("minecraft:{color}_stained_glass")),
            defaults: {
                soap: false,
                washing: true,
                dyeing: true
            }
        }
    },

    glass_pane: {
        default: "minecraft:glass_pane",

        items: [
            { item: "minecraft:glass_pane", dye: null, color: "default" }
        ].concat(gen_from_dye("minecraft:{color}_stained_glass_pane")),

        recipes: {
            amount: 8,
            remove: [
                "create:splashing/stained_glass_pane"
            ].concat(gen_from_color("minecraft:{color}_stained_glass_pane_from_glass_pane")),
            defaults: {
                soap: false,
                washing: true,
                dyeing: true
            }
        }
    },

    shulker_box: {
        default: "minecraft:shulker_box",
        tag: "c:shulker_boxes",

        items: [
            { item: "minecraft:shulker_box", dye: null, color: "default" }
        ].concat(gen_from_dye("minecraft:{color}_shulker_box")),

        recipes: {
            amount: 1,
            remove: ["minecraft:shulker_box_coloring"],
            defaults: {
                soap: false,
                washing: true,
                dyeing: true
            }
        }
    },

    bed: {
        default: "minecraft:white_bed",
        tag: "minecraft:beds",

        items: gen_from_dye("minecraft:{color}_bed"),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: true,
                dyeing: false
            }
        }
    },

    candle: {
        default: "minecraft:candle",
        tag: "minecraft:candles",

        items: [
            { item: "minecraft:candle", dye: null, color: "default" }
        ].concat(gen_from_dye("minecraft:{color}_candle")),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: true,
                dyeing: false
            }
        }
    },

    banner: {
        default: "minecraft:white_banner",
        tag: "minecraft:banners",

        items: gen_from_dye("minecraft:{color}_banner"),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: true,
                dyeing: true
            }
        }
    },

    sleeping_bag: {
        default: "comforts:sleeping_bag_white",
        tag: "comforts:sleeping_bags",

        items: gen_from_dye("comforts:sleeping_bag_{color}"),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: true,
                dyeing: false
            }
        }
    },

    hammock: {
        default: "comforts:hammock_white",
        tag: "comforts:hammocks",

        items: gen_from_dye("comforts:hammock_{color}"),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: true,
                dyeing: false
            }
        }
    },

    postbox: {
        default: "create:white_postbox",
        tag: "create:postboxes",

        items: gen_from_dye("create:{color}_postbox"),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: false,
                dyeing: false
            }
        }
    },

    valve_handle: {
        default: "create:copper_valve_handle",
        tag: "create:valve_handles",

        items: [
            { item: "minecraft:copper_valve_handle", dye: null, color: "default" }
        ].concat(gen_from_dye("create:{color}_valve_handles")),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: false,
                dyeing: false
            }
        }
    },

    table_cloth: {
        default: "create:white_table_cloth",
        tag: "create:dyed_table_cloths",

        items: gen_from_dye("create:{color}_table_cloth"),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: true,
                dyeing: false
            }
        }
    },

    toolbox: {
        default: "create:brown_toolbox",
        tag: "create:toolboxes",

        items: gen_from_dye("create:{color}_toolbox"),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: false,
                dyeing: false
            }
        }
    },

    seat: {
        default: "create:white_seat",
        tag: "create:seats",

        items: gen_from_dye("create:{color}_seat"),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: true,
                dyeing: false
            }
        }
    },

    shipping_container: {
        default: "create:item_vault",

        items: gen_from_dye("createdeco:{color}_shipping_container"),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: true,
                dyeing: true
            }
        }
    },

    canvas_sign: {
        default: "farmersdelight:canvas_sign",
        tag: "farmersdelight:canvas_signs",

        items: [
            { item: "farmersdelight:canvas_sign", dye: null, color: "default" }
        ].concat(gen_from_dye("farmersdelight:{color}_canvas_sign")),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: true,
                dyeing: false
            }
        }
    },

    hanging_canvas_sign: {
        default: "farmersdelight:hanging_canvas_sign",
        tag: "farmersdelight:hanging_canvas_signs",

        items: [
            { item: "farmersdelight:hanging_canvas_sign", dye: null, color: "default" }
        ].concat(gen_from_dye("farmersdelight:{color}_hanging_canvas_sign")),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: true,
                dyeing: false
            }
        }
    },

    present: {
        default: "supplementaries:present",
        tag: "supplementaries:presents",

        items: [
            { item: "supplementaries:present", dye: null, color: "default" }
        ].concat(gen_from_dye("supplementaries:present_{color}")),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: false,
                dyeing: false
            }
        }
    },

    trapped_present: {
        default: "supplementaries:trapped_present",
        tag: "supplementaries:trapped_presents",

        items: [
            { item: "supplementaries:trapped_present", dye: null, color: "default" }
        ].concat(gen_from_dye("supplementaries:trapped_present_{color}")),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: false,
                dyeing: false
            }
        }
    },

    "candle_holder/iron": {
        default: "supplementaries:candle_holder",

        items: [
            { item: "supplementaries:candle_holder", dye: null, color: "default" }
        ].concat(gen_from_dye("supplementaries:candle_holder_{color}")),

        recipes: {
            amount: 1,
            remove: gen_from_color("supplementaries:candle_holders/candle_holder_{color}_dye"),
            defaults: {
                soap: false,
                washing: true,
                dyeing: true
            }
        }
    },

    flag: {
        default: "supplementaries:flag_white",
        tag: "supplementaries:flags",

        items: gen_from_dye("supplementaries:flag_{color}"),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: true,
                dyeing: true
            }
        }
    },

    bunting: {
        default: "supplementaries:bunting_white",
        tag: "supplementaries:buntings",

        items: gen_from_dye("supplementaries:bunting_{color}"),

        recipes: {
            amount: 4,
            remove: gen_from_color("supplementaries:buntings/bunting_{color}"),
            defaults: {
                soap: false,
                washing: true,
                dyeing: true
            }
        }
    },

    awning: {
        default: "supplementaries:awning",
        tag: "supplementaries:awnings",

        items: [
            { item: "supplementaries:awning", dye: null, color: "default" }
        ].concat(gen_from_dye("supplementaries:awning_{color}")),

        recipes: {
            amount: 1,
            remove: gen_from_color("supplementaries:awnings/awning_{color}"),
            defaults: {
                soap: false,
                washing: true,
                dyeing: true
            }
        }
    },

    sack: {
        default: "supplementaries:sack",
        tag: "supplementaries:sacks",

        items: [
            { item: "supplementaries:sack", dye: null, color: "default" }
        ].concat(gen_from_dye("suppsquared:sack_{color}")),

        recipes: {
            amount: 1,
            remove: [],
            defaults: {
                soap: false,
                washing: false,
                dyeing: false
            }
        }
    },

    "candle_holder/gold": {
        default: "suppsquared:gold_candle_holder",

        items: [
            { item: "suppsquared:gold_candle_holder", dye: null, color: "default" }
        ].concat(gen_from_dye("suppsquared:gold_candle_holder_{color}")),

        recipes: {
            amount: 1,
            remove: gen_from_color("suppsquared:candle_holders/gold_candle_holder_{color}_dye"),
            defaults: {
                soap: false,
                washing: true,
                dyeing: true
            }
        }
    },

    silk: {
        default: "kubejs:white_silk",
        tag: "kubejs:silk",

        items: gen_from_dye("kubejs:{color}_silk"),

        recipes: {
            amount: 8,
            remove: [],
            defaults: {
                soap: true,
                washing: true,
                dyeing: true
            }
        }
    }
};

function normalizeGroupStructure(name, raw) {

    // defaults structure
    let defaults = raw.recipes && raw.recipes.defaults ? raw.recipes.defaults : {};

    return {
        name: name,
        tag: raw.tag ? raw.tag : "kubejs:group/" + name,
        default: raw.default ? raw.default : null,
        items: raw.items ? raw.items : [],
        recipes: {
            amount: raw.recipes && raw.recipes.amount ? raw.recipes.amount : 1,
            remove: raw.recipes && raw.recipes.remove ? raw.recipes.remove : [],
            defaults: {
                soap: defaults.soap !== undefined ? defaults.soap : true,
                washing: defaults.washing !== undefined ? defaults.washing : true,
                dyeing: defaults.dyeing !== undefined ? defaults.dyeing : true
            }
        }
    };
}

function extractColorFromDye(dye) {
    if (!dye) return null;
    return dye.replace("minecraft:", "").replace("_dye", "");
}

function normalizePairs(items) {
    let out = [];

    for (let e of items) {
        if (!Item.exists(e.item)) continue;

        // if color missing, infer it:
        let color = e.color ? e.color : extractColorFromDye(e.dye);

        out.push({
            item: e.item,
            dye: e.dye,
            color: color
        });
    }

    return out;
}


function normalizeAllGroups(raw) {
    let out = {};

    for (let name in raw) {
        let g = normalizeGroupStructure(name, raw[name]);
        g.entries = normalizePairs(g.items);
        out[name] = g;
    }
    return out;
}

const GROUPS = normalizeAllGroups(COLOR_GROUPS);

function registerGroupTags(event, groups) {
    for (let key in groups) {
        let group = groups[key];

        for (let entry of group.entries) {
            event.add(group.tag, entry.item);

            // Add dyed tags if the entry has a color
            if (entry.color) {
                event.add("c:dyed", entry.item);
                event.add("c:dyed/" + entry.color, entry.item);
            }
        }

        if (group.default && Item.exists(group.default)) {
            event.add(group.tag, group.default);
        }
    }
}

ServerEvents.tags("item", event => {
    registerGroupTags(event, GROUPS);
});

function applyRecipeRemovals(event, group) {
    for (let id of group.recipes.remove) {
        event.remove({ id: id });
    }
}

function addSoapRecipe(event, groupName, group) {
    if (!group.recipes.defaults.soap) return;
    if (!group.default) return;

    let TAG = Ingredient.of("#" + group.tag);

    event.shapeless(group.default, [
        "supplementaries:soap",
        TAG
    ]).id("kubejs:soap/" + groupName);
}

function addWashingRecipe(event, groupName, group) {
    if (!group.recipes.defaults.washing) return;
    if (!group.default) return;

    event.custom({
        type: "create:splashing",
        ingredients: [
            { tag: group.tag }   // IMPORTANT: no "#"
        ],
        results: [
            { id: group.default }
        ]
    }).id("kubejs:wash/" + groupName);
}

function addDyeingRecipes(event, groupName, group) {
    if (!group.recipes.defaults.dyeing) return;

    let TAG = Ingredient.of("#" + group.tag);
    let amount = group.recipes.amount;  // new

    for (let entry of group.entries) {
        if (!entry.dye) continue;

        // Ingredient list: N times the group tag + 1 dye
        let ingredients = [];
        for (let i = 0; i < amount; i++) {
            ingredients.push(TAG);
        }
        ingredients.push(entry.dye);

        // Output: amount copies of the item
        event.shapeless(
            Item.of(entry.item, amount), // <-- important
            ingredients
        ).id("kubejs:dye/" + groupName + "/" + entry.item.replace(":", "_"));
    }
}

ServerEvents.recipes(event => {
    for (let name in GROUPS) {
        let group = GROUPS[name];

        applyRecipeRemovals(event, group);

        addSoapRecipe(event, name, group);
        addWashingRecipe(event, name, group);
        addDyeingRecipes(event, name, group);
    }
});
