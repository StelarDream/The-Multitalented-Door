// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('item', event => {

    // --- Basic Powders ---

    event.create('salt_dust')
        .displayName('Salt Dust')

    event.create('sulphur_dust')
        .displayName('Sulphur Dust')

    event.create('ender_capsule')
        .displayName('Ender Capsule')

    event.create('coal_dust')
        .displayName('Coal Dust')
        .burnTime(800)
});