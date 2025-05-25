//By Tianzhuone and SuperBomb404 together research and development

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
      I: '#minecraft:planks',
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
      L: '#minecraft:logs'
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
      '#c:red_dyes'
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

  mtr.shaped(Item.of('mtr:metal_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:metal'
    }
  )//mtr:metal_slab

  mtr.shapeless(Item.of('mtr:metal',2),
    [
      'minecraft:iron_block',
      'minecraft:iron_block'
    ]
  )//mtr:metal

  mtr.shaped(Item.of('mtr:pids_1', 8),
    [
      'III',
      'GCG',
      'III'
    ],
    {
      I: 'minecraft:iron_ingot',
      G: 'minecraft:glowstone_dust',
      C: 'minecraft:clock'
    }
  )//mtr:pids_1_1

  mtr.shapeless(Item.of('mtr:pids_1'),
    [
      'mtr:pids_single_arrival_1'
    ]
  )//mtr:pids_1_2

  mtr.shapeless(Item.of('mtr:pids_2'),
    [
      'mtr:pids_1'
    ]
  )//mtr:pids_2

  mtr.shapeless(Item.of('mtr:pids_3'),
    [
      'mtr:pids_2'
    ]
  )//mtr:pids_3

  mtr.shapeless(Item.of('mtr:pids_4'),
    [
      'mtr:pids_3'
    ]
  )//mtr:pids_4

  mtr.shaped(Item.of('mtr:pids_pole', 16),
    [
      'B B',
      'B B',
      'III'
    ],
    {
      B: 'minecraft:iron_bars',
      I: 'minecraft:iron_ingot'
    }
  )//mtr:pids_pole

  mtr.shapeless(Item.of('mtr:pids_single_arrival_1'),
    [
      'mtr:pids_4'
    ]
  )//mtr:pids_single_arrival_1

  mtr.shapeless(Item.of('mtr:platform_indented',6),
    [
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      '#c:yellow_dyes',
      '#c:white_dyes'
    ]
  )//mtr:platform_indented

  mtr.shapeless(Item.of('mtr:platform',6),
    [
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      '#c:yellow_dyes',
      '#c:white_dyes'
    ]
  )//mtr:platform

  mtr.shapeless(Item.of('mtr:platform_na_1_indented',6),
    [
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      '#c:yellow_dyes',
      '#c:yellow_dyes',
      '#c:yellow_dyes'
    ]
  )//mtr:platform_na_1_indented

  mtr.shapeless(Item.of('mtr:platform_na_1',6),
    [
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      '#c:yellow_dyes',
      '#c:yellow_dyes',
      '#c:yellow_dyes'
    ]
  )//mtr:platform_na_1

  mtr.shapeless(Item.of('mtr:platform_na_2_indented',6),
    [
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      '#c:black_dyes',
      '#c:black_dyes',
      '#c:black_dyes'
    ]
  )//mtr:platform_na_2_indented

  mtr.shapeless(Item.of('mtr:platform_na_2',6),
    [
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      '#c:black_dyes',
      '#c:black_dyes',
      '#c:black_dyes'
    ]
  )//mtr:platform_na_2

  mtr.shapeless(Item.of('mtr:platform_uk_1_indented',6),
    [
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      '#c:white_dyes',
      '#c:yellow_dyes',
      '#c:black_dyes'
    ]
  )//mtr:platform_uk_1_indented

  mtr.shapeless(Item.of('mtr:platform_uk_1',6),
    [
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      'minecraft:stone_bricks',
      '#c:white_dyes',
      '#c:yellow_dyes',
      '#c:black_dyes'
    ]
  )//mtr:platform_uk_1

  mtr.shapeless(Item.of('mtr:psd_door'),
    [
      'mtr:psd_glass_end'
    ]
  )//mtr:psd_door_1

  mtr.shapeless(Item.of('mtr:psd_door',2),
    [
      'mtr:psd_door_2',
      'mtr:psd_door_2'
    ]
  )//mtr:psd_door_2

  mtr.shapeless(Item.of('mtr:psd_door',8),
    [
      'minecraft:redstone_block',
      'minecraft:iron_door',
      'minecraft:glowstone_dust',
      'minecraft:glass_pane',
      'minecraft:glass_pane'
    ]
  )//mtr:psd_door_1_main

  mtr.shapeless(Item.of('mtr:psd_door_2'),
    [
      'mtr:psd_glass_end_2'
    ]
  )//mtr:psd_door_2_1

  mtr.shapeless(Item.of('mtr:psd_door_2',2),
    [
      'mtr:psd_door',
      'mtr:psd_door'
    ]
  )//mtr:psd_door_2_2

  mtr.shapeless(Item.of('mtr:psd_glass'),
    [
      'mtr:psd_door'
    ]
  )//mtr;psd_glass_1

  mtr.shapeless(Item.of('mtr:psd_glass',2),
    [
      'mtr:psd_glass_2',
      'mtr:psd_glass_2'
    ]
  )//mtr:psd_glass_2

  mtr.shapeless(Item.of('mtr:psd_glass_2'),
    [
      'mtr:psd_door_2'
    ]
  )//mtr:psd_glass_2_1

  mtr.shapeless(Item.of('mtr:psd_glass_2',2),
    [
      'mtr:psd_glass',
      'mtr:psd_glass'
    ]
  )//mtr:psd_glass_2_2

  mtr.shapeless(Item.of('mtr:psd_glass_end'),
    [
      'mtr:psd_glass'
    ]
  )//mtr:psd_glass_end_1_1

  mtr.shapeless(Item.of('mtr:psd_glass_end',2),
    [
      'mtr:psd_glass_end_2',
      'mtr:psd_glass_end_2'
    ]
  )//mtr:psd_glass_end_1_2

  mtr.shapeless(Item.of('mtr:psd_glass_end_2'),
    [
      'mtr:psd_glass_2'
    ]
  )//mtr:psd_glass_end_2_1

  mtr.shapeless(Item.of('mtr:psd_glass_end_2',2),
    [
      'mtr:psd_glass_end',
      'mtr:psd_glass_end'
    ]
  )//mtr:psd_glass_end_2_2

  mtr.shaped(Item.of('mtr:rail_connector_20_one_way'),
    [
      'BRB',
      'BIB',
      ' R '
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: '#minecraft:logs'
    }
  )//mtr:rail_connector_20_one_way

  mtr.shaped(Item.of('mtr:rail_connector_20'),
    [
      'BRB',
      'BIB',
      'BRB'
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: '#minecraft:logs'
    }
  )//mtr:rail_connector_20

  mtr.shaped(Item.of('mtr:rail_connector_40_one_way'),
    [
      'BRB',
      'BIB',
      ' R '
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:stone'
    }
  )//mtr:rail_connector_40_one_way

  mtr.shaped(Item.of('mtr:rail_connector_40'),
    [
      'BRB',
      'BIB',
      'BRB'
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:stone'
    }
  )//mtr:rail_connector_40

  mtr.shaped(Item.of('mtr:rail_connector_60_one_way'),
    [
      'BRB',
      'BIB',
      ' R '
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:emerald_block'
    }
  )//mtr:rail_connector_60_one_way

  mtr.shaped(Item.of('mtr:rail_connector_60'),
    [
      'BRB',
      'BIB',
      'BRB'
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:emerald_block'
    }
  )//mtr:rail_connector_60

  mtr.shaped(Item.of('mtr:rail_connector_80_one_way'),
    [
      'BRB',
      'BIB',
      ' R '
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:iron_block'
    }
  )//mtr:rail_connector_80_one_way

  mtr.shaped(Item.of('mtr:rail_connector_80'),
    [
      'BRB',
      'BIB',
      'BRB'
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:iron_block'
    }
  )//mtr:rail_connector_80

  mtr.shaped(Item.of('mtr:rail_connector_120_one_way'),
    [
      'BRB',
      'BIB',
      ' R '
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:obsidian'
    }
  )//mtr:rail_connector_120_one_way

  mtr.shaped(Item.of('mtr:rail_connector_120'),
    [
      'BRB',
      'BIB',
      'BRB'
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:obsidian'
    }
  )//mtr:rail_connector_120

  mtr.shaped(Item.of('mtr:rail_connector_160_one_way'),
    [
      'BRB',
      'BIB',
      ' R '
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:blaze_rod'
    }
  )//mtr:rail_connector_160_one_way

  mtr.shaped(Item.of('mtr:rail_connector_160'),
    [
      'BRB',
      'BIB',
      'BRB'
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:blaze_rod'
    }
  )//mtr:rail_connector_160

  mtr.shaped(Item.of('mtr:rail_connector_200_one_way'),
    [
      'BRB',
      'BIB',
      ' R '
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:quartz_block'
    }
  )//mtr:rail_connector_200_one_way

  mtr.shaped(Item.of('mtr:rail_connector_200'),
    [
      'BRB',
      'BIB',
      'BRB'
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:quartz_block'
    }
  )//mtr:rail_connector_200

