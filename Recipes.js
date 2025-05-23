ServerEvents.recipes(mtr => {
	mtr.shapeless(
		Item.of('mtr:apg_door', 8),
		[
			'minecraft::redstone_block',
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
          I: 'minecraft:iron_ingots',
          G: 'minecraft:glowstone_dusts',
          C: 'minecraft:clock'
        }
    )//mtr:arrival_projector_1_small x8

    mtr.shapeless(Item.of('mtr:arrival_projector_1_small'),
        [
          'mtr:arrival_projector_1_large'
        ]
    )//mtr:arrival_projector_1_small









})