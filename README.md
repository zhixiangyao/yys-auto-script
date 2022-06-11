# 阴阳师自动脚本

阴阳师自动脚本 (只能在 macOS 上使用)

## 背景

- macOS(本人是 MacBook Pro M1)
  - Homebrew
    - cliclick
    - Node.js
      - zx
  - 阴阳师

# 安装

前置条件需安装 homebrew

```bash
homebrew install cliclick # 获取鼠标坐标 和 模拟鼠标点击的工具
homebrew install node # JavaScript 运行时环境

# 安装好 node 后，通过 npm(node package manager) 安装 zx 脚本工具
npm install --global zx
# or
yarn global add zx
# or
pnpm install -g zx
```

## 运行

- yys-juexingcailiao-auto.mjs 觉醒材料

  ```bash
  # 先把鼠标放到 “开始” 获取鼠标坐标
  cliclick p
  ```

  ```bash
  # -c 是 count 次数
  # -s 是 seconds 是延迟时间
  # -p 是 position 坐标
  zx ~/xxx/yys-juexingcailiao-auto.mjs -c=1000 -s=21 -p=793,570
  ```
