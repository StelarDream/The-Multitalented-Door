const SAIL_TAG_COLORS = [
    'black', 'blue', 'brown', 'cyan', 'gray', 'green',
    'light_blue', 'light_gray', 'lime', 'magenta',
    'orange', 'pink', 'purple', 'red', 'white', 'yellow'
]

ServerEvents.tags('item', event => {
    SAIL_TAG_COLORS.forEach(color => {
        const id = `kubejs:${color}_sail_block`

        event.add('kubejs:sail_blocks', id)
        event.add('c:dyed', id)
        event.add(`c:dyed/${color}`, id)
        event.add('create:windmill_sails', id)
    })
})

ServerEvents.tags('block', event => {
    SAIL_TAG_COLORS.forEach(color => {
        event.add('create:windmill_sails', `kubejs:${color}_sail_block`)
    })
})
