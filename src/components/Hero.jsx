import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg">
        <div className="hero-noise"></div>
        <div className="hero-grid"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="hero-glow"></div>
      </div>

      <div className="hero-watermark" aria-hidden="true">GC</div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-badge anim-fade-up" style={{ '--delay': '0.1s' }}>
            <span className="badge-dot"></span>
            Disponível para projetos
          </div>

          <h1 className="hero-title">
            <span className="title-line anim-fade-up" style={{ '--delay': '0.2s' }}>
              Criando
            </span>
            <span className="title-line title-accent anim-fade-up" style={{ '--delay': '0.3s' }}>
              experiências
            </span>
            <span className="title-line title-hero anim-fade-up" style={{ '--delay': '0.4s' }}>
              visuais
            </span>
          </h1>

          <p className="hero-description anim-fade-up" style={{ '--delay': '0.5s' }}>
            Transformo ideias em designs e vídeos que contam histórias,
            conectam marcas ao seu público e geram resultados.
          </p>

          <div className="hero-buttons anim-fade-up" style={{ '--delay': '0.6s' }}>
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

        <div className="hero-right anim-fade-up" style={{ '--delay': '0.5s' }}>
          <div className="hero-stats-card">
            <div className="hero-stat">
              <span className="stat-num">3+</span>
              <span className="stat-txt">Anos de Experiência</span>
            </div>
            <div className="hero-stat">
              <span className="stat-num">30+</span>
              <span className="stat-txt">Projetos Entregues</span>
            </div>
            <div className="hero-stat hero-stat--full">
              <span className="stat-num">15+</span>
              <span className="stat-txt">Clientes Atendidos</span>
            </div>
          </div>

          <div className="hero-tags">
            <span className="hero-tag">Design Gráfico</span>
            <span className="hero-tag">Edição de Vídeo</span>
            <span className="hero-tag">Branding</span>
            <span className="hero-tag">Motion Graphics</span>
            <span className="hero-tag">Social Media</span>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-left anim-fade-up" style={{ '--delay': '0.9s' }}>
          <span className="bottom-label">01</span>
          <span className="bottom-line"></span>
          <span className="bottom-text">PORTFOLIO</span>
        </div>
        <div className="scroll-indicator anim-fade-up" style={{ '--delay': '1s' }}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll</span>
        </div>
        <div className="hero-bottom-right anim-fade-up" style={{ '--delay': '0.9s' }}>
          <span className="bottom-text">2026</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
