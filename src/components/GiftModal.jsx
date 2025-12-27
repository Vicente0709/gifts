import { useEffect } from 'react'
import './GiftModal.css'
import AmazonModal from './AmazonModal'
import TicketModal from './TicketModal'

function GiftModal({ gift, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Modal especial para Amazon (regalo 27)
  if (gift.id === 27) {
    return <AmazonModal gift={gift} onClose={onClose} />
  }

  // Modal especial para ticket de carrera (regalo 22)
  if (gift.id === 22) {
    return <TicketModal gift={gift} onClose={onClose} />
  }

  // Modal estándar para los demás regalos
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="modal-header">
          <div className="modal-number">#{gift.id}</div>
        </div>
        <div className="modal-body">
          <h2 className="modal-title">{gift.title}</h2>
          <div className="modal-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-star">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="decoration-line"></div>
          </div>
          <p className="modal-message">
            Este regalo especial fue elegido con mucho cariño para ti. 
            Espero que lo disfrutes y que te traiga momentos inolvidables.
          </p>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>
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

export default GiftModal
