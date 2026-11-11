ServerEvents.tags('item', event => {
    // Main dusts category
    event.add('c:dusts', [
        'kubejs:lime_dust',
        'kubejs:salt_dust',
        'kubejs:sulphur_dust',
        'kubejs:coal_dust'
    ])

    // Subtags
    event.add('c:dusts/lime', 'kubejs:lime_dust')
    event.add('c:dusts/salt', 'kubejs:salt_dust')
    event.add('c:dusts/sulphur', 'kubejs:sulphur_dust')
    event.add('c:dusts/coal', 'kubejs:coal_dust')
})
