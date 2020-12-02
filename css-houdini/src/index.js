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
        260
      )
      grShadow.addColorStop(0, 'rgba(0,0,0,0.5)')
      grShadow.addColorStop(1, 'rgba(111, 14, 150, 1)')
      ctx.beginPath()
      ctx.arc(w / 2, h / 2, w / 3, 0, 2 * Math.PI)
      ctx.fillStyle = grShadow
      ctx.fill()

      // Semi circle
      const grSemicircle = ctx.createLinearGradient(0, 348, 348, 582)
      grSemicircle.addColorStop(0, '#975DF5')
      grSemicircle.addColorStop(1, '#6F0E96')
      ctx.beginPath()
      ctx.arc(348, h / 2, 275, Math.PI * 0.5, Math.PI * 1.5)
      ctx.fillStyle = grSemicircle
      ctx.shadowColor = 'rgba(0,0,0,0.3)'
      ctx.shadowBlur = 60
      ctx.shadowOffsetX = 100
      ctx.shadowOffsetY = 0
      ctx.fill()

      // First triangle
      const grFirstTriangle = ctx.createLinearGradient(417, 242, 582, 338)
      grFirstTriangle.addColorStop(0, '#43DCC9')
      grFirstTriangle.addColorStop(1, '#05F2C7')
      ctx.beginPath()
      ctx.moveTo(417, 242)
      ctx.lineTo(582, 146)
      ctx.lineTo(582, 338)
      ctx.fillStyle = grFirstTriangle
      ctx.shadowColor = 'rgba(0,0,0,0.5)'
      ctx.shadowBlur = 60
      ctx.shadowOffsetX = -20
      ctx.shadowOffsetY = 60
      ctx.fill()

      // Second triangle
      const grSecondTriangle = ctx.createLinearGradient(417, 305, 417, 593)
      grSecondTriangle.addColorStop(0, '#FFD900')
      grSecondTriangle.addColorStop(1, '#FF6A19')
      ctx.beginPath()
      ctx.moveTo(417, 305)
      ctx.lineTo(666, 449)
      ctx.lineTo(417, 593)
      ctx.fillStyle = grSecondTriangle
      ctx.shadowColor = 'rgba(0,0,0,0.5)'
      ctx.shadowBlur = 80
      ctx.shadowOffsetX = 40
      ctx.shadowOffsetY = 80
      ctx.fill()
    }
  }
)
