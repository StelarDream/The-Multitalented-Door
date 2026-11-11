// List of all silk item IDs (without .png)
const silks = [
    "black_silk",
    "blue_silk",
    "brown_silk",
    "cyan_silk",
    "gray_silk",
    "green_silk",
    "light_blue_silk",
    "light_gray_silk",
    "lime_silk",
    "magenta_silk",
    "orange_silk",
    "pink_silk",
    "purple_silk",
    "red_silk",
    "white_silk",
    "yellow_silk"
];

// Register items on startup
StartupEvents.registry("item", event => {
    silks.forEach(id => {
        event.create(id)
            .displayName(id.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase()));
        // Optional: customize more properties here
    });
});
