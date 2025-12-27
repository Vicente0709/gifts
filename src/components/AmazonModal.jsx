import { useEffect } from 'react'
import './AmazonModal.css'

function AmazonModal({ gift, onClose }) {
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
    <div className="amazon-modal-backdrop" onClick={handleBackdropClick}>
      <div className="amazon-email-container">
        <button className="amazon-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="amazon-email">
          <div className="amazon-header">
            <div className="amazon-logo">
              <span className="amazon-logo-text">amazon</span>
              <span className="amazon-logo-dot">.</span>
              <span className="amazon-logo-com">com</span>
            </div>
          </div>
          
          <div className="amazon-email-content">
            <div className="amazon-email-header">
              <div className="amazon-from">
                <strong>De:</strong> Amazon.com &lt;auto-confirm@amazon.com&gt;
              </div>
              <div className="amazon-date">
                <strong>Fecha:</strong> {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
            </div>
            
            <div className="amazon-subject">
              <strong>Asunto:</strong> Actualización de tu pedido #113-1234567-8901234
            </div>
            
            <div className="amazon-body">
              <p className="amazon-greeting">Hola,</p>
              
              <p>
                Nos ponemos en contacto contigo para informarte sobre una actualización en tu pedido.
              </p>
              
              <div className="amazon-order-box">
                <div className="amazon-order-header">
                  <strong>Detalles del pedido:</strong>
                </div>
                <div className="amazon-order-item">
                  <div className="amazon-item-name">
                    <strong>Dyson Supersonic™ - Secadora de Pelo</strong>
                  </div>
                  <div className="amazon-item-details">
                    <div className="amazon-item-row">
                      <span>Número de pedido:</span>
                      <span>#113-1234567-8901234</span>
                    </div>
                    <div className="amazon-item-row">
                      <span>Fecha de pedido:</span>
                      <span>15 de diciembre, 2024</span>
                    </div>
                    <div className="amazon-item-row amazon-delayed">
                      <span>Fecha de entrega original:</span>
                      <span className="amazon-delayed-text">18 de diciembre, 2024</span>
                    </div>
                    <div className="amazon-item-row amazon-new-date">
                      <span>Nueva fecha de entrega:</span>
                      <span className="amazon-new-date-text">Próximo domingo</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="amazon-notice">
                <p>
                  <strong>Lamentamos informarte</strong> que tu pedido ha sufrido un atraso en el proceso de envío. 
                  El paquete estaba programado para ser entregado el <strong>18 de diciembre</strong>, pero debido a 
                  circunstancias logísticas fuera de nuestro control, la nueva fecha de entrega estimada es el 
                  <strong> próximo domingo</strong>.
                </p>
                <p>
                  Te pedimos disculpas por cualquier inconveniente que esto pueda causar. Estamos trabajando para 
                  asegurar que recibas tu pedido lo antes posible.
                </p>
              </div>
              
              <div className="amazon-tracking">
                <p><strong>Rastrear tu pedido:</strong></p>
                <div className="amazon-tracking-link">
                  Ver estado del pedido en tu cuenta de Amazon
                </div>
              </div>
              
              <p className="amazon-signature">
                Gracias por tu paciencia,<br />
                <strong>El equipo de Amazon</strong>
              </p>
            </div>
          </div>
          
          <div className="amazon-footer">
            <p>© 2024 Amazon.com, Inc. o sus afiliados. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AmazonModal

