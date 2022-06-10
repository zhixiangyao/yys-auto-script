# 阴阳师自动脚本

阴阳师自动脚本(只能在 macOS 上使用)

## 背景

- macOS
  - Homebrew
    - cliclick
  - Node.js
    - zx
  - 阴阳师

# 安装

前置条件 homebrew

```bash
homebrew install cliclick # 获取鼠标坐标
homebrew install node # JavaScript 运行时环境
# 安装好 node 后，安装 zx
npm install --global zx
```

## run

```bash
# 先把鼠标放到 “开始” 获取鼠标坐标
cliclick p
```

```bash
# -c 是 count 次数
# -s 是 seconds 是延迟时间
# -p 是 position 坐标
zx ~/xxx/yys-auto.mjs -c=1000 -s=21 -p=793,570
```
