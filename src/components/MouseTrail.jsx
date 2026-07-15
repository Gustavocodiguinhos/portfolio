import { useEffect, useRef, useState } from 'react'

export default function MouseTrail() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -100, y: -100 })
  const trail = useRef({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const checkHover = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY)
      if (el) {
        const clickable =
          el.closest('a') ||
          el.closest('button') ||
          el.closest('[role="button"]') ||
          el.closest('.project-card') ||
          window.getComputedStyle(el).cursor === 'pointer'
        setHovering(!!clickable)
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      trail.current.x += (mouse.current.x - trail.current.x) * 0.12
      trail.current.y += (mouse.current.y - trail.current.y) * 0.12

      const targetSize = hovering ? 50 : 20
      const currentSize = trail.current.size || 20
      trail.current.size = currentSize + (targetSize - currentSize) * 0.1

      const size = trail.current.size

      ctx.beginPath()
      ctx.arc(trail.current.x, trail.current.y, size, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(255, 255, 255, ${hovering ? 0.8 : 0.5})`
      ctx.lineWidth = hovering ? 2 : 1.5
      ctx.stroke()

      if (hovering) {
        ctx.beginPath()
        ctx.arc(trail.current.x, trail.current.y, size + 8, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
        ctx.lineWidth = 1
        ctx.stroke()
      }

      ctx.beginPath()
      ctx.arc(trail.current.x, trail.current.y, 3, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
      ctx.fill()

      animationRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousemove', checkHover)
    animate()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [hovering])

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      <style>{`*, *::before, *::after { cursor: none !important; }`}</style>
    </>
  )
}
