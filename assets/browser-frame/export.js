// Render the existing HTML/CSS frame to a transparent canvas; never flatten onto white.
document.querySelector('#export-png').addEventListener('click', async (event) => {
  const button = event.currentTarget
  const status = document.querySelector('#export-status')
  button.disabled = true
  try {
    await document.fonts.ready
    const source = document.querySelector('.canvas')
    const copy = source.cloneNode(true)
    const images = [...source.querySelectorAll('img')]
    for (const [index, image] of [...copy.querySelectorAll('img')].entries()) {
      const original = images[index]
      await original.decode()
      const bitmap = document.createElement('canvas')
      bitmap.width = original.naturalWidth
      bitmap.height = original.naturalHeight
      bitmap.getContext('2d').drawImage(original, 0, 0)
      image.src = bitmap.toDataURL('image/png')
    }
    const styles = document.querySelector('style').textContent
    const markup = new XMLSerializer().serializeToString(copy)
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="2988" height="1934"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family:'Segoe UI','Microsoft JhengHei',sans-serif"><style>${styles}</style>${markup}</div></foreignObject></svg>`
    const image = new Image()
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
    await image.decode()
    const output = document.createElement('canvas')
    output.width = 2988
    output.height = 1934
    const context = output.getContext('2d')
    context.drawImage(image, 0, 0)
    if (context.getImageData(0, 0, 1, 1).data[3] !== 0 || context.getImageData(1494, 100, 1, 1).data[3] !== 255)
      throw new Error('透明背景或外框未正確輸出。')
    const link = document.createElement('a')
    link.href = output.toDataURL('image/png')
    link.download = 'demo.png'
    link.textContent = '儲存 PNG'
    status.replaceChildren('透明 PNG 已產生（2988 × 1934）。', link)
    link.click()
  } catch (error) {
    status.textContent = `輸出失敗：${error.message}。請透過本機 HTTP 開啟模板，並確認圖片可讀取。`
  } finally {
    button.disabled = false
  }
})
