import { useState } from 'react'
import './GiftCard.css'

// Colores de papel de regalo para cada regalo
const giftWrappingColors = [
  { primary: '#e74c3c', secondary: '#c0392b', pattern: 'dots' },
  { primary: '#3498db', secondary: '#2980b9', pattern: 'stripes' },
  { primary: '#9b59b6', secondary: '#8e44ad', pattern: 'dots' },
  { primary: '#e67e22', secondary: '#d35400', pattern: 'stripes' },
  { primary: '#1abc9c', secondary: '#16a085', pattern: 'dots' },
  { primary: '#f39c12', secondary: '#e67e22', pattern: 'stripes' },
  { primary: '#e91e63', secondary: '#c2185b', pattern: 'dots' },
  { primary: '#00bcd4', secondary: '#0097a7', pattern: 'stripes' },
  { primary: '#673ab7', secondary: '#512da8', pattern: 'dots' },
  { primary: '#ff5722', secondary: '#e64a19', pattern: 'stripes' },
  { primary: '#009688', secondary: '#00796b', pattern: 'dots' },
  { primary: '#795548', secondary: '#5d4037', pattern: 'stripes' },
  { primary: '#3f51b5', secondary: '#303f9f', pattern: 'dots' },
  { primary: '#ff9800', secondary: '#f57c00', pattern: 'stripes' },
  { primary: '#4caf50', secondary: '#388e3c', pattern: 'dots' },
  { primary: '#2196f3', secondary: '#1976d2', pattern: 'stripes' },
  { primary: '#ffc107', secondary: '#ffa000', pattern: 'dots' },
]

function GiftCard({ gift, onClick, isOpened }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const wrappingColor = giftWrappingColors[(gift.id - 11) % giftWrappingColors.length]

  const handleClick = () => {
    if (!isOpened) {
      setIsOpening(true)
      setTimeout(() => {
        onClick()
        setIsOpening(false)
      }, 1200)
    } else {
      onClick()
    }
  }

  return (
    <div
      className={`gift-wrapper ${isOpened ? 'opened' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`gift-box ${isHovered ? 'hovered' : ''} ${isOpened ? 'opened' : ''} ${isOpening ? 'opening' : ''} pattern-${wrappingColor.pattern}`}
        onClick={handleClick}
        style={{
          '--gift-primary': wrappingColor.primary,
          '--gift-secondary': wrappingColor.secondary
        }}
      >
        {/* Tapa de la caja */}
        <div className={`gift-box-face gift-top ${isOpened || isOpening ? 'lid-open' : ''}`}>
          <div className="wrapping-pattern"></div>
        </div>
        
        {/* Cara frontal */}
        <div className="gift-box-face gift-front">
          <div className="wrapping-pattern"></div>
          <div className="gift-number">{gift.id}</div>
          
          {/* Contenido del regalo que aparece cuando se abre */}
          <div className={`gift-content ${isOpened || isOpening ? 'visible' : ''}`}>
            <div className="gift-title-inside">
              <p>{gift.title}</p>
            </div>
          </div>
        </div>
        
        <div className="gift-box-face gift-right">
          <div className="wrapping-pattern"></div>
        </div>
        <div className="gift-box-face gift-left">
          <div className="wrapping-pattern"></div>
        </div>
        <div className="gift-box-face gift-back">
          <div className="wrapping-pattern"></div>
        </div>
        <div className="gift-box-face gift-bottom">
          <div className="wrapping-pattern"></div>
        </div>
        
        {/* Listones con animación de apertura */}
        <div className={`ribbon-container ${isOpened || isOpening ? 'ribbon-open' : ''}`}>
          {/* Listón horizontal */}
          <div className="ribbon-horizontal">
            <div className="ribbon-band ribbon-band-top"></div>
            <div className="ribbon-band ribbon-band-bottom"></div>
          </div>
          
          {/* Listón vertical */}
          <div className="ribbon-vertical-container">
            <div className="ribbon-band ribbon-band-left"></div>
            <div className="ribbon-band ribbon-band-right"></div>
          </div>
          
          {/* Lazo en el centro superior */}
          <div className="ribbon-bow">
            <div className="bow-center"></div>
            <div className="bow-loop bow-left"></div>
            <div className="bow-loop bow-right"></div>
            <div className="bow-tail bow-tail-left"></div>
            <div className="bow-tail bow-tail-right"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiftCard
