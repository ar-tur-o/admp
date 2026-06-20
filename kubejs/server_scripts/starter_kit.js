// kubejs/server_scripts/starter_kit.js
// Gives every player a starter kit on their very first join only

PlayerEvents.loggedIn(event => {
    const player = event.player
    const data = player.persistentData

    // Only run once per player — flag stored in persistent NBT
    if (data.getBoolean('starter_kit_given')) return

    // === STARTER KIT ITEMS ===

    // Navigation
    player.give(Item.of('map_atlases:atlas'))          // Atlas for mapping
    player.give(Item.of('minecraft:lead').withCount(2))  

    // thirst
    player.give(Item.of('legendarysurvivaloverhaul:canteen').withCount(1))  // Fill this with water ASAP

    // injuries from fall damage etc
    player.give(Item.of('legendarysurvivaloverhaul:plaster').withCount(2))

    // Basic survival buffer
    player.give(Item.of('legendarysurvivaloverhaul:snow_helmet').withCount(1))

    // Mark as given so it never triggers again
    data.putBoolean('starter_kit_given', true)

    // Welcome message
    player.tell(Text.green('Welcome! You\'ve been given a starter kit. Stay warm, stay hydrated, and watch your step!'))
    player.tell(Text.red('Several changes to this modpack include:'))
    player.tell(Text.white('- 3:1 Nether Ratio'))
    player.tell(Text.white('- Disabled Elytra Flight'))
    player.tell(Text.white('- Removed Ars Nouveau automation'))
    
    player.tell(Text.red('Hint: Use a cartography table and paper to expand your map!'))

})
