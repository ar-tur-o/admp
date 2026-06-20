// ============================================================
// ars_remove_trades.js
// Removes Ars Nouveau automation items from all villager trades.
//
// Place in: kubejs/server_scripts/
// Requires: KubeJS + MoreJS
//
// NOTE: Only includes item IDs confirmed to exist in AN 5.x 1.21.1.
// MoreJS crashes if removeTrades is called with a non-existent item.
// ============================================================

MoreJS.villagerTrades(event => {

    const AUTOMATION_ITEMS = global.AUTOMATION_ITEMS;

    AUTOMATION_ITEMS.forEach(item => {
        event.removeTrades({ output: item });
    });

    console.log("[ARS REMOVAL] Automation/teleport items removed from all villager trades.");
});
