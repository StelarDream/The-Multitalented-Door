ServerEvents.recipes(event => {
    event.remove({ id: 'supplementaries:daub' })
    event.shapeless('supplementaries:daub 4', ['minecraft:mud', 'minecraft:mud', 'minecraft:mud', '#supplementaries:straw'])

    event.recipes.create.compacting(Item.of('supplementaries:daub', 6), [
        'minecraft:dirt',
        'minecraft:dirt',
        'minecraft:dirt',
        'minecraft:dirt',
        Ingredient.of('#supplementaries:straw'),
        Fluid.water(500)
    ])
})
