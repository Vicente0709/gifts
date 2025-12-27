import { useState } from 'react'
import './App.css'
import GiftCard from './components/GiftCard'
import GiftModal from './components/GiftModal'

const gifts = [
  { id: 11, title: "Un masaje de SPA" },
  { id: 12, title: "Un maquillaje para alguien perfecta" },
  { id: 13, title: "Un peinadito para que te pongas más linda" },
  { id: 14, title: "Que tus uñas estén más lindas" },
  { id: 15, title: "Un pastel de naranja" },
  { id: 16, title: "Una comida con cangrejos" },
  { id: 17, title: "Una sesión de fotos" },
  { id: 18, title: "Una visita a Warner Bros" },
  { id: 19, title: "Un lugar con muchas luces para descansar" },
  { id: 20, title: "Una limosina" },
  { id: 21, title: "Un viaje por la ciudad" },
  { id: 22, title: "Un carrera de traine" },
  { id: 23, title: "Un pasaje para saltarnos de avión con los Galoperos" },
  { id: 24, title: "Una cena en el noe sushi bar con tu plato favorito" },
  { id: 25, title: "Un concierto de María Becerra" },
  { id: 26, title: "Un diplomado en psicología comunitaria de una universidad" },
  { id: 27, title: "Dyson - Secadora de Pelo", specialMessage: "Tu pedido de Amazon ha sufrido un atraso. Iba a ser entregado el 18, pero ahora llegará el siguiente domingo. ¡Lo siento por la demora!" },
]

function App() {
  const [selectedGift, setSelectedGift] = useState(null)
  const [openedGifts, setOpenedGifts] = useState(new Set())

  const handleGiftClick = (gift) => {
    setSelectedGift(gift)
    setOpenedGifts(prev => new Set([...prev, gift.id]))
  }

  const closeModal = () => {
    setSelectedGift(null)
  }

  return (
    <div className="app">
      <div className="header">
        <h1 className="title">Tus Regalos Especiales</h1>
        <p className="subtitle">Descubre cada sorpresa</p>
      </div>

      <div className="gifts-container">
        {gifts.map((gift) => (
          <GiftCard
            key={gift.id}
            gift={gift}
            onClick={() => handleGiftClick(gift)}
            isOpened={openedGifts.has(gift.id)}
          />
        ))}
      </div>

      {selectedGift && (
        <GiftModal
          gift={selectedGift}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default App
