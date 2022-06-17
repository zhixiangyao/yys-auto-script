#!/usr/bin/env zx

import { main } from '../scripts/index.mjs'

/**
 * @typedef {'seconds' | 'position' | 'log'}    TrackType
 * @typedef {`${number},${number}`}    Position
 *
 * @typedef {Object}                   Track
 * @property {TrackType}               type
 * @property {number=}                 seconds
 * @property {Position=}               position
 *
 * @typedef {Object}                   Configs
 * @property {number}                  wX
 * @property {number}                  wY
 * @property {Position}                containerPosition
 * @property {number}                  count
 * @property {Array<Track>}            trackList
 */

/**
 * @type {Configs}
 */
const configs = {
  wX: 6,
  wY: 6,
  containerPosition: '0,0',
  count: 1000,
  trackList: [
    { type: 'position', position: '1,1' },
    { type: 'seconds', seconds: 21 },
    { type: 'position', position: '1,1' },
    { type: 'seconds', seconds: 3 },
    { type: 'log' },
  ],
}

main(configs)
