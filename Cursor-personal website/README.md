# 个人网站

静态个人网站，支持通过 GitHub Pages 部署为可公开访问的网址。

---

## 用 GitHub Pages 发布（获得可分享的网址）

### 1. 安装 Git（若尚未安装）

- 下载：<https://git-scm.com/download/win>  
- 安装后，在任意文件夹空白处右键，应能看到 **“Git Bash Here”** 或 **“Open in Terminal”**。

### 2. 注册 GitHub

- 打开 <https://github.com>，用邮箱注册账号并登录。

### 3. 在 GitHub 上新建仓库

1. 点击右上角 **“+”** → **“New repository”**。  
2. **Repository name** 填一个英文名，例如：`portfolio` 或 `my-site`（这就是你网址里的一截路径）。  
3. 选择 **Public**，**不要**勾选 “Add a README file”。  
4. 点击 **“Create repository”**。

### 4. 把本地的网站文件推送到这个仓库

在电脑上打开**本网站所在文件夹**（即包含 `index.html`、`css`、`js` 等文件的目录），在该文件夹里打开终端（或 Git Bash），依次执行：

```bash
git init
git add .
git commit -m "Initial commit: 个人网站"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

把上面命令里的 **`你的用户名`** 和 **`你的仓库名`** 换成你在第 3 步里填的 GitHub 用户名和仓库名。  
例如仓库名是 `portfolio`，用户是 `zhangsan`，则：

```bash
git remote add origin https://github.com/zhangsan/portfolio.git
```

执行 `git push` 时，会提示你登录 GitHub（浏览器或令牌），按提示完成即可。

### 5. 开启 GitHub Pages

1. 打开该仓库页面，点击 **“Settings”**。  
2. 左侧找到 **“Pages”**。  
3. 在 **“Build and deployment”** 里：  
   - **Source** 选 **“Deploy from a branch”**。  
   - **Branch** 选 **“main”**，文件夹选 **“/ (root)”**。  
4. 点击 **Save**。

### 6. 查看你的网址

等 1～2 分钟，再回到 **Settings → Pages**，页面上会显示类似：

**Your site is live at https://你的用户名.github.io/你的仓库名/**

例如：`https://zhangsan.github.io/portfolio/`

这个链接就是别人可以直接点击打开的网址，复制发给别人即可。

---

## 以后更新网站

修改本地文件后，在同一文件夹的终端里执行：

```bash
git add .
git commit -m "更新网站内容"
git push
```

推送后 GitHub Pages 会自动重新部署，几分钟后刷新网址即可看到更新。

---

## 项目结构说明

- `index.html` — 首页（含关于、技能、经历、教育、项目、联系等区块）
- `thank-you.html` — 感谢页
- `css/styles.css` — 样式
- `js/main.js` — 导航与交互
- `.nojekyll` — 用于 GitHub Pages，保证静态文件正常显示
