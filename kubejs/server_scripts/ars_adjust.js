ServerEvents.recipes(event => {
    // Remove defaults
    event.remove({ output: "ars_nouveau:apprentice_spell_book" });
    event.remove({ output: "ars_nouveau:archmage_spell_book" });

    // --- Apprentice Spellbook ---
    // Row 1: Novice Book | Obsidian      | Diamond
    // Row 2: Diamond     | Diamond       | Quartz Block
    // Row 3: Quartz Block| Monstrous Horn| Brass Ingot
    event.shaped("ars_nouveau:apprentice_spell_book", [
        "EBE",
        "DAD",
        "GFG"
    ], {
        A: "ars_nouveau:novice_spell_book",
        B: "minecraft:obsidian",
        D: "minecraft:diamond",
        E: "minecraft:quartz_block",
        F: "cataclysm:monstrous_horn",
        G: "create:brass_ingot",
    });

    // --- Archmage Spellbook ---
    // Row 1: Apprentice Book | Ender Pearl  | Ender Pearl
    // Row 2: Emerald         | Emerald       | Emerald
    // Row 3: Totem           | Refined Radiance | Wilden Tribute
    event.shaped("ars_nouveau:archmage_spell_book", [
        "BCB",
        "DAD",
        "EFG"
    ], {
        A: "ars_nouveau:apprentice_spell_book",
        B: "minecraft:ender_pearl",
        C: "cataclysm:void_core",
        D: "minecraft:emerald",
        E: "minecraft:totem_of_undying",
        F: "create:refined_radiance",
        G: "ars_nouveau:wilden_tribute",
    });
});


