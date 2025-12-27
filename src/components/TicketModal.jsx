import { useEffect } from 'react'
import './TicketModal.css'

function TicketModal({ gift, onClose }) {
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
    <div className="ticket-modal-backdrop" onClick={handleBackdropClick}>
      <div className="ticket-container">
        <button className="ticket-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="ticket">
          <div className="ticket-perforation"></div>
          
          <div className="ticket-header">
            <div className="ticket-logo">
              <div className="ticket-logo-icon">🏃‍♀️</div>
              <div className="ticket-logo-text">
                <div className="ticket-logo-title">TRAIL RUN</div>
                <div className="ticket-logo-subtitle">QUITO 2025</div>
              </div>
            </div>
            <div className="ticket-number">#22</div>
          </div>
          
          <div className="ticket-body">
            <div className="ticket-section">
              <div className="ticket-label">EVENTO</div>
              <div className="ticket-value">Carrera de Trail Running</div>
            </div>
            
            <div className="ticket-section">
              <div className="ticket-label">FECHA</div>
              <div className="ticket-value">Por confirmar - 2025</div>
            </div>
            
            <div className="ticket-section">
              <div className="ticket-label">UBICACIÓN</div>
              <div className="ticket-value">Quito, Ecuador</div>
            </div>
            
            <div className="ticket-section">
              <div className="ticket-label">DISTANCIA</div>
              <div className="ticket-value">Por definir</div>
            </div>
            
            <div className="ticket-divider"></div>
            
            <div className="ticket-info-box">
              <div className="ticket-info-title">INFORMACIÓN IMPORTANTE</div>
              <div className="ticket-info-text">
                Este ticket te da derecho a participar en una carrera de trail running 
                en Quito durante el año 2025. La fecha específica y los detalles del evento 
                serán confirmados próximamente.
              </div>
            </div>
            
            <div className="ticket-barcode">
              <div className="barcode-lines">
                <div className="barcode-line" style={{width: '2px'}}></div>
                <div className="barcode-line" style={{width: '4px'}}></div>
                <div className="barcode-line" style={{width: '1px'}}></div>
                <div className="barcode-line" style={{width: '3px'}}></div>
                <div className="barcode-line" style={{width: '5px'}}></div>
                <div className="barcode-line" style={{width: '2px'}}></div>
                <div className="barcode-line" style={{width: '4px'}}></div>
                <div className="barcode-line" style={{width: '1px'}}></div>
                <div className="barcode-line" style={{width: '3px'}}></div>
                <div className="barcode-line" style={{width: '5px'}}></div>
                <div className="barcode-line" style={{width: '2px'}}></div>
                <div className="barcode-line" style={{width: '4px'}}></div>
                <div className="barcode-line" style={{width: '1px'}}></div>
                <div className="barcode-line" style={{width: '3px'}}></div>
                <div className="barcode-line" style={{width: '5px'}}></div>
              </div>
              <div className="barcode-number">TRAIL-2025-QUITO-0022</div>
            </div>
          </div>
          
          <div className="ticket-footer">
            <div className="ticket-footer-text">
              Presenta este ticket el día del evento
            </div>
            <div className="ticket-footer-note">
              Válido solo para el titular
            </div>
          </div>
          
          <div className="ticket-perforation ticket-perforation-bottom"></div>
        </div>
      </div>
    </div>
  )
}

export default TicketModal

