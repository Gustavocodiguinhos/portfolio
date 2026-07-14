import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="hero-glow"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge anim-fade-up" style={{ '--delay': '0.1s' }}>
          <span className="badge-dot"></span>
          Disponível para projetos
        </div>

        <h1 className="hero-title">
          <span className="title-line anim-fade-up" style={{ '--delay': '0.25s' }}>
            Criando
          </span>
          <span className="title-line title-line--large gradient-text anim-fade-up" style={{ '--delay': '0.4s' }}>
            experiências visuais
          </span>
        </h1>

        <div className="hero-divider anim-fade-up" style={{ '--delay': '0.55s' }}></div>

        <p className="hero-role anim-fade-up" style={{ '--delay': '0.65s' }}>
          Designer & Videomaker
        </p>

        <p className="hero-description anim-fade-up" style={{ '--delay': '0.8s' }}>
          Transformo ideias em designs e vídeos que contam histórias,
          conectam marcas ao seu público e geram resultados.
        </p>

        <div className="hero-buttons anim-fade-up" style={{ '--delay': '1s' }}>
          <a href="#projetos" className="btn btn-primary">
            <span>Ver Projetos</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#contato" className="btn btn-secondary">
            Fale Comigo
          </a>
        </div>
      </div>

      <div className="scroll-indicator anim-fade-up" style={{ '--delay': '1.5s' }}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero
