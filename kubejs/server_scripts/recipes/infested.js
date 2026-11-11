ServerEvents.recipes(event => {
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            { "item": "minecraft:infested_stone" }
        ],
        "result": [
            {
                "item": {
                    "id": "minecraft:infested_cobblestone",
                    "count": 1
                }
            }
        ],
        "tool": {
            "type": "farmersdelight:item_ability",
            "action": "pickaxe_dig"
        }
    });
});