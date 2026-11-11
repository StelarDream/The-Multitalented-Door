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

ServerEvents.tags("item", event => {

    silks.forEach(id => {
        const color = id.replace("_silk", "");

        event.add("kubejs:silk", `kubejs:${id}`);

        event.add("kubejs:silk/dyed", `kubejs:${id}`);
    });

});
 