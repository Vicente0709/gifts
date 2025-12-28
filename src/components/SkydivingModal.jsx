import { useEffect } from 'react'
import './SkydivingModal.css'

function SkydivingModal({ gift, onClose }) {
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
    <div className="skydive-modal-backdrop" onClick={handleBackdropClick}>
      <div className="skydive-certificate">
        <button className="skydive-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="skydive-header">
          <div className="skydive-number">#{gift.id}</div>
          <div className="skydive-title">CERTIFICADO DE AVENTURA</div>
          <div className="skydive-subtitle">Paracaidismo con los Galoperos</div>
        </div>
        
        <div className="skydive-content">
          <div className="skydive-icon">✈️</div>
          
          <div className="skydive-details">
            <div className="skydive-detail">
              <strong>Experiencia:</strong> Salto en paracaídas tándem
            </div>
            <div className="skydive-detail">
              <strong>Altura:</strong> 4,000 - 4,500 metros
            </div>
            <div className="skydive-detail">
              <strong>Duración:</strong> ~30 minutos de vuelo
            </div>
            <div className="skydive-detail">
              <strong>Incluye:</strong> Equipo completo, instructor certificado, video y fotos
            </div>
          </div>
          
          <div className="skydive-message">
            <p>Este regalo especial fue elegido con mucho cariño para ti. 
            Espero que lo disfrutes y que te traiga momentos inolvidables.</p>
          </div>
        </div>
        
        <div className="skydive-footer">
          <button className="skydive-button" onClick={onClose}>
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

export default SkydivingModal

