const DYE_TO_COLOR = {
    'minecraft:black_dye':      'black',
    'minecraft:blue_dye':       'blue',
    'minecraft:brown_dye':      'brown',
    'minecraft:cyan_dye':       'cyan',
    'minecraft:gray_dye':       'gray',
    'minecraft:green_dye':      'green',
    'minecraft:light_blue_dye': 'light_blue',
    'minecraft:light_gray_dye': 'light_gray',
    'minecraft:lime_dye':       'lime',
    'minecraft:magenta_dye':    'magenta',
    'minecraft:orange_dye':     'orange',
    'minecraft:pink_dye':       'pink',
    'minecraft:purple_dye':     'purple',
    'minecraft:red_dye':        'red',
    'minecraft:white_dye':      'white',
    'minecraft:yellow_dye':     'yellow',
    'supplementaries:soap':     'white'
}

BlockEvents.rightClicked('kubejs:black_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:blue_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:brown_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:cyan_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:gray_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:green_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:light_blue_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:light_gray_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:lime_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:magenta_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:orange_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:pink_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:purple_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:red_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:white_sail_block', onSailClicked)
BlockEvents.rightClicked('kubejs:yellow_sail_block', onSailClicked)

function onSailClicked(event) {
    const itemId = event.item.id
    const color = DYE_TO_COLOR[itemId]
    if (!color) return

    const targetBlock = `kubejs:${color}_sail_block`
    if (event.block.id === targetBlock) return

    event.block.set(targetBlock)
    event.cancel()
}
