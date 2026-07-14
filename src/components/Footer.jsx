import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">GC</span>
            <p className="footer-tagline">
              Transformando ideias em experiências visuais memoráveis.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navegação</h4>
            <a href="#inicio">Inicio</a>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="footer-links">
            <h4>Serviços</h4>
            <a href="#">Design Gráfico</a>
            <a href="#">Edição de Vídeo</a>
            <a href="#">Motion Graphics</a>
            <a href="#">Identidade Visual</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Gustavo Callegari. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
