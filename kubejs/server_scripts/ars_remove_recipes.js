// ============================================================
// ars_remove_recipes.js
// Removes ALL crafting recipes for Ars Nouveau automation,
// charm, relay, sourcelink, turret, and teleportation items.
//
// Place in: kubejs/server_scripts/
// Requires: KubeJS + KubeJS Ars Nouveau
// ============================================================

ServerEvents.recipes(event => {

    // --------------------------------------------------------
    // TARGET ITEMS
    // Full list of automation/charm/relay/teleport item IDs.
    // --------------------------------------------------------
    const AUTOMATION_ITEMS = global.AUTOMATION_ITEMS;

    // --------------------------------------------------------
    // 1. VANILLA CRAFTING TABLE RECIPES
    // Removes any shaped/shapeless recipes outputting these items.
    // --------------------------------------------------------
    AUTOMATION_ITEMS.forEach(item => {
        event.remove({ output: item });
    });

    // --------------------------------------------------------
    // 2. ENCHANTING APPARATUS RECIPES
    // KubeJS Ars Nouveau exposes these via the mod's recipe type.
    // --------------------------------------------------------
    AUTOMATION_ITEMS.forEach(item => {
        event.remove({ output: item, type: "ars_nouveau:enchanting_apparatus" });
    });

    // --------------------------------------------------------
    // 3. IMBUEMENT CHAMBER RECIPES
    // --------------------------------------------------------
    AUTOMATION_ITEMS.forEach(item => {
        event.remove({ output: item, type: "ars_nouveau:imbuement" });
    });

    // --------------------------------------------------------
    // 4. GLYPH RECIPES (Scribe's Table)
    // Removes the Blink teleport glyph from the Scribe's Table.
    // Other glyphs (combat, utility) are left intact.
    // --------------------------------------------------------
    event.remove({ output: "ars_nouveau:glyph_blink", type: "ars_nouveau:glyph" });

    console.log("[ARS REMOVAL] All automation, charm, relay, sourcelink, turret, and teleport recipes removed.");
});
