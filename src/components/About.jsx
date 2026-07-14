import './About.css'

function About() {
  const skills = [
    { name: 'Design Gráfico', level: 95 },
    { name: 'Edição de Vídeo', level: 90 },
    { name: 'Motion Graphics', level: 85 },
    { name: 'Identidade Visual', level: 90 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Fotografia', level: 75 },
  ]

  return (
    <section id="sobre" className="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-label">Sobre Mim</span>
          <h2 className="section-title">
            Apaixonado por criar
            <span className="gradient-text"> histórias visuais</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Sou Gustavo Callegari, designer gráfico e videomaker com experiência
              em criar soluções visuais que comunicam, engajam e geram resultados.
            </p>
            <p>
              Acredito que bom design vai além de estética — é sobre resolver
              problemas, contar histórias e criar conexões emocionais entre
              marcas e pessoas.
            </p>
            <p>
              Meu trabalho combina criatividade com estratégia, sempre buscando
              entregar soluções que superam expectativas e impactam o público-alvo.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Anos de Experiência</span>
              </div>
              <div className="stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">Projetos Entregues</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Clientes Atendidos</span>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h3>Minhas Habilidades</h3>
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
