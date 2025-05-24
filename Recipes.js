//By tianzhu and SuperBomb404 together research and development

ServerEvents.recipes(mtr => {

  mtr.shapeless(
	Item.of('mtr:apg_door', 8),
	  [
	  	'minecraft:redstone_block',
	  	'minecraft:iron_door',
	  	'minecraft:glowstone_dust',
	  	'minecraft:glass_pane'
	  ]
  )//apg_door_1
  
  mtr.shapeless(Item.of('mtr:apg_door'),
		[
		  'mtr:apg_glass_end'
		]
  )//apg_door_2
  
  mtr.shapeless(Item.of('mtr:apg_glass_end'),
    [
      'mtr:apg_glass'
    ]
  )//mtr:apg_glass_end
  
  mtr.shapeless(Item.of('mtr:apg_glass'),
    [
      'mtr:apg_door',
    ]
  )//mtr:apg_glass
  
  mtr.shapeless(Item.of('mtr:arrival_projector_1_large'),
    [
      'mtr:arrival_projector_1_medium'
    ]
  )//mtr:arrival_projector_1_large
  
  mtr.shapeless(Item.of('mtr:arrival_projector_1_medium'),
    [
      'mtr:arrival_projector_1_small'
    ]
  )//mtr:arrival_projector_1_medium
  
  mtr.shaped(Item.of('mtr:arrival_projector_1_small', 8),
    [
      'III',
      'GCG',
      'GCG'
    ],
    {
      I: 'minecraft:iron_ingot',
      G: 'minecraft:glowstone_dust',
      C: 'minecraft:clock'
    }
  )//mtr:arrival_projector_1_small x8
  
  mtr.shapeless(Item.of('mtr:arrival_projector_1_small'),
    [
      'mtr:arrival_projector_1_large'
    ]
  )//mtr:arrival_projector_1_small
  
  mtr.shaped(Item.of('mtr:dashboard_2'),
    [
      'III',
      'RGL',
      'III'
    ],
    {
      I: Ingredient.of('#minecraft:planks'),
      R: 'minecraft:redstone',
      G: 'minecraft:glass_pane',
      L: 'minecraft:glowstone_dust'
    }
  )//mtr:dashboard_2
  
  mtr.shaped(Item.of('mtr:boat_node',32),
    [
      'III',
      ' B ',
      'LLL'
    ],
    {
      I: 'minecraft:iron_ingot',
      B: 'minecraft:iron_block',
      L: Ingredient.of('#minecraft:logs')
    }
  )//mtr:boat_node
  
  mtr.shaped(Item.of('mtr:brush'),
    [
      'WWW',
      'WSW',
      ' S '
    ],
    {
      W: 'minecraft:white_wool',
      S: 'minecraft:stick'
    }
  )//mtr:brush
  
  mtr.shaped(Item.of('mtr:dashboard_3'),
    [
      'III',
      'RGL',
      'III'
    ],
    {
      I: 'minecraft:string',
      R: 'minecraft:redstone',
      G: 'minecraft:glass_pane',
      L: 'minecraft:glowstone_dust'
    }
  )//mtr:dashboard_3
  
  mtr.shaped(Item.of('mtr:cable_car_node_lower',32),
    [
      'III',
      ' B ',
      'SSS'
    ],
    {
      I: 'minecraft:iron_ingot',
      B: 'minecraft:iron_block',
      S: 'minecraft:string'
    }
  )//mtr:cable_car_node_lower_1
  
  mtr.shapeless(Item.of('mtr:cable_car_node_lower'),
    [
      'mtr:cable_car_node_station'
    ]
  )//mtr:cable_car_node_lower_2
  
  mtr.shapeless(Item.of('mtr:cable_car_node_station'),
    [
      'mtr:cable_car_node_upper'
    ]
  )//mtr:cable_car_node_station
  
  mtr.shapeless(Item.of('mtr:cable_car_node_upper'),
    [
      'mtr:cable_car_node_lower'
    ]
  )//mtr:cable_car_node_upper
  
  mtr.shaped(Item.of('mtr:ceiling',64),
    [
      'III',
      'GGG',
      'III'
    ],
    {
      I: 'minecraft:iron_ingot',
      G: 'minecraft:glowstone_dust'
    }
  )//mtr:ceiling_1
  
  mtr.shapeless(Item.of('mtr:ceiling'),
    [
      'mtr:ceiling_no_light'
    ]
  )//mtr:ceiling_2
  
  mtr.shapeless(Item.of('mtr:ceiling_light'),
    [
      'mtr:ceiling'
    ]
  )//mtr:ceiling_light
  
  mtr.shapeless(Item.of('mtr:ceiling_no_light'),
    [
      'mtr:ceiling_light'
    ]
  )//mtr:ceiling_no_light
  
  mtr.shaped(Item.of('mtr:clock_pole',8),
    [
      'B',
      'B',
      'I'
    ],
    {
      B: 'minecraft:iron_bars',
      I: 'minecraft:iron_ingot'
    }
  )//mtr:clock_pole
  
  mtr.shaped(Item.of('mtr:clock'),
    [
      'NIN',
      'ICI',
      'NIN'
    ],
    {
      I: 'minecraft:iron_ingot',
      N: 'minecraft:iron_nugget',
      C: 'minecraft:clock'
    }
  )//mtr:clock
  
  mtr.shapeless(Item.of('mtr:driver_key'),
    [
      'minecraft:iron_ingot',
      'minecraft:iron_nugget',
      'minecraft:chain'
    ]
  )//mtr:driver_key
  
  mtr.shapeless(Item.of('mtr:escalator',8),
    [
      'minecraft:redstone',
      'minecraft:iron_block',
      'minecraft:stone_brick_stairs',
      'minecraft:glass_pane'
    ]
  )//mtr:escalator
  
  mtr.shapeless(Item.of('mtr:glass_fence_cio',4),
    [
      'minecraft:orange_stained_glass_pane',
      'minecraft:orange_stained_glass_pane',
      'minecraft:orange_stained_glass_pane',
      'minecraft:orange_stained_glass_pane',
      'minecraft:orange_stained_glass_pane',
      'minecraft:iron_bars'
    ]
  )//glass_fence_cio
  
  mtr.shapeless(Item.of('mtr:glass_fence_ckt',4),
    [
      'minecraft:light_gray_stained_glass_pane',
      'minecraft:light_gray_stained_glass_pane',
      'minecraft:light_gray_stained_glass_pane',
      'minecraft:light_gray_stained_glass_pane',
      'minecraft:light_gray_stained_glass_pane',
      'minecraft:iron_bars'
    ]
  )//mtr:glass_fence_ckt
  
  mtr.shapeless(Item.of('mtr:glass_fence_heo',4),
    [
      'minecraft:light_blue_stained_glass_pane',
      'minecraft:light_blue_stained_glass_pane',
      'minecraft:light_blue_stained_glass_pane',
      'minecraft:light_blue_stained_glass_pane',
      'minecraft:light_blue_stained_glass_pane',
      'minecraft:iron_bars'
    ]
  )//mtr:glass_fence_heo
  
  mtr.shapeless(Item.of('mtr:glass_fence_mos',4),
    [
      'minecraft:purple_stained_glass_pane',
      'minecraft:purple_stained_glass_pane',
      'minecraft:purple_stained_glass_pane',
      'minecraft:purple_stained_glass_pane',
      'minecraft:purple_stained_glass_pane',
      'minecraft:iron_bars'
    ]
  )//mtr:glass_fence_mos
  
  mtr.shapeless(Item.of('mtr:glass_fence_plain',4),
    [
      'minecraft:glass_pane',
      'minecraft:glass_pane',
      'minecraft:glass_pane',
      'minecraft:glass_pane',
      'minecraft:iron_bars'
    ]
  )//mtr:glass_fence_plain
  
  mtr.shapeless(Item.of('mtr:glass_fence_shm',4),
    [
      'minecraft:yellow_stained_glass_pane',
      'minecraft:yellow_stained_glass_pane',
      'minecraft:yellow_stained_glass_pane',
      'minecraft:yellow_stained_glass_pane',
      'minecraft:yellow_stained_glass_pane',
      'minecraft:iron_bars'
    ]
  )//mtr:glass_fence_shm
  
  mtr.shapeless(Item.of('mtr:glass_fence_stained',4),
    [
      'minecraft:white_stained_glass_pane',
      'minecraft:white_stained_glass_pane',
      'minecraft:white_stained_glass_pane',
      'minecraft:white_stained_glass_pane',
      'minecraft:white_stained_glass_pane',
      'minecraft:iron_bars'
    ]
  )//mtr:glass_fence_stained
  
  mtr.shapeless(Item.of('mtr:glass_fence_stw',4),
    [
      'minecraft:pink_stained_glass_pane',
      'minecraft:pink_stained_glass_pane',
      'minecraft:pink_stained_glass_pane',
      'minecraft:pink_stained_glass_pane',
      'minecraft:pink_stained_glass_pane',
      'minecraft:iron_bars'
    ]
  )//mtr:glass_fence_stw
  
  mtr.shapeless(Item.of('mtr:glass_fence_tsh',4),
    [
      'minecraft:lime_stained_glass_pane',
      'minecraft:lime_stained_glass_pane',
      'minecraft:lime_stained_glass_pane',
      'minecraft:lime_stained_glass_pane',
      'minecraft:lime_stained_glass_pane',
      'minecraft:iron_bars'
    ]
  )//mtr:glass_fence_tsh
  
  mtr.shapeless(Item.of('mtr:glass_fence_wks',4),
    [
      'minecraft:brown_stained_glass_pane',
      'minecraft:brown_stained_glass_pane',
      'minecraft:brown_stained_glass_pane',
      'minecraft:brown_stained_glass_pane',
      'minecraft:brown_stained_glass_pane',
      'minecraft:iron_bars'
    ]
  )//mtr:glass_fence_wks
  
  mtr.shaped(Item.of('mtr:lift_buttons_1',8),
    [
      'IBI',
      'IBI'
    ],
    {
      I: 'minecraft:iron_ingot',
      B: 'minecraft:stone_button'
    }
  )//mtr:lift_buttons_1
  
  mtr.shaped(Item.of('mtr:lift_buttons_link_connector'),
    [
      'I',
      'R',
      'I'
    ],
    {
      R: 'minecraft:redstone',
      I: 'minecraft:iron_bars'
    }
  )//mtr:lift_buttons_link_connector
  
  mtr.shaped(Item.of('mtr:lift_buttons_link_connector'),
    [
      'I',
      'L',
      'I'
    ],
    {
      L: 'minecraft:lava_bucket',
      I: 'minecraft:iron_bars'
    }
  )//mtr:lift_buttons_link_remover
  
  mtr.shapeless(Item.of('mtr:lift_door_1',8),
    [
      'minecraft:redstone_block',
      'minecraft:iron_door',
      'minecraft:iron_ingot',
      'minecraft:glass_pane',
      'minecraft:glass_pane'
    ]
  )//mtr:lift_door_1
  
  mtr.shapeless(Item.of('mtr:lift_door_odd_1',8),
    [
      'minecraft:redstone_block',
      'minecraft:iron_door',
      'minecraft:iron_ingot',
      'minecraft:glass_pane',
      'minecraft:glass_pane',
      'minecraft:glass_pane'
    ]
  )//mtr:lift_door_odd_1
  
  mtr.shapeless(Item.of('mtr:lift_panel_even_1'),
    [
      'mtr:lift_panel_even_2',
      'mtr:lift_panel_even_2'
    ]
  )//mtr:lift_panel_even_1
  
  mtr.shaped(Item.of('mtr:lift_panel_even_1',4),
    [
      'IRI',
      'ISI'
    ],
    {
      I: 'minecraft:iron_ingot',
      R: 'minecraft:redstone',
      S: 'minecraft:stone_button'
    }
  )//mtr:lift_panel_even_1_base
  
  mtr.shapeless(Item.of('mtr:lift_panel_even_2',2),
    [
      'mtr:lift_panel_even_1'
    ]
  )//mtr:lift_panel_even_2
  
  mtr.shapeless(Item.of('mtr:lift_panel_odd_1'),
    [
      'mtr:lift_panel_odd_2',
      'mtr:lift_panel_odd_2'
    ]
  )//mtr:lift_panel_odd_1_1
  
  mtr.shaped(Item.of('mtr:lift_panel_odd_1', 4),
    [
      'I I',
      'IRI',
      'ISI'
    ],
    {
      I: 'minecraft:iron_ingot',
      R: 'minecraft:redstone',
      S: 'minecraft:stone_button'
    }
  )//mtr:lift_panel_odd_1_base
  
  mtr.shapeless(Item.of('mtr:lift_panel_odd_2',2),
    [
      'mtr:lift_panel_odd_1'
    ]
  )//mtr:lift_panel_odd_2
  
  mtr.shaped(Item.of('mtr:lift_refresher'),
    [
      'III',
      ' P '
    ],
    {
      I: 'minecraft:iron_ingot',
      P: 'minecraft:piston'
    }
  )//mtr:lift_refresher
  
  mtr.shaped(Item.of('mtr:lift_track_1',8),
    [
      'ILI',
      'ILI'
    ],
    {
      I: 'minecraft:iron_ingot',
      L: 'minecraft:ladder'
    }
  )//mtr:mtr:lift_track_1
  
  mtr.shaped(Item.of('mtr:lift_track_floor_1',8),
    [
      'ILI',
      'ISI'
    ],
    {
      I: 'minecraft:iron_ingot',
      L: 'minecraft:ladder',
      S: 'minecraft:smooth_stone_slab'
    }
  )//mtr:mtr:lift_track_floor_1
  
  mtr.shapeless(Item.of('mtr:logo'),
    [
      'mtr:metal',
      'minecraft:red_dye'
    ]
  )//mtr:logo

  mtr.shaped(Item.of('mtr:marble_blue_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:marble_blue'
    }
  )//mtrmarble_blue_slab

  mtr.shapeless(Item.of('mtr:marble_blue',6),
    [
      'minecraft:polished_andesite',
      'minecraft:polished_andesite',
      'minecraft:polished_andesite',
      'minecraft:polished_diorite',
      'minecraft:polished_diorite',
      'minecraft:polished_diorite'
    ]
  )//mtr:marble_blue

  mtr.shaped(Item.of('mtr:marble_sandy_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:marble_sandy'
    }
  )//mtr:marble_sandy_slab

  mtr.shapeless(Item.of('mtr:marble_sandy',6),
    [
      'minecraft:smooth_sandstone',
      'minecraft:smooth_sandstone',
      'minecraft:smooth_sandstone',
      'minecraft:polished_diorite',
      'minecraft:polished_diorite',
      'minecraft:polished_diorite'
    ]
  )//mtr:marble_sandy
})