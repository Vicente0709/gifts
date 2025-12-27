function GiftIcon({ icon, size = 60 }) {
  const iconSize = size
  
  const icons = {
    spa: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
      </svg>
    ),
    makeup: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="9" r="2"/>
        <circle cx="15" cy="9" r="2"/>
        <path d="M3 12c0-1.657 4.03-3 9-3s9 1.343 9 3"/>
        <path d="M12 12v6"/>
      </svg>
    ),
    hair: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M8 4c0 2 1 4 4 4s4-2 4-4M6 8c2 2 4 2 6 0M18 8c-2 2-4 2-6 0M4 12c3 4 5 6 8 6s5-2 8-6"/>
      </svg>
    ),
    nails: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 4h8M8 8h8M8 12h8M8 16h8"/>
        <circle cx="6" cy="6" r="1"/>
        <circle cx="18" cy="6" r="1"/>
        <circle cx="6" cy="18" r="1"/>
        <circle cx="18" cy="18" r="1"/>
      </svg>
    ),
    cake: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="16" height="10" rx="2"/>
        <path d="M4 10c0-2 2-4 4-4h8c2 0 4 2 4 4M8 14v4M16 14v4"/>
        <circle cx="12" cy="8" r="1"/>
      </svg>
    ),
    food: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 8c0-2 2-4 4-4s4 2 4 4M6 8v8M10 8v8M14 8v8M18 8v8"/>
        <circle cx="6" cy="4" r="1"/>
        <circle cx="10" cy="4" r="1"/>
        <circle cx="14" cy="4" r="1"/>
        <circle cx="18" cy="4" r="1"/>
      </svg>
    ),
    camera: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <circle cx="12" cy="14" r="3"/>
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      </svg>
    ),
    movie: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M7 4v16M17 4v16M2 12h20"/>
      </svg>
    ),
    sparkle: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    car: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12h14M7 8h10M4 12v4M20 12v4"/>
        <circle cx="7" cy="16" r="2"/>
        <circle cx="17" cy="16" r="2"/>
      </svg>
    ),
    city: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="4" height="12"/>
        <rect x="10" y="4" width="4" height="16"/>
        <rect x="16" y="6" width="4" height="14"/>
        <path d="M4 20h16"/>
      </svg>
    ),
    run: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="5" r="2"/>
        <path d="M8 12l4-2 4 2M8 12v6M12 10v8M16 12v6"/>
      </svg>
    ),
    plane: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l-2 4-4 2 2 2-2 4 4-2 2 2 2-2 4 2-2-4 2-2-4-2-2-4z"/>
      </svg>
    ),
    sushi: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="8" rx="8" ry="3"/>
        <ellipse cx="12" cy="16" rx="8" ry="3"/>
        <path d="M4 8v8M20 8v8"/>
      </svg>
    ),
    gift: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="8" width="18" height="12" rx="2"/>
        <path d="M12 8V4M12 8v12M8 8H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4M16 8h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-4"/>
      </svg>
    )
  }

  return (
    <div className="gift-icon" style={{ color: '#2a5298' }}>
      {icons[icon] || icons.gift}
    </div>
  )
}

export default GiftIcon

