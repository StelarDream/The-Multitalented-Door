const SAIL_COLORS = [
    'black', 'blue', 'brown', 'cyan', 'gray', 'green',
    'light_blue', 'light_gray', 'lime', 'magenta',
    'orange', 'pink', 'purple', 'red', 'white', 'yellow'
]

StartupEvents.registry('block', event => {
    SAIL_COLORS.forEach(color => {
        event.create(`${color}_sail_block`)
            .displayName(color.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) + ' Sail')
    })
})

