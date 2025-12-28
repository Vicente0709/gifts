import { useEffect } from 'react'
import './SushiModal.css'

function SushiModal({ gift, onClose }) {
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
    <div className="sushi-modal-backdrop" onClick={handleBackdropClick}>
      <div className="sushi-reservation">
        <button className="sushi-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="sushi-header">
          <div className="sushi-number">#{gift.id}</div>
          <div className="sushi-logo">
            <div className="sushi-icon">🍣</div>
            <div className="sushi-name">NOE SUSHI BAR</div>
          </div>
        </div>
        
        <div className="sushi-content">
          <h1 className="sushi-title">Reserva de Cena</h1>
          <p className="sushi-subtitle">Tu plato favorito te espera</p>
          
          <div className="sushi-details">
            <div className="sushi-detail-item">
              <div className="detail-label">📍 Restaurante</div>
              <div className="detail-value">Noe Sushi Bar</div>
            </div>
            <div className="sushi-detail-item">
              <div className="detail-label">🍽️ Menú</div>
              <div className="detail-value">Tu plato favorito</div>
            </div>
            <div className="sushi-detail-item">
              <div className="detail-label">👥 Incluye</div>
              <div className="detail-value">Cena completa para 2 personas</div>
            </div>
          </div>
          
          <div className="sushi-message">
            <p>Este regalo especial fue elegido con mucho cariño para ti. 
            Espero que lo disfrutes y que te traiga momentos inolvidables.</p>
          </div>
        </div>
        
        <div className="sushi-footer">
          <button className="sushi-button" onClick={onClose}>
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

export default SushiModal

