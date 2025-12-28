import { useEffect } from 'react'
import './PhotoSessionModal.css'

function PhotoSessionModal({ gift, onClose }) {
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
    <div className="photo-modal-backdrop" onClick={handleBackdropClick}>
      <div className="photo-session-card">
        <button className="photo-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="photo-header">
          <div className="photo-number">#{gift.id}</div>
          <div className="photo-icon-wrapper">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="7" width="20" height="14" rx="2"/>
              <circle cx="12" cy="14" r="3"/>
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          </div>
        </div>
        
        <div className="photo-content">
          <h1 className="photo-title">Sesión de Fotos</h1>
          <p className="photo-subtitle">Profesional y Personalizada</p>
          
          <div className="photo-features">
            <div className="photo-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="feature-text">
                <strong>Duración:</strong> 2-3 horas
              </div>
            </div>
            
            <div className="photo-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="M21 15l-5-5L5 21"/>
                </svg>
              </div>
              <div className="feature-text">
                <strong>Fotos editadas:</strong> 30-50 imágenes
              </div>
            </div>
            
            <div className="photo-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="feature-text">
                <strong>Ubicación:</strong> A elegir
              </div>
            </div>
            
            <div className="photo-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 7h-9"/>
                  <path d="M14 17H5"/>
                  <circle cx="17" cy="17" r="3"/>
                  <circle cx="7" cy="7" r="3"/>
                </svg>
              </div>
              <div className="feature-text">
                <strong>Estilo:</strong> Personalizado a tu gusto
              </div>
            </div>
          </div>
          
          <div className="photo-includes">
            <div className="includes-title">Incluye:</div>
            <div className="includes-list">
              <div className="include-item">
                <span className="include-check">✓</span>
                <span>Sesión fotográfica profesional</span>
              </div>
              <div className="include-item">
                <span className="include-check">✓</span>
                <span>Edición profesional de todas las fotos</span>
              </div>
              <div className="include-item">
                <span className="include-check">✓</span>
                <span>Entrega en alta resolución</span>
              </div>
              <div className="include-item">
                <span className="include-check">✓</span>
                <span>Album digital personalizado</span>
              </div>
            </div>
          </div>
          
          <div className="photo-message">
            <div className="message-icon">💝</div>
            <p>
              Este regalo especial fue elegido con mucho cariño para ti. 
              Espero que lo disfrutes y que te traiga momentos inolvidables.
            </p>
          </div>
        </div>
        
        <div className="photo-footer">
          <button className="photo-button" onClick={onClose}>
            <span>Gracias</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </button>
        </div>
        
        <div className="photo-decoration photo-decoration-1"></div>
        <div className="photo-decoration photo-decoration-2"></div>
        <div className="photo-decoration photo-decoration-3"></div>
      </div>
    </div>
  )
}

export default PhotoSessionModal

