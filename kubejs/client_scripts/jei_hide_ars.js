RecipeViewerEvents.removeEntries('item', event => {
    global.AUTOMATION_ITEMS.forEach(item => event.remove(item));
});
