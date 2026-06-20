// ============================================================
// ars_remove_loot.js
// Strips Ars Nouveau automation items from ALL loot tables.
//
// Place in: kubejs/server_scripts/
// Requires: KubeJS + LootJS
// ============================================================

LootJS.modifiers(event => {

    // Only include items that actually exist in AN 5.x / 1.21.1.
    // (source_relay variants and item_scrolls don't exist in this version)
    const AUTOMATION_ITEMS = global.AUTOMATION_ITEMS;

    // Remove from each loot type individually per item.
    // Rhino doesn't support spread syntax, so we loop instead.
    AUTOMATION_ITEMS.forEach(itemId => {
        event
            .addTableModifier(LootType.CHEST)
            .removeLoot(itemId);

        event
            .addTableModifier(LootType.ENTITY)
            .removeLoot(itemId);

        event
            .addTableModifier(LootType.BLOCK)
            .removeLoot(itemId);
    });

    console.log("[ARS REMOVAL] Automation/teleport items removed from all loot tables.");
});
