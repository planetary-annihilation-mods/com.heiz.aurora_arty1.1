try
{
    var auroraLoaded; // global namespace

    if (!auroraLoaded)
    {
        auroraLoaded = true;

        // no named function as simple code with no variables

        model.strategicIcons(model.strategicIcons().concat(
        [
            'artillery_comet',
            'artillery_morningstar',
            'bolide',
            'bot_sun',
            'orbital_armageddon',
            'tank_heavy_meteor',
        ]));
    }
}
catch (e)
{
    console.error(e);
    console.error(JSON.stringify(e));
}