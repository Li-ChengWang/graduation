# 大老二の日本畢業旅行

2026/08/07–08/18 關西畢業旅行的靜態行程網站。內容依
`大老二排日本行程.xlsx` 整理，採用原生 HTML、CSS 與 JavaScript，
不需要安裝套件或執行建置。

## 本機預覽

最簡單的方式是直接開啟 `index.html`。若電腦已安裝 Python，也可以在本資料夾執行：

```powershell
python -m http.server 8000
```

接著開啟 `http://localhost:8000`。

## 發布到 GitHub Pages

1. 在 GitHub 建立一個新的 repository。
2. 將本資料夾 commit 並 push 到 `main` 分支。
3. 進入 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**。
5. Branch 選 `main`，資料夾選 `/(root)`，按下儲存。

GitHub 完成部署後，Pages 畫面會顯示公開網址。

## 修改內容

- 頁面結構與固定文字：`index.html`
- 顏色、版面與手機樣式：`styles.css`
- 每日行程、行前清單與互動：`script.js`

每日行程位於 `script.js` 最上方的 `tripData`。尚未排完的
08/14–08/16 已標示為「規劃中」。

## 個人記帳

費用區會替每份帳本固定帶入 Excel 已有的每人費用 NT$16,885，並可另外
記錄台幣或日圓支出。若填入自己的日圓換匯匯率，頁面會顯示估算的台幣
總額。

帳本使用瀏覽器的 `localStorage` 保存，只會存在建立帳本的裝置與瀏覽器，
不會同步到其他人的手機。清除網站資料、使用無痕模式或更換瀏覽器都可能
讓紀錄消失；若需要全團即時共享，必須再串接共用資料庫與登入機制。

頁面右下角的 `¥` 圓形按鈕可隨時開啟日圓換算器。換算器會優先帶入目前
帳本的日圓匯率，也能記住這台裝置上次使用的匯率；換算匯率只有在使用者
按下「套用到帳本」後才會修改個人帳本。

## 公開資訊提醒

這份公開版刻意未加入付款人、轉帳狀態、分房名單、私人住宿地址與原始
Excel。不要把含有團員個資、訂位代碼或私人地圖的 Excel 原檔 commit
到公開 repository；即使之後刪除，資料仍可能留在 Git 歷史中。
