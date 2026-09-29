# README 展示圖模板

沿用 [demo.ai](../demo.ai) 第一張畫板的瀏覽器外框、圓角與陰影，以 HTML／CSS 製作。不需要 Illustrator 或安裝套件。

## 替換內容

1. 將這個資料夾複製到本機，準備專案實際啟動後的截圖。
2. 用文字編輯器開啟 `frame.html`，修改以下內容，再用 Chrome 開啟檔案。

| 位置 | 替換方式 |
| --- | --- |
| `.tab-title` | 文字與 `title` 屬性都換成網站原標題。長標題會自動省略，不需要手動截短。 |
| `.tab-icon` | 有網站圖示時，將 SVG 換成 `<img class="tab-icon" src="favicon.ico" alt="">`，並將圖示放在同一資料夾。 |
| `.address` 的文字 `<span>` | 公開站使用真實網域；內部系統使用如 `energy.port-services.example` 的示意網域，不放公司內網位址。 |
| `.page` | 將 `src="placeholder.svg"` 改成截圖路徑，例如 `src="page.png"`，並更新 `alt`。 |

截圖顯示區為 **1424 × 804**，建議在相同版面尺寸下擷取 **2848 × 1608** 圖片。先確認字型、圖片及圖表載入完整；尺寸不符時先重新截圖，避免拉伸介面。

公司內部畫面使用虛構展示資料並保留模擬資料標示。示意網址只用於外框，不放成可用的 Demo 連結。

## 輸出 PNG

畫布比例為 **1494 × 967**，HTML 已放大兩倍至 **2988 × 1934**，白色背景。

在 Chrome 開啟 `frame.html`，用開發者工具的裝置工具列設定 Responsive：寬 **2988**、高 **1934**、DPR **1**。透過命令選單執行 **Capture screenshot**，取得完整 PNG；不要把開發者工具一起截入，也不要再放大兩倍。

如果使用自動化截圖，同樣設定 viewport 為 2988 × 1934、device scale factor 為 1。完成後核對 PNG 的實際尺寸與格式，避免只把 JPEG 的副檔名改成 `.png`。

## 放入專案 README

將輸出圖存入該專案的 `docs/images/demo.png`，使用相對路徑引用：

```md
# 專案名稱 - 專案類型

> 一段介紹專案用途、主要功能與畫面特色。

![專案名稱展示畫面](./docs/images/demo.png)

---

原有 README 全文
```

原有 README 保留原文；模板、截圖工具與臨時展示設定不必一併放入各專案。
