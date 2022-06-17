# 阴阳师自动脚本

阴阳师自动脚本 (只能在 macOS 上使用)

## 背景

- macOS(本人是 MacBook Pro M1)
  - Homebrew
    - cliclick
    - Node.js
  - 阴阳师

# 安装

前置条件需安装 homebrew 和 node

```bash
homebrew install cliclick # 获取鼠标坐标 和 模拟鼠标点击的工具
homebrew install node # JavaScript 运行时环境
```

克隆项目 or 下载项目

```bash
cd ~/xxx/yys-auto-script

# 安装好 node 后，通过 npm(node package manager) 安装 zx 脚本工具
npm install
# or
yarn
# or
pnpm install
```

## 运行

- `npm run jue-xing-cai-liao` 觉醒材料

```js
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
```

