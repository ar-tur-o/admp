// kubejs/server_scripts/ma_balance.js
// Removes Supremium and Awakened Supremium

ServerEvents.recipes(event => {

    // Remove Supremium
    event.remove({ mod: 'mysticalagriculture', output: /.*supremium.*/ })

    // Remove Awakened Supremium
    event.remove({ mod: 'mysticalagriculture', output: /.*awakened.*/ })
    event.remove({ output: 'mysticalagriculture:cognizant_dust' })
    event.remove({ output: 'mysticalagriculture:awakening_altar' })
    event.remove({ output: 'mysticalagriculture:awakening_pedestal' })
    event.remove({ output: 'mysticalagriculture:essence_vessel' })

    console.log('[TwoWeeks] Mystical Agriculture - Supremium and Awakened Supremium removed')
})
