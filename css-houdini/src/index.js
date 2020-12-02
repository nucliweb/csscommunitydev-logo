/* global registerPaint */

registerPaint(
  'csscommunitydev',
  class {
    paint(ctx, geometry) {
      const {width: w, height: h} = geometry

      // Background
      ctx.beginPath()
      ctx.arc(w / 2, h / 2, w / 2, 0, 2 * Math.PI)
      ctx.fillStyle = '#6F0E96'
      ctx.fill()

      // Shadow
      const grShadow = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        w / 3.2
      )
      grShadow.addColorStop(0, 'rgba(0,0,0,0.6)')
      grShadow.addColorStop(1, 'rgba(111, 14, 150, 1)')
      ctx.beginPath()
      ctx.arc(w / 2, h / 2, w / 2.4, 0, 2 * Math.PI)
      ctx.fillStyle = grShadow
      ctx.fill()

      // Semi circle
      const grSemicircle = ctx.createLinearGradient(
        h * 0.133,
        w * 0.47,
        w * 0.47,
        h * 0.864
      )
      grSemicircle.addColorStop(0, '#975DF5')
      grSemicircle.addColorStop(1, '#6F0E96')
      ctx.beginPath()
      ctx.arc(w * 0.47, h / 2, w * 0.37, Math.PI * 0.5, Math.PI * 1.5)
      ctx.fillStyle = grSemicircle
      ctx.shadowColor = 'rgba(0,0,0,0.3)'
      ctx.shadowBlur = h * 0.06
      ctx.shadowOffsetX = w * 0.1
      ctx.shadowOffsetY = 0
      ctx.fill()

      // First triangle
      const grFirstTriangle = ctx.createLinearGradient(
        w * 0.56,
        h * 0.327,
        w * 0.786,
        h * 0.456
      )
      grFirstTriangle.addColorStop(0, '#43DCC9')
      grFirstTriangle.addColorStop(1, '#05F2C7')
      ctx.beginPath()
      ctx.moveTo(w * 0.56, h * 0.327)
      ctx.lineTo(w * 0.786, h * 0.197)
      ctx.lineTo(w * 0.786, h * 0.456)
      ctx.fillStyle = grFirstTriangle
      ctx.shadowColor = 'rgba(0,0,0,0.5)'
      ctx.shadowBlur = h * 0.06
      ctx.shadowOffsetX = w * -0.02
      ctx.shadowOffsetY = h * 0.08
      ctx.fill()

      // Second triangle
      const grSecondTriangle = ctx.createLinearGradient(
        w * 0.56,
        h * 0.412,
        w * 0.56,
        h * 0.802
      )
      grSecondTriangle.addColorStop(0, '#FFD900')
      grSecondTriangle.addColorStop(1, '#FF6A19')
      ctx.beginPath()
      ctx.moveTo(w * 0.56, h * 0.412)
      ctx.lineTo(w * 0.9, h * 0.606)
      ctx.lineTo(w * 0.56, h * 0.802)
      ctx.fillStyle = grSecondTriangle
      ctx.shadowColor = 'rgba(0,0,0,0.5)'
      ctx.shadowBlur = h * 0.08
      ctx.shadowOffsetX = w * 0.04
      ctx.shadowOffsetY = h * 0.08
      ctx.fill()
    }
  }
)
