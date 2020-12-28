try
{
    var auroraLoaded;  // global namespace

    if (!auroraLoaded)
    {
        auroraLoaded = true;

        // hide implementation and local variables like addOn from global name space using a named function for easier debugging (vs anonymous IIFE)

        function auroraAddBuildBarItems()
        {
            try
            {
                if (_.has(Build, "HotkeyModel.SpecIdToGridMap"))
                {
                    var addOn = scene_server_mod_list.shared_build.indexOf('coui://ui/mods/mla.unit.addon/shared_build.js') != -1;

                    _.assign(Build.HotkeyModel.SpecIdToGridMap,
                    {
                        "/pa/units/land/artillery_comet/artillery_comet.json":
                        [
                            "combat", 0, { row: 1, column: addOn ? 6 : 5, titans: true },
                        ],
                        "/pa/units/land/artillery_morningstar/artillery_morningstar.json":
                        [
                            "combat", 0, { row: 0, column: addOn ? 6 : 5, titans: true },
                        ],
                        "/pa/units/sea/bolide/bolide.json":
                        [
                            "sea", 0, { row: 1, column: 5, titans: true },
                        ],
                        "/pa/units/land/bot_sun/bot_sun.json":
                        [
                            "bot", 0, { row: 2, column: addOn ? 8 : 6, titans: true },
                        ],
                        "/pa/units/orbital/orbital_armageddon/orbital_armageddon.json":
                        [
                            "orbital", 0, { row: 1, column: 4, titans: true },
                        ],
                        "/pa/units/land/tank_heavy_meteor/tank_heavy_meteor.json":
                        [
                            "vehicle", 0, { row: 1, column: addOn ? 7 : 5, titans: true },
                        ],
                    });
                }
            }
            catch (e)
            {
                console.error(e);
                console.error(JSON.stringify(e));
            }
        }

        auroraAddBuildBarItems()
    }
}
catch (e)
{
    console.error(e);
    console.error(JSON.stringify(e));
}