/**
 * @typedef {'seconds' | 'position' | 'log'}    TrackType
 * @typedef {`${number},${number}`}    Position
 *
 * @typedef {Object}                   Track
 * @property {TrackType}               type               类型
 * @property {number=}                 seconds            秒
 * @property {Position=}               position           鼠标坐标
 *
 * @typedef {Object}                   Configs
 * @property {number}                  wX                 每次点击 X 轴浮动范围
 * @property {number}                  wY                 每次点击 Y 轴浮动范围
 * @property {Position}                containerPosition  容器的位置
 * @property {number}                  count              次数
 * @property {Array<Track>}            trackList          轨迹列表
 */

function isNumber(number) {
  return typeof number === 'number'
}

function isPositional(p) {
  return (
    typeof p === 'string' && p.includes(',') && p.split(',').length === 2 && p.split(',').map(Number).every(isNumber)
  )
}

/**
 *
 * @param {number} number
 * @returns {number}
 */
function generatorRandomNumber(number) {
  return Math.floor(Math.random() * number)
}

/**
 *
 * @param {Configs} configs
 * @returns {Promise<void>}
 */
async function main(configs) {
  const { wX, wY, containerPosition, count, trackList } = configs

  // 聚焦目标容器
  await $`cliclick c:${containerPosition}`

  for (let i = 0; i < count; i++) {
    for (const track of trackList) {
      switch (track.type) {
        case 'seconds':
          if (!isNumber(track.seconds)) throw Error(`Unknown argument: ${track.type}`)

          await $`sleep ${track.seconds}`
          break

        case 'position':
          if (!isPositional(track.position)) throw Error(`Unknown argument: ${track.type}`)

          const halfWX = Math.floor(wX / 2)
          const halfWY = Math.floor(wY / 2)
          const [px, py] = track.position.split(',').map(Number)
          const x = px - halfWX + generatorRandomNumber(wX)
          const y = py - halfWY + generatorRandomNumber(wY)

          await $`cliclick c:${`${x},${y}`}`

          break

        case 'log':
          console.log(`执行了第 ${i} 次`)
          break

        default:
          throw Error(`Unknown type: ${track.type}`)
      }
    }
  }
}

export { main }
