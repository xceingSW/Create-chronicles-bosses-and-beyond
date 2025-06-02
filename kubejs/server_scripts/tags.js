ServerEvents.tags('worldgen/biome', event => {
    event.removeAll('ad_astra:has_structure/meteor_biomes')
    event.removeAll('ad_astra:has_structure/oil_well_biomes')
    event.removeAll('ae2:has_meteorites')
    event.removeAllTagsFrom('ad_astra:steel_plate')
})

// disable drygm
ServerEvents.tags("entity_type", (event) => {
    event.add("ars_nouveau:drygmy_blacklist", [/.*/]);
    // Define passive mobs
    let passiveMobs = [
        "minecraft:bat",
        "minecraft:chicken",
        "minecraft:cow",
        "minecraft:donkey",
        "minecraft:fox",
        "minecraft:frog",
        "minecraft:horse",
        "minecraft:mooshroom",
        "minecraft:mule",
        "minecraft:parrot",
        "minecraft:pig",
        "minecraft:rabbit",
        "minecraft:sheep",
        "minecraft:squid",
        "minecraft:turtle",
        "minecraft:cod",
        "minecraft:dolphin",
        "minecraft:pufferfish",
        "minecraft:salmon",
    ];

    // Remove passive mobs from the blacklist
    event.remove("ars_nouveau:drygmy_blacklist", passiveMobs);

    event.add("ars_nouveau:jar_blacklist", [" eg","iceandfire:lightning_dragon","iceandfire:fire_dragon","iceandfire:ice_dragon"]);
});

ServerEvents.tags("entity_type", (event) => {
     event.add("forge:bosses", [
        "bosses_of_mass_destruction:void_blossom",
        "bosses_of_mass_destruction:obsidilith",
        "bosses_of_mass_destruction:gauntlet",
        "bosses_of_mass_destruction:lich",
        "alexsmobs:void_worm",
        
        "mowziesmobs:ferrous_wroughtnaut",
        "mowziesmobs:frostmaw",
        
        "irons_spellbooks:dead_king",

        "blue_skies:alchemist",
        "blue_skies:summoner",
        "blue_skies:arachnarch",
        "blue_skies:starlit_crusher",

         "graveyard:lich"
    
    ]);
    event.add("forbidden_arcanus:quantum_catcher_blacklisted", ["#forge:bosses","iceandfire:lightning_dragon","iceandfire:fire_dragon","iceandfire:ice_dragon"]);
    event.add('ad_astra:entities/lives_without_oxygen', [
        'iceandfire:lightning_dragon',
        "mowziesmobs:umvuthi",
        "mowziesmobs:umvuthana",
        "mowziesmobs:umvuthana_follower_raptor",
        "mowziesmobs:umvuthana_follower_player",
        "mowziesmobs:umvuthana_crane_player",
        "mowziesmobs:umvuthana_raptor",
        "mowziesmobs:umvuthana_crane"
    ]);
    event.add('ad_astra:entities/fire_immune', [
        'iceandfire:lightning_dragon'
    ]);    
});

ServerEvents.tags('item', event => {
    event.get('minecraft:logs_that_burn')
         .add('forbidden_arcanus:aurum_log');
});


ServerEvents.tags('block', event => {
    event.add("ftbchunks:interact_whitelist", ['#minecraft:doors','create_things_and_misc:card_reader','refurbished_furniture:post_box','numismatics:blaze_banker','create:contraption_controls',"numismatics:andesite_depositor", "numismatics:brass_depositor", "numismatics:bank_terminal", "numismatics:vendor"]);
})

ServerEvents.tags('block', event => {
  const bannedBlocks = [
    "molten_vents:dormant_molten_asurine",
    "molten_vents:active_molten_asurine",
    "molten_vents:dormant_molten_veridium",
    "molten_vents:active_molten_veridium",
    "molten_vents:dormant_molten_crimsite",
    "molten_vents:active_molten_crimsite",
    "molten_vents:dormant_molten_orchrum",
    "molten_vents:active_molten_orchrum",
    "molten_vents:dormant_molten_scorchia",
    "molten_vents:active_molten_scorchia",
    "molten_vents:dormant_molten_scoria",
    "molten_vents:active_molten_scoria",
    "molten_vents:dormant_molten_potassic",
    "molten_vents:active_molten_potassic",
    "molten_vents:dormant_molten_battery",
    "molten_vents:active_molten_battery"
  ]
  event.add('c:relocation_not_supported', bannedBlocks)
})
