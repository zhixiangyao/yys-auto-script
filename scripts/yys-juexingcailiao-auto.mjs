#!/usr/bin/env zx

import { main } from '../scripts/index.mjs'

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

/**
 * @type {Configs}
 */
const configs = {
  wX: 6,
  wY: 6,
  containerPosition: '1287,43',
  count: 1000,
  trackList: [
    { type: 'position', position: '1604,521' },
    { type: 'seconds', seconds: 21 },
    { type: 'position', position: '1604,521' },
    { type: 'position', position: '1604,521' },
    { type: 'seconds', seconds: 3 },
    { type: 'log' },
  ],
}

main(configs)