mtr.shaped(Item.of('mtr:rail_connector_300_one_way'),
    [
      'BRB',
      'BIB',
      ' R '
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:diamond_block'
    }
  )//mtr:rail_connector_300_one_way

  mtr.shaped(Item.of('mtr:rail_connector_300'),
    [
      'BRB',
      'BIB',
      'BRB'
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:diamond_block'
    }
  )//mtr:rail_connector_300

  mtr.shaped(Item.of('mtr:rail_connector_cable_car'),
    [
      'BRB',
      'BIB',
      ' R '
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:string'
    }
  )//mtr:rail_connector_cable_car

  mtr.shaped(Item.of('mtr:rail_connector_platform'),
    [
      'BRB',
      'BIB',
      'BRB'
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:redstone_block'
    }
  )//mtr:rail_connector_platform

  mtr.shaped(Item.of('mtr:rail_connector_siding'),
    [
      'BRB',
      'BIB',
      'BRB'
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:gold_block'
    }
  )//mtr:rail_connector_siding

  mtr.shaped(Item.of('mtr:rail_connector_turn_back'),
    [
      'BRB',
      'BIB',
      'BRB'
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:lapis_block'
    }
  )//mtr:rail_connector_turn_back

  mtr.shaped(Item.of('mtr:rail',32),
    [
      'III',
      'B B',
      'LLL'
    ],
    {
      I: 'minecraft:iron_ingot',
      B: 'minecraft:iron_block',
      L: '#minecraft:logs'
    }
  )//mtr:node

  mtr.shaped(Item.of('mtr:rail_remover'),
    [
      'BRB',
      'BIB',
      'BRB'
    ],
    {
      R: 'minecraft:rail',
      I: 'minecraft:iron_ingot',
      B: 'minecraft:lava_bucket'
    }
  )//mtr:rail_remover

  mtr.shaped(Item.of('mtr:dashboard'),
    [
      'III',
      'RGL',
      'III'
    ],
    {
      I: 'minecraft:iron_ingot',
      R: 'minecraft:redstone',
      G: 'minecraft:glass_pane',
      L: 'minecraft:glowstone_dust'
    }
  )//mtr:dashboard

  mtr.shaped(Item.of('mtr:railway_sign_2_even',32),
    [
      'IGI',
      'BBB',
      'SSS'
    ],
    {
      I: 'minecraft:iron_ingot',
      G: 'minecraft:glowstone_dust',
      B: 'minecraft:iron_block',
      S: '#minecraft:signs'
    }
  )//mtr:railway_sign_2_even_1

  mtr.shapeless(Item.of('mtr:railway_sign_2_even'),
    [
      'mtr:railway_sign_2_odd'
    ]
  )//mtr:railway_sign_2_even_2

  mtr.shapeless(Item.of('mtr:railway_sign_2_odd'),
    [
      'mtr:railway_sign_2_even'
    ]
  )//mtr:railway_sign_2_odd

  mtr.shapeless(Item.of('mtr:railway_sign_3_even'),
    [
      'mtr:railway_sign_2_even',
      'minecraft:iron_ingot',
      '#minecraft:signs'
    ]
  )//mtr:railway_sign_3_even_1

  mtr.shapeless(Item.of('mtr:railway_sign_3_even'),
    [
      'mtr:railway_sign_3_odd'
    ]
  )//mtr:railway_sign_3_even_2

  mtr.shapeless(Item.of('mtr:railway_sign_3_odd'),
    [
      'mtr:railway_sign_3_even'
    ]
  )//mtr:railway_sign_3_odd

  mtr.shapeless(Item.of('mtr:railway_sign_4_even'),
    [
      'mtr:railway_sign_3_even',
      'minecraft:iron_ingot',
      '#minecraft:signs'
    ]
  )//mtr:railway_sign_4_even_1

  mtr.shapeless(Item.of('mtr:railway_sign_4_even'),
    [
      'mtr:railway_sign_4_odd'
    ]
  )//mtr:railway_sign_4_even_2

  mtr.shapeless(Item.of('mtr:railway_sign_4_odd'),
    [
      'mtr:railway_sign_4_even'
    ]
  )//mtr:railway_sign_4_odd

  mtr.shapeless(Item.of('mtr:railway_sign_5_even'),
    [
      'mtr:railway_sign_4_even',
      'minecraft:iron_ingot',
      '#minecraft:signs'
    ]
  )//mtr:railway_sign_5_even_1

  mtr.shapeless(Item.of('mtr:railway_sign_5_even'),
    [
      'mtr:railway_sign_5_odd'
    ]
  )//mtr:railway_sign_5_even_2

  mtr.shapeless(Item.of('mtr:railway_sign_5_odd'),
    [
      'mtr:railway_sign_5_even'
    ]
  )//mtr:railway_sign_5_odd

  mtr.shapeless(Item.of('mtr:railway_sign_6_even'),
    [
      'mtr:railway_sign_5_even',
      'minecraft:iron_ingot',
      '#minecraft:signs'
    ]
  )//mtr:railway_sign_6_even_1

  mtr.shapeless(Item.of('mtr:railway_sign_6_even'),
    [
      'mtr:railway_sign_6_odd'
    ]
  )//mtr:railway_sign_6_even_2

  mtr.shapeless(Item.of('mtr:railway_sign_6_odd'),
    [
      'mtr:railway_sign_6_even'
    ]
  )//mtr:railway_sign_6_odd

  mtr.shapeless(Item.of('mtr:railway_sign_7_even'),
    [
      'mtr:railway_sign_6_even',
      'minecraft:iron_ingot',
      '#minecraft:signs'
    ]
  )//mtr:railway_sign_7_even_1

  mtr.shapeless(Item.of('mtr:railway_sign_7_even'),
    [
      'mtr:railway_sign_7_odd'
    ]
  )//mtr:railway_sign_7_even_2

  mtr.shapeless(Item.of('mtr:railway_sign_7_odd'),
    [
      'mtr:railway_sign_7_even'
    ]
  )//mtr:railway_sign_7_odd

  mtr.shaped(Item.of('mtr:railway_sign_pole',16),
    [
      'B B',
      'B B',
      'I I'
    ],
    {
      B: 'minecraft:iron_bars',
      I: 'minecraft:iron_ingot'
    }
  )//mtr:railway_sign_pole

  mtr.shaped(Item.of('mtr:route_sign_standing_light',8),
    [
      'GGG',
      'III',
      'I I'
    ],
    {
      I: 'minecraft:iron_ingot',
      G: 'minecraft:glowstone_dust'
    }
  )//mtr:route_sign_standing_light_1

  mtr.shapeless(Item.of('mtr:route_sign_standing_light'),
    [
      'mtr:route_sign_wall_metal'
    ]
  )//mtr:route_sign_standing_light_2

  mtr.shapeless(Item.of('mtr:route_sign_standing_metal'),
    [
      'mtr:route_sign_standing_light'
    ]
  )//mtr:route_sign_standing_metal

  mtr.shapeless(Item.of('mtr:route_sign_wall_light'),
    [
      'mtr:route_sign_standing_metal'
    ]
  )//mtr:route_sign_wall_light

  mtr.shapeless(Item.of('mtr:route_sign_wall_metal'),
    [
      'mtr:route_sign_wall_light'
    ]
  )//mtr:route_sign_wall_metal

  mtr.shaped(Item.of('mtr:rubbish_bin_1'),
    [
      'I I',
      'ISI',
      'III'
    ],
    {
      S: 'minecraft:stone',
      I: 'minecraft:iron_ingot'
    }
  )//mtr:rubbish_bin_1

  mtr.shapeless(Item.of('mtr:signal_connector_black'),
    [
      'minecraft:rail',
      '#c:black_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_black

  mtr.shapeless(Item.of('mtr:signal_connector_blue'),
    [
      'minecraft:rail',
      '#c:blue_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_blue

  mtr.shapeless(Item.of('mtr:signal_connector_brown'),
    [
      'minecraft:rail',
      '#c:brown_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_brown

  mtr.shapeless(Item.of('mtr:signal_connector_cyan'),
    [
      'minecraft:rail',
      '#c:cyan_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_cyan

  mtr.shapeless(Item.of('mtr:signal_connector_gray'),
    [
      'minecraft:rail',
      '#c:gray_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_gray

  mtr.shapeless(Item.of('mtr:signal_connector_green'),
    [
      'minecraft:rail',
      '#c:green_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_green

  mtr.shapeless(Item.of('mtr:signal_connector_light_blue'),
    [
      'minecraft:rail',
      '#c:light_blue_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_light_blue

  mtr.shapeless(Item.of('mtr:signal_connector_light_gray'),
    [
      'minecraft:rail',
      '#c:light_gray_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_light_gray

  mtr.shapeless(Item.of('mtr:signal_connector_lime'),
    [
      'minecraft:rail',
      '#c:lime_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_lime

  mtr.shapeless(Item.of('mtr:signal_connector_magenta'),
    [
      'minecraft:rail',
      '#c:magenta_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_magenta

  mtr.shapeless(Item.of('mtr:signal_connector_orange'),
    [
      'minecraft:rail',
      '#c:orange_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_orange

  mtr.shapeless(Item.of('mtr:signal_connector_pink'),
    [
      'minecraft:rail',
      '#c:pink_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_pink

  mtr.shapeless(Item.of('mtr:signal_connector_purple'),
    [
      'minecraft:rail',
      '#c:purple_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_purple

  mtr.shapeless(Item.of('mtr:signal_connector_red'),
    [
      'minecraft:rail',
      '#c:red_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_red

  mtr.shapeless(Item.of('mtr:signal_connector_white'),
    [
      'minecraft:rail',
      '#c:white_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_white

  mtr.shapeless(Item.of('mtr:signal_connector_yellow'),
    [
      'minecraft:rail',
      '#c:yellow_dyes',
      'minecraft:redstone'
    ]
  )//mtr:signal_connector_yellow

  mtr.shapeless(Item.of('mtr:signal_light_1',2),
    [
      'minecraft:blackstone',
      '#c:blue_dyes',
      '#c:red_dyes',
      'minecraft:redstone',
      'minecraft:glowstone_dust'
    ]
  )//mtr:signal_light_1

  mtr.shapeless(Item.of('mtr:signal_light_2',2),
    [
      'minecraft:blackstone',
      '#c:blue_dyes',
      '#c:blue_dyes',
      '#c:red_dyes',
      '#c:red_dyes',
      'minecraft:redstone',
      'minecraft:glowstone_dust'
    ]
  )//mtr:signal_light_2

  mtr.shapeless(Item.of('mtr:signal_light_3',2),
    [
      'minecraft:blackstone',
      '#c:green_dyes',
      '#c:red_dyes',
      'minecraft:redstone',
      'minecraft:glowstone_dust'
    ]
  )//mtr:signal_light_3

  mtr.shapeless(Item.of('mtr:signal_light_4',2),
    [
      'minecraft:blackstone',
      '#c:green_dyes',
      '#c:green_dyes',
      '#c:red_dyes',
      '#c:red_dyes',
      'minecraft:redstone',
      'minecraft:glowstone_dust'
    ]
  )//mtr:signal_light_4

  mtr.shapeless(Item.of('mtr:signal_light_3_aspect_1',2),
    [
      'minecraft:blackstone',
      '#c:green_dyes',
      '#c:yellow_dyes',
      '#c:red_dyes',
      'minecraft:redstone',
      'minecraft:glowstone_dust'
    ]
  )//mtr:signal_light_3_aspect_1

  mtr.shapeless(Item.of('mtr:signal_light_3_aspect_2',2),
    [
      'minecraft:blackstone',
      '#c:green_dyes',
      '#c:green_dyes',
      '#c:yellow_dyes',
      '#c:yellow_dyes',
      '#c:red_dyes',
      '#c:red_dyes',
      'minecraft:redstone',
      'minecraft:glowstone_dust'
    ]
  )//mtr:signal_light_3_aspect_2

  mtr.shapeless(Item.of('mtr:signal_light_4_aspect_1',2),
    [
      'minecraft:blackstone',
      '#c:yellow_dyes',
      '#c:green_dyes',
      '#c:yellow_dyes',
      '#c:red_dyes',
      'minecraft:redstone',
      'minecraft:glowstone_dust'
    ]
  )//mtr:signal_light_4_aspect_1

  mtr.shapeless(Item.of('mtr:signal_light_4_aspect_2',2),
    [
      'minecraft:blackstone',
      '#c:yellow_dyes',
      '#c:yellow_dyes',
      '#c:green_dyes',
      '#c:green_dyes',
      '#c:yellow_dyes',
      '#c:red_dyes',
      'minecraft:redstone',
      'minecraft:glowstone_dust'
    ]
  )//mtr:signal_light_4_aspect_2

  mtr.shaped(Item.of('mtr:signal_pole',8),
    [
      'BIB',
      'BIB',
      'BIB'
    ],
    {
      B: '#c:fences',
      I: 'minecraft:iron_ingot'
    }
  )//mtr:signal_pole

  mtr.shapeless(Item.of('mtr:signal_remover_black'),
    [
      'minecraft:rail',
      '#c:black_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_black

  mtr.shapeless(Item.of('mtr:signal_remover_blue'),
    [
      'minecraft:rail',
      '#c:blue_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_blue

  mtr.shapeless(Item.of('mtr:signal_remover_brown'),
    [
      'minecraft:rail',
      '#c:brown_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_brown

  mtr.shapeless(Item.of('mtr:signal_remover_cyan'),
    [
      'minecraft:rail',
      '#c:cyan_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_cyan

  mtr.shapeless(Item.of('mtr:signal_remover_gray'),
    [
      'minecraft:rail',
      '#c:gray_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_gray

  mtr.shapeless(Item.of('mtr:signal_remover_green'),
    [
      'minecraft:rail',
      '#c:green_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_green

  mtr.shapeless(Item.of('mtr:signal_remover_light_blue'),
    [
      'minecraft:rail',
      '#c:light_blue_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_light_blue

  mtr.shapeless(Item.of('mtr:signal_remover_light_gray'),
    [
      'minecraft:rail',
      '#c:light_gray_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_light_gray

  mtr.shapeless(Item.of('mtr:signal_remover_lime'),
    [
      'minecraft:rail',
      '#c:lime_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_lime

  mtr.shapeless(Item.of('mtr:signal_remover_magenta'),
    [
      'minecraft:rail',
      '#c:magenta_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_magenta

  mtr.shapeless(Item.of('mtr:signal_remover_orange'),
    [
      'minecraft:rail',
      '#c:orange_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_orange

  mtr.shapeless(Item.of('mtr:signal_remover_pink'),
    [
      'minecraft:rail',
      '#c:pink_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_pink

  mtr.shapeless(Item.of('mtr:signal_remover_purple'),
    [
      'minecraft:rail',
      '#c:purple_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_purple

  mtr.shapeless(Item.of('mtr:signal_remover_red'),
    [
      'minecraft:rail',
      '#c:red_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_red

  mtr.shapeless(Item.of('mtr:signal_remover_white'),
    [
      'minecraft:rail',
      '#c:white_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_white

  mtr.shapeless(Item.of('mtr:signal_remover_yellow'),
    [
      'minecraft:rail',
      '#c:yellow_dyes',
      'minecraft:lava_bucket'
    ]
  )//mtr:signal_remover_yellow

  mtr.shapeless(Item.of('mtr:signal_semaphore_1',2),
    [
      'mtr:signal_pole',
      'minecraft:stick',
      '#c:green_dyes',
      '#c:red_dyes',
      'minecraft:redstone',
      'minecraft:glowstone_dust'
    ]
  )//mtr:signal_semaphore_1

  mtr.shapeless(Item.of('mtr:signal_semaphore_2',2),
    [
      'mtr:signal_pole',
      'minecraft:stick',
      '#c:green_dyes',
      '#c:green_dyes',
      '#c:red_dyes',
      '#c:red_dyes',
      'minecraft:redstone',
      'minecraft:glowstone_dust'
    ]
  )//mtr:signal_semaphore_2

  mtr.shaped(Item.of('mtr:station_color_andesite_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_andesite'
    }
  )//mtr:station_color_andesite_slab

  mtr.shaped(Item.of('mtr:station_color_andesite',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:andesite',
      D: '#c:dyes'
    }
  )//mtr:station_color_andesite

  mtr.shaped(Item.of('mtr:station_color_bedrock_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_bedrock'
    }
  )//mtr:station_color_bedrock_slab

  mtr.shaped(Item.of('mtr:station_color_bedrock',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:cobblestone',
      D: 'minecraft:bed'
    }
  )//mtr:station_color_bedrock

  mtr.shaped(Item.of('mtr:station_color_birch_wood_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_birch_wood'
    }
  )//mtr:station_color_birch_wood_slab

  mtr.shaped(Item.of('mtr:station_color_birch_wood',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:birch_log',
      D: '#c:dyes'
    }
  )//mtr:station_color_birch_wood

  mtr.shaped(Item.of('mtr:station_color_bone_block_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_bone_block'
    }
  )//mtr:station_color_bone_block_slab

  mtr.shaped(Item.of('mtr:station_color_bone_block',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:bone_block',
      D: '#c:dyes'
    }
  )//mtr:station_color_bone_block

  mtr.shaped(Item.of('mtr:station_color_chiseled_quartz_block_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_chiseled_quartz_block'
    }
  )//mtr:station_color_chiseled_quartz_block_slab

  mtr.shaped(Item.of('mtr:station_color_chiseled_quartz_block',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:chiseled_quartz_block',
      D: '#c:dyes'
    }
  )//mtr:station_color_chiseled_quartz_block

  mtr.shaped(Item.of('mtr:station_color_chiseled_stone_bricks_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_chiseled_stone_bricks'
    }
  )//mtr:station_color_chiseled_stone_bricks_slab

  mtr.shaped(Item.of('mtr:station_color_chiseled_stone_bricks',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:chiseled_stone_bricks',
      D: '#c:dyes'
    }
  )//mtr:station_color_chiseled_stone_bricks

  mtr.shaped(Item.of('mtr:station_color_clay_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_clay'
    }
  )//mtr:station_color_clay_slab

  mtr.shaped(Item.of('mtr:station_color_clay',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:clay',
      D: '#c:dyes'
    }
  )//mtr:station_color_clay

  mtr.shaped(Item.of('mtr:station_color_coal_ore_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_coal_ore'
    }
  )//mtr:station_color_coal_ore_slab

  mtr.shaped(Item.of('mtr:station_color_coal_ore',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:coal_ore',
      D: '#c:dyes'
    }
  )//mtr:station_color_coal_ore

  mtr.shaped(Item.of('mtr:station_color_cobblestone_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_cobblestone'
    }
  )//mtr:station_color_cobblestone_slab

  mtr.shaped(Item.of('mtr:station_color_cobblestone',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:cobblestone',
      D: '#c:dyes'
    }
  )//mtr:station_color_cobblestone

  mtr.shaped(Item.of('mtr:station_color_concrete_powder_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_concrete_powder'
    }
  )//mtr:station_color_concrete_powder_slab

  mtr.shaped(Item.of('mtr:station_color_concrete_powder',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: '#c:concrete_powders',
      D: '#c:dyes'
    }
  )//mtr:station_color_concrete_powder

  mtr.shaped(Item.of('mtr:station_color_concrete_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_concrete'
    }
  )//mtr:station_color_concrete_slab

  mtr.shaped(Item.of('mtr:station_color_concrete',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: '#c:concretes',
      D: '#c:dyes'
    }
  )//mtr:station_color_concrete

  mtr.shaped(Item.of('mtr:station_color_cracked_stone_bricks_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_cracked_stone_bricks'
    }
  )//mtr:station_color_cracked_stone_bricks_slab

  mtr.shaped(Item.of('mtr:station_color_cracked_stone_bricks',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:cracked_stone_bricks',
      D: '#c:dyes'
    }
  )//mtr:station_color_cracked_stone_bricks

  mtr.shaped(Item.of('mtr:station_color_dark_prismarine_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_dark_prismarine'
    }
  )//mtr:station_color_dark_prismarine_slab

  mtr.shaped(Item.of('mtr:station_color_dark_prismarine',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:dark_prismarine',
      D: '#c:dyes'
    }
  )//mtr:station_color_dark_prismarine

  mtr.shaped(Item.of('mtr:station_color_diorite_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_diorite'
    }
  )//mtr:station_color_diorite_slab

  mtr.shaped(Item.of('mtr:station_color_diorite',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:diorite',
      D: '#c:dyes'
    }
  )//mtr:station_color_diorite

  mtr.shaped(Item.of('mtr:station_color_gravel_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_gravel'
    }
  )//mtr:station_color_gravel_slab

  mtr.shaped(Item.of('mtr:station_color_gravel',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:gravel',
      D: '#c:dyes'
    }
  )//mtr:station_color_gravel

  mtr.shaped(Item.of('mtr:station_color_iron_block_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_iron_block'
    }
  )//mtr:station_color_iron_block_slab

  mtr.shaped(Item.of('mtr:station_color_iron_block',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:iron_block',
      D: '#c:dyes'
    }
  )//mtr:station_color_iron_block

  mtr.shaped(Item.of('mtr:station_color_metal_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_metal'
    }
  )//mtr:station_color_metal_slab

  mtr.shaped(Item.of('mtr:station_color_metal',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'mtr:metal',
      D: '#c:dyes'
    }
  )//mtr:station_color_metal

  mtr.shaped(Item.of('mtr:station_color_planks_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_planks'
    }
  )//mtr:station_color_planks_slab

  mtr.shaped(Item.of('mtr:station_color_planks',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: '#minecraft:planks',
      D: '#c:dyes'
    }
  )//mtr:station_color_planks

  mtr.shaped(Item.of('mtr:station_color_polished_andesite_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_polished_andesite'
    }
  )//mtr:station_color_polished_andesite_slab

  mtr.shaped(Item.of('mtr:station_color_polished_andesite',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:polished_andesite',
      D: '#c:dyes'
    }
  )//mtr:station_color_polished_andesite

  mtr.shaped(Item.of('mtr:station_color_polished_diorite_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_polished_diorite'
    }
  )//mtr:station_color_polished_diorite_slab

  mtr.shaped(Item.of('mtr:station_color_polished_diorite',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:polished_diorite',
      D: '#c:dyes'
    }
  )//mtr:station_color_polished_diorite

  mtr.shaped(Item.of('mtr:station_color_purpur_block_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_purpur_block'
    }
  )//mtr:station_color_purpur_block_slab

  mtr.shaped(Item.of('mtr:station_color_purpur_block',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:purpur_block',
      D: '#c:dyes'
    }
  )//mtr:station_color_purpur_block

  mtr.shaped(Item.of('mtr:station_color_purpur_pillar_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_purpur_pillar'
    }
  )//mtr:station_color_purpur_pillar_slab

  mtr.shaped(Item.of('mtr:station_color_purpur_pillar',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:purpur_pillar',
      D: '#c:dyes'
    }
  )//mtr:station_color_purpur_pillar

  mtr.shaped(Item.of('mtr:station_color_quartz_block_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_quartz_block'
    }
  )//mtr:station_color_quartz_block_slab

  mtr.shaped(Item.of('mtr:station_color_quartz_block',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:quartz_block',
      D: '#c:dyes'
    }
  )//mtr:station_color_quartz_block

  mtr.shaped(Item.of('mtr:station_color_quartz_bricks_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_quartz_bricks'
    }
  )//mtr:station_color_quartz_bricks_slab

  mtr.shaped(Item.of('mtr:station_color_quartz_bricks',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:quartz_bricks',
      D: '#c:dyes'
    }
  )//mtr:station_color_quartz_bricks

  mtr.shaped(Item.of('mtr:station_color_quartz_pillar_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_quartz_pillar'
    }
  )//mtr:station_color_quartz_pillar_slab

  mtr.shaped(Item.of('mtr:station_color_quartz_pillar',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:quartz_pillar',
      D: '#c:dyes'
    }
  )//mtr:station_color_quartz_pillar

  mtr.shaped(Item.of('mtr:station_color_smooth_quartz_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_smooth_quartz'
    }
  )//mtr:station_color_smooth_quartz_slab

  mtr.shaped(Item.of('mtr:station_color_smooth_quartz',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:smooth_quartz',
      D: '#c:dyes'
    }
  )//mtr:station_color_smooth_quartz

  mtr.shaped(Item.of('mtr:station_color_smooth_stone_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_smooth_stone'
    }
  )//mtr:station_color_smooth_stone_slab

  mtr.shaped(Item.of('mtr:station_color_smooth_stone',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:smooth_stone',
      D: '#c:dyes'
    }
  )//mtr:station_color_smooth_stone

  mtr.shaped(Item.of('mtr:station_color_snow_block_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_snow_block'
    }
  )//mtr:station_color_snow_block_slab

  mtr.shaped(Item.of('mtr:station_color_snow_block',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:snow_block',
      D: '#c:dyes'
    }
  )//mtr:station_color_snow_block

  mtr.shaped(Item.of('mtr:station_color_stained_glass_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_stained_glass'
    }
  )//mtr:station_color_stained_glass_slab

  mtr.shaped(Item.of('mtr:station_color_stained_glass',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: '#c:stained_glass',
      D: '#c:dyes'
    }
  )//mtr:station_color_stained_glass

  mtr.shaped(Item.of('mtr:station_color_stone_bricks_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_stone_bricks'
    }
  )//mtr:station_color_stone_bricks_slab

  mtr.shaped(Item.of('mtr:station_color_stone_bricks',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:stone_bricks',
      D: '#c:dyes'
    }
  )//mtr:station_color_stone_bricks

  mtr.shaped(Item.of('mtr:station_color_stone_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_stone'
    }
  )//mtr:station_color_stone_slab

  mtr.shaped(Item.of('mtr:station_color_stone',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: 'minecraft:stone',
      D: '#c:dyes'
    }
  )//mtr:station_color_stone

  mtr.shaped(Item.of('mtr:station_color_wool_slab',6),
    [
      'BBB'
    ],
    {
      B: 'mtr:station_color_wool'
    }
  )//mtr:station_color_wool_slab

  mtr.shaped(Item.of('mtr:station_color_wool',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: '#c:wools',
      D: '#c:dyes'
    }
  )//mtr:station_color_wool

  mtr.shapeless(Item.of('mtr:station_name_entrance',2),
    [
      'mtr:station_name_wall',
      'mtr:logo'
    ]
  )//mtr:station_name_entrance

  mtr.shapeless(Item.of('mtr:station_name_tall_block_double_sided'),
    [
      'mtr:station_name_wall',
      'mtr:station_name_wall',
      'minecraft:stone',
      'mtr:station_pole'
    ]
  )//mtr:station_name_tall_block_double_sided

  mtr.shapeless(Item.of('mtr:station_name_tall_block'),
    [
      'mtr:station_name_wall',
      'minecraft:stone',
      'mtr:station_pole'
    ]
  )//mtr:station_name_tall_block

  mtr.shapeless(Item.of('mtr:station_name_tall_wall'),
    [
      'mtr:station_name_wall',
      'minecraft:stone'
    ]
  )//mtr:station_name_tall_wall

  mtr.shapeless(Item.of('mtr:station_name_wall_black'),
    [
      'mtr:station_name_wall_gray'
    ]
  )//mtr:station_name_wall_black

  mtr.shapeless(Item.of('mtr:station_name_wall_gray'),
    [
      'mtr:station_name_wall'
    ]
  )//mtr:station_name_wall_gray

  mtr.shapeless(Item.of('mtr:station_name_wall'),
    [
      '#minecraft:signs',
      '#minecraft:signs',
      'minecraft:iron_ingot'
    ]
  )//mtr:station_name_wall_1

  mtr.shapeless(Item.of('mtr:station_name_wall'),
    [
      'mtr:station_name_wall_black'
    ]
  )//mtr:station_name_wall_2

  mtr.shaped(Item.of('mtr:station_pole',8),
    [
      'BBB',
      'BDB',
      'BBB'
    ],
    {
      B: '#c:fences',
      D: '#c:dyes'
    }
  )//mtr:station_pole

  mtr.shaped(Item.of('mtr:tactile_map',1),
    [
      ' B ',
      ' D ',
      'DDD'
    ],
    {
      B: 'minecraft:jukebox',
      D: 'minecraft:iron_ingot'
    }
  )//mtr:tactile_map

  mtr.shaped(Item.of('mtr:ticket_barrier_entrance_1',32),
    [
      'RG',
      'BB'
    ],
    {
      R: 'minecraft:redstone',
      G: 'minecraft:glowstone_dust',
      B: 'minecraft:iron_block'
    }
  )//mtr:ticket_barrier_entrance_1_1

  mtr.shapeless(Item.of('mtr:ticket_barrier_entrance_1'),
    [
      'mtr:ticket_barrier_exit_1'
    ]
  )//mtr:ticket_barrier_entrance_1_2

  mtr.shapeless(Item.of('mtr:ticket_barrier_exit_1'),
    [
      'mtr:ticket_barrier_entrance_1'
    ]
  )//mtr:ticket_barrier_exit_1

  mtr.shaped(Item.of('mtr:ticket_machine',4),
    [
      'III',
      'IGI',
      'SRS'
    ],
    {
      I: 'minecraft:iron_ingot',
      G: 'minecraft:glowstone_dust',
      S: 'minecraft:stone',
      R: 'minecraft:redstone'
    }
  )//mtr:ticket_machine

  mtr.shaped(Item.of('mtr:ticket_processor',32),
    [
      ' I ',
      'RIG',
      'III'
    ],
    {
      I: 'minecraft:iron_ingot',
      G: 'minecraft:glowstone_dust',
      R: 'minecraft:redstone'
    }
  )//mtr:ticket_processor_1

  mtr.shapeless(Item.of('mtr:ticket_processor'),
    [
      'mtr:ticket_processor_enquiry'
    ]
  )//mtr:ticket_processor_2

  mtr.shapeless(Item.of('mtr:ticket_processor_enquiry'),
    [
      'mtr:ticket_processor_exit'
    ]
  )//mtr:ticket_processor_enquiry

  mtr.shapeless(Item.of('mtr:ticket_processor_entrance'),
    [
      'mtr:ticket_processor'
    ]
  )//mtr:ticket_processor_entrance

  mtr.shapeless(Item.of('mtr:ticket_processor_exit'),
    [
      'mtr:ticket_processor_entrance'
    ]
  )//mtr:ticket_processor_exit

  mtr.shapeless(Item.of('mtr:train_announcer',3),
    [
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
      'minecraft:redstone',
      'minecraft:smooth_stone',
      'minecraft:smooth_stone',
      'minecraft:smooth_stone'
    ]
  )//mtr:train_announcer

  mtr.shapeless(Item.of('mtr:train_cargo_loader',3),
    [
      'minecraft:hopper',
      'minecraft:piston',
      'minecraft:redstone',
      'minecraft:smooth_stone',
      'minecraft:smooth_stone',
      'minecraft:smooth_stone',
      '#c:nodes'
    ]
  )//mtr:train_cargo_loader

  mtr.shapeless(Item.of('mtr:train_cargo_unloader',3),
    [
      'minecraft:hopper',
      'minecraft:chest',
      'minecraft:redstone',
      'minecraft:smooth_stone',
      'minecraft:smooth_stone',
      'minecraft:smooth_stone',
      '#c:nodes'
    ]
  )//mtr:train_cargo_unloader

  mtr.shapeless(Item.of('mtr:train_schedule_sensor',3),
    [
      'minecraft:redstone',
      'minecraft:redstone',
      'minecraft:clock',
      'minecraft:smooth_stone',
      'minecraft:smooth_stone',
      'minecraft:smooth_stone',
      '#c:nodes'
    ]
  )//mtr:train_schedule_sensor

  mtr.shapeless(Item.of('mtr:train_sensor',3),
    [
      'minecraft:redstone',
      'minecraft:redstone',
      'minecraft:redstone',
      'minecraft:smooth_stone',
      'minecraft:smooth_stone',
      'minecraft:smooth_stone',
      '#c:nodes'
    ]
  )//mtr:train_sensor

  mtr.shaped(Item.of('mtr:tunnel_creator_4_3',2),
    [
      'T T'
    ],
    {
      T: 'mtr:tunnel_creator_4_5'
    }
  )//mtr:tunnel_creator_4_3_2

  mtr.shaped(Item.of('mtr:tunnel_creator_4_3',2),
    [
      'T',
      ' ',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_5_3'
    }
  )//mtr:tunnel_creator_4_3_4

  mtr.shaped(Item.of('mtr:tunnel_creator_4_3',8),
    [
      'WWW',
      'WIW',
      'W W'
    ],
    {
      I: 'minecraft:iron_ingot',
      W: '#minecraft:logs'
    }
  )//mtr:tunnel_creator_4_3_main

  mtr.shaped(Item.of('mtr:tunnel_creator_4_5',2),
    [
      'TT'
    ],
    {
      T: 'mtr:tunnel_creator_4_3'
    }
  )//mtr:tunnel_creator_4_5_1

  mtr.shaped(Item.of('mtr:tunnel_creator_4_5',2),
    [
      'T T'
    ],
    {
      T: 'mtr:tunnel_creator_4_7'
    }
  )//mtr:tunnel_creator_4_5_2

  mtr.shaped(Item.of('mtr:tunnel_creator_4_5',2),
    [
      'T',
      ' ',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_5_5'
    }
  )//mtr:tunnel_creator_4_5_4

  mtr.shaped(Item.of('mtr:tunnel_creator_4_7',2),
    [
      'TT'
    ],
    {
      T: 'mtr:tunnel_creator_4_5'
    }
  )//mtr:tunnel_creator_4_7_1

  mtr.shaped(Item.of('mtr:tunnel_creator_4_7',2),
    [
      'T T'
    ],
    {
      T: 'mtr:tunnel_creator_4_9'
    }
  )//mtr:tunnel_creator_4_7_2

  mtr.shaped(Item.of('mtr:tunnel_creator_4_7',2),
    [
      'T',
      ' ',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_5_7'
    }
  )//mtr:tunnel_creator_4_7_4

  mtr.shaped(Item.of('mtr:tunnel_creator_4_9',2),
    [
      'TT'
    ],
    {
      T: 'mtr:tunnel_creator_4_7'
    }
  )//mtr:tunnel_creator_4_9_1

  mtr.shaped(Item.of('mtr:tunnel_creator_4_9',2),
    [
      'T',
      ' ',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_5_9'
    }
  )//mtr:tunnel_creator_4_9_4

  mtr.shaped(Item.of('mtr:tunnel_creator_5_3',2),
    [
      'T T'
    ],
    {
      T: 'mtr:tunnel_creator_5_5'
    }
  )//mtr:tunnel_creator_5_3_2

  mtr.shaped(Item.of('mtr:tunnel_creator_5_3',2),
    [
      'T',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_4_3'
    }
  )//mtr:tunnel_creator_5_3_3

  mtr.shaped(Item.of('mtr:tunnel_creator_5_3',2),
    [
      'T',
      ' ',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_6_3'
    }
  )//mtr:tunnel_creator_5_3_4

  mtr.shaped(Item.of('mtr:tunnel_creator_5_5',2),
    [
      'TT'
    ],
    {
      T: 'mtr:tunnel_creator_5_3'
    }
  )//mtr:tunnel_creator_5_5_1

  mtr.shaped(Item.of('mtr:tunnel_creator_5_5',2),
    [
      'T T'
    ],
    {
      T: 'mtr:tunnel_creator_5_7'
    }
  )//mtr:tunnel_creator_5_5_2

  mtr.shaped(Item.of('mtr:tunnel_creator_5_5',2),
    [
      'T',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_4_5'
    }
  )//mtr:tunnel_creator_5_5_3

  mtr.shaped(Item.of('mtr:tunnel_creator_5_5',2),
    [
      'T',
      ' ',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_6_5'
    }
  )//mtr:tunnel_creator_5_5_4

  mtr.shaped(Item.of('mtr:tunnel_creator_5_7',2),
    [
      'TT'
    ],
    {
      T: 'mtr:tunnel_creator_5_5'
    }
  )//mtr:tunnel_creator_5_7_1

  mtr.shaped(Item.of('mtr:tunnel_creator_5_7',2),
    [
      'T T'
    ],
    {
      T: 'mtr:tunnel_creator_5_9'
    }
  )//mtr:tunnel_creator_5_7_2

  mtr.shaped(Item.of('mtr:tunnel_creator_5_7',2),
    [
      'T',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_4_7'
    }
  )//mtr:tunnel_creator_5_7_3

  mtr.shaped(Item.of('mtr:tunnel_creator_5_7',2),
    [
      'T',
      ' ',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_6_7'
    }
  )//mtr:tunnel_creator_5_7_4

  mtr.shaped(Item.of('mtr:tunnel_creator_5_9',2),
    [
      'TT'
    ],
    {
      T: 'mtr:tunnel_creator_5_7'
    }
  )//mtr:tunnel_creator_5_9_1

  mtr.shaped(Item.of('mtr:tunnel_creator_5_9',2),
    [
      'T',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_4_9'
    }
  )//mtr:tunnel_creator_5_9_3

  mtr.shaped(Item.of('mtr:tunnel_creator_5_9',2),
    [
      'T',
      ' ',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_6_9'
    }
  )//mtr:tunnel_creator_5_9_4

  mtr.shaped(Item.of('mtr:tunnel_creator_6_3',2),
    [
      'T T'
    ],
    {
      T: 'mtr:tunnel_creator_6_5'
    }
  )//mtr:tunnel_creator_6_3_2

  mtr.shaped(Item.of('mtr:tunnel_creator_6_3',2),
    [
      'T',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_5_3'
    }
  )//mtr:tunnel_creator_6_3_3

  mtr.shaped(Item.of('mtr:tunnel_creator_6_5',2),
    [
      'TT'
    ],
    {
      T: 'mtr:tunnel_creator_6_3'
    }
  )//mtr:tunnel_creator_6_5_1

  mtr.shaped(Item.of('mtr:tunnel_creator_6_5',2),
    [
      'T T'
    ],
    {
      T: 'mtr:tunnel_creator_6_7'
    }
  )//mtr:tunnel_creator_6_5_2

  mtr.shaped(Item.of('mtr:tunnel_creator_6_5',2),
    [
      'T',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_5_5'
    }
  )//mtr:tunnel_creator_6_5_3

  mtr.shaped(Item.of('mtr:tunnel_creator_6_7',2),
    [
      'TT'
    ],
    {
      T: 'mtr:tunnel_creator_6_5'
    }
  )//mtr:tunnel_creator_6_7_1

  mtr.shaped(Item.of('mtr:tunnel_creator_6_7',2),
    [
      'T T'
    ],
    {
      T: 'mtr:tunnel_creator_6_9'
    }
  )//mtr:tunnel_creator_6_7_2

  mtr.shaped(Item.of('mtr:tunnel_creator_6_7',2),
    [
      'T',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_5_7'
    }
  )//mtr:tunnel_creator_6_7_3

  mtr.shaped(Item.of('mtr:tunnel_creator_6_9',2),
    [
      'TT'
    ],
    {
      T: 'mtr:tunnel_creator_6_7'
    }
  )//mtr:tunnel_creator_6_9_1

  mtr.shaped(Item.of('mtr:tunnel_creator_6_9',2),
    [
      'T',
      'T'
    ],
    {
      T: 'mtr:tunnel_creator_5_9'
    }
  )//mtr:tunnel_creator_6_9_3

})



//This File has been authored by Tianzhuone