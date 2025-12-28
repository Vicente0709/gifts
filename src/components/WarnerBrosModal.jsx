import { useEffect } from 'react'
import './WarnerBrosModal.css'

function WarnerBrosModal({ gift, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="wb-modal-backdrop" onClick={handleBackdropClick}>
      <div className="wb-ticket">
        <button className="wb-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="wb-header">
          <div className="wb-number">#{gift.id}</div>
          <div className="wb-logo">
            <div className="wb-logo-text">WB</div>
            <div className="wb-logo-subtitle">WARNER BROS</div>
          </div>
        </div>
        
        <div className="wb-content">
          <h1 className="wb-title">Entrada al Parque</h1>
          <p className="wb-subtitle">Warner Bros Studio Tour</p>
          
          <div className="wb-features">
            <div className="wb-feature">
              <div className="wb-feature-icon">🎬</div>
              <div className="wb-feature-text">Tour por los Estudios</div>
            </div>
            <div className="wb-feature">
              <div className="wb-feature-icon">🎭</div>
              <div className="wb-feature-text">Experiencias Interactivas</div>
            </div>
            <div className="wb-feature">
              <div className="wb-feature-icon">📸</div>
              <div className="wb-feature-text">Fotos con Personajes</div>
            </div>
            <div className="wb-feature">
              <div className="wb-feature-icon">🎢</div>
              <div className="wb-feature-text">Atracciones Temáticas</div>
            </div>
          </div>
          
          <div className="wb-message">
            <p>Este regalo especial fue elegido con mucho cariño para ti. 
            Espero que lo disfrutes y que te traiga momentos inolvidables.</p>
          </div>
        </div>
        
        <div className="wb-footer">
          <button className="wb-button" onClick={onClose}>
            <span>Gracias</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default WarnerBrosModal

