import { useEffect } from 'react'
import './SpaModal.css'

function SpaModal({ gift, onClose }) {
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
    <div className="spa-modal-backdrop" onClick={handleBackdropClick}>
      <div className="spa-voucher">
        <button className="spa-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="spa-header">
          <div className="spa-number">#{gift.id}</div>
          <div className="spa-logo">
            <div className="spa-icon">💆‍♀️</div>
            <div className="spa-title">SPA RELAX</div>
          </div>
        </div>
        
        <div className="spa-content">
          <h1 className="spa-voucher-title">Voucher de Masaje</h1>
          <p className="spa-subtitle">Experiencia de Relajación Total</p>
          
          <div className="spa-services">
            <div className="spa-service">
              <div className="service-icon">✨</div>
              <div className="service-info">
                <div className="service-name">Masaje Relajante</div>
                <div className="service-duration">60-90 minutos</div>
              </div>
            </div>
            
            <div className="spa-service">
              <div className="service-icon">🕯️</div>
              <div className="service-info">
                <div className="service-name">Ambiente Relajante</div>
                <div className="service-duration">Aromaterapia incluida</div>
              </div>
            </div>
            
            <div className="spa-service">
              <div className="service-icon">🍵</div>
              <div className="service-info">
                <div className="service-name">Té Relajante</div>
                <div className="service-duration">Al finalizar el masaje</div>
              </div>
            </div>
          </div>
          
          <div className="spa-message">
            <p>Este regalo especial fue elegido con mucho cariño para ti. 
            Espero que lo disfrutes y que te traiga momentos inolvidables.</p>
          </div>
        </div>
        
        <div className="spa-footer">
          <button className="spa-button" onClick={onClose}>
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

export default SpaModal

