ServerEvents.recipes(mtr => {
	mtr.shapeless(
		Item.of('mtr:apg_door', 8),
		[
			'minecraft::redstone_block',
			'minecraft:iron_door',
			'minecraft:glowstone_dust',
			'minecraft:glass_pane'
		]
	)
})