// server_scripts/find_bee_nest.js
ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event

  event.register(
    Commands.literal('findnearestbee')
      .executes(ctx => {
        const player = ctx.source.player
        const level = player.level
        const playerPos = player.blockPosition()

        let nearest = null
        let nearestDist = Infinity

        level.getEntities().forEach(entity => {
          if (entity.type !== 'minecraft:bee') return
          const nbt = entity.nbt
          if (!nbt || !nbt.contains('HivePos')) return
          const hive = nbt.getIntArray('HivePos')
          const pos = BlockPos.of(hive[0], hive[1], hive[2])
          const dist = pos.distSqr(playerPos)
          if (dist < nearestDist) { nearestDist = dist; nearest = pos }
        })

        if (nearest) {
          level.killEntities(e => e.hasTag('bee_nest_marker'))
          const stand = level.createEntity('minecraft:armor_stand')
          stand.mergeNbt({ Invisible: 1, Glowing: 1, Marker: 1, NoGravity: 1, Tags: ['bee_nest_marker'] })
          stand.setPosition(nearest.x + 0.5, nearest.y, nearest.z + 0.5)
          level.spawnEntity(stand)
        }

        return 1
      })
  )
})