#!/usr/bin/env zx

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
 * @param {`-${string}=${string}`[]} args
 * @returns
 */
async function getParams(args) {
  let c = 1 //  count   数量
  let s = 1 //  seconds 秒

  let px = 0 // position x
  let py = 0 // position y

  const wX = 6 // wave x 轴波动范围
  const wY = 6 // wave y 轴波动范围

  if (args.length !== 0) {
    for (const arg of args) {
      const [tag, value] = arg.split('=')

      switch (tag) {
        case '-c':
          c = parseInt(value)
          break

        case '--count':
          c = parseInt(value)
          break

        case '-s':
          s = parseInt(value)
          break

        case '--seconds':
          s = parseInt(value)
          break

        case '-p':
          if (value.includes(',')) {
            const [x, y] = value.trim().split(',')
            px = parseInt(x)
            py = parseInt(y)
          }
          break

        case '--position':
          if (value.includes(',')) {
            const [x, y] = value.trim().split(',')
            px = parseInt(x)
            py = parseInt(y)
          }
          break

        default:
          throw Error(`Unknown argument: ${tag}`)
      }
    }
  }

  return { c, s, px, py, wX, wY }
}

async function main() {
  const [, , , ...args] = process.argv
  const { c, s, px, py, wX, wY } = await getParams(args)

  for (let i = 0; i < c; i++) {
    const halfWX = Math.floor(wX / 2)
    const halfWY = Math.floor(wY / 2)

    let x = px - halfWX + generatorRandomNumber(wX)
    let y = py - halfWY + generatorRandomNumber(wY)

    x = x < 0 ? 0 : x
    y = y < 0 ? 0 : y

    const position = `${x},${y}`

    await $`cliclick c:${position}`
    await $`cliclick c:${position}`
    await $`sleep ${s}`

    await $`cliclick c:${position}`
    await $`cliclick c:${position}`
    await $`sleep 3`

    console.log(`第 ${i} 次`)
  }

  console.log(`共执行了 ${c} 次, 每次等待 ${s} 秒`)
}

main()
