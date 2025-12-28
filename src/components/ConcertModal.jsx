import { useEffect } from 'react'
import './ConcertModal.css'

function ConcertModal({ gift, onClose }) {
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
    <div className="concert-modal-backdrop" onClick={handleBackdropClick}>
      <div className="concert-ticket">
        <button className="concert-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="concert-header">
          <div className="concert-number">#{gift.id}</div>
          <div className="concert-stage">LIVE</div>
        </div>
        
        <div className="concert-main">
          <div className="concert-artist">María Becerra</div>
          <div className="concert-subtitle">Concierto en Vivo</div>
          
          <div className="concert-details">
            <div className="concert-detail">
              <div className="detail-icon">📅</div>
              <div className="detail-text">
                <div className="detail-label">Fecha</div>
                <div className="detail-value">Por confirmar</div>
              </div>
            </div>
            
            <div className="concert-detail">
              <div className="detail-icon">📍</div>
              <div className="detail-text">
                <div className="detail-label">Ubicación</div>
                <div className="detail-value">Por definir</div>
              </div>
            </div>
            
            <div className="concert-detail">
              <div className="detail-icon">🎵</div>
              <div className="detail-text">
                <div className="detail-label">Género</div>
                <div className="detail-value">Reggaeton / Pop</div>
              </div>
            </div>
          </div>
          
          <div className="concert-message">
            <p>Este regalo especial fue elegido con mucho cariño para ti. 
            Espero que lo disfrutes y que te traiga momentos inolvidables.</p>
          </div>
        </div>
        
        <div className="concert-footer">
          <button className="concert-button" onClick={onClose}>
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

export default ConcertModal

