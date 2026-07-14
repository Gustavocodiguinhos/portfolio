import { useState } from 'react'
import './Projects.css'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Campanha Brand X',
      category: 'design',
      description: 'Identidade visual e materiais para campanha de lançamento',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      color: '#c9a96e',
    },
    {
      id: 2,
      title: 'Vídeo Institucional',
      category: 'video',
      description: 'Produção de vídeo corporativo para empresa de tecnologia',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
      color: '#dbb978',
    },
    {
      id: 3,
      title: 'App Mobile Design',
      category: 'design',
      description: 'UI/UX design para aplicativo de fitness',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      color: '#c9a96e',
    },
    {
      id: 4,
      title: 'After Movie Festival',
      category: 'video',
      description: 'Edição de after movie para festival de música',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
      color: '#dbb978',
    },
    {
      id: 5,
      title: 'Pack de Redes Sociais',
      category: 'design',
      description: 'Templates e posts para redes sociais de marca de moda',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      color: '#c9a96e',
    },
    {
      id: 6,
      title: 'Videoclipe Musical',
      category: 'video',
      description: 'Direção e edição de videoclipe para artista independente',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      color: '#dbb978',
    },
  ]

  const filters = [
    { label: 'Todos', value: 'all' },
    { label: 'Design', value: 'design' },
    { label: 'Vídeo', value: 'video' },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projetos" className="projects">
      <div className="projects-container">
        <span className="section-label">Projetos</span>
        <h2 className="section-title">
          Trabalhos
          <span className="gradient-text"> selecionados</span>
        </h2>

        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div
                  className="project-overlay"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}cc, ${project.color}99)`,
                  }}
                >
                  <span className="project-category">
                    {project.category === 'design' ? 'Design' : 'Vídeo'}
                  </span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <button className="project-btn">Ver Detalhes</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
