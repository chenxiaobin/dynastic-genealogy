import domtoimage from 'dom-to-image-more'

export function useScreenshot() {
  async function capture(el, { shouldDownload = false, fileName = '明朝帝王世袭图' } = {}) {
    if (!el) return null

    // SVG overflow visible + 内联样式
    const allSvgs = el.querySelectorAll('svg')
    const origOverflows = []
    allSvgs.forEach(svg => {
      origOverflows.push(svg.style.overflow)
      svg.style.overflow = 'visible'
    })

    el.querySelectorAll('path, line, polyline').forEach(path => {
      const s  = path.getAttribute('stroke')       || getComputedStyle(path).stroke
      const sw = path.getAttribute('stroke-width') || getComputedStyle(path).strokeWidth
      const f  = path.getAttribute('fill')         || getComputedStyle(path).fill
      const sd = path.getAttribute('stroke-dasharray') || getComputedStyle(path).strokeDasharray
      if (s  && s  !== 'none') path.style.stroke = s
      if (sw)                  path.style.strokeWidth = sw
      if (f  && f  !== 'none') path.style.fill = f
      if (sd && sd !== 'none') path.style.strokeDasharray = sd
    })

    const W = el.offsetWidth
    const H = el.offsetHeight
    const scale = 4

    try {
      const dataUrl = await domtoimage.toPng(el, {
        bgcolor: '#d4eaf7',
        width:   W * scale,
        height:  H * scale,
        style: {
          transform:       `scale(${scale})`,
          transformOrigin: 'top left',
          width:  W + 'px',
          height: H + 'px',
        }
      })

      if (shouldDownload) {
        const link = document.createElement('a')
        link.href = dataUrl
        link.download = fileName + '.png'
        link.click()
      }

      return dataUrl
    } finally {
      allSvgs.forEach((svg, i) => { svg.style.overflow = origOverflows[i] })
    }
  }

  return { capture }
}
