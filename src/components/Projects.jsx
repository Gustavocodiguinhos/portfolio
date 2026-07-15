import { useState, useEffect } from 'react'
import client, { urlFor, getFileUrl } from '../lib/sanity'
import './Projects.css'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const query = `*[_type == "project"] | order(order asc) {
      _id,
      title,
      slug,
      category,
      description,
      thumbnail,
      videoUrl,
      videoFile,
      externalUrl,
      tags,
      featured
    }`

    client
      .fetch(query)
      .then((data) => {
        console.log('Projetos carregados do Sanity:', data)
        setProjects(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Erro ao buscar projetos:', err)
        setLoading(false)
      })
  }, [])

  const filters = [
    { label: 'Todos', value: 'all' },
    { label: 'Design', value: 'design' },
    { label: 'Vídeo', value: 'video' },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const getYouTubeEmbed = (url) => {
    if (!url) return null
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?#]+)/)
    return match ? `https://www.youtube.com/embed/${match[1]}` : null
  }

  const getVimeoEmbed = (url) => {
    if (!url) return null
    const match = url.match(/vimeo\.com\/(\d+)/)
    return match ? `https://player.vimeo.com/video/${match[1]}` : null
  }

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

        {loading ? (
          <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '4rem 0' }}>
            Carregando projetos...
          </p>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div
                key={project._id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-image">
                  {project.thumbnail && (
                    <img
                      src={urlFor(project.thumbnail).width(600).height(400).fit('crop').url()}
                      alt={project.title}
                    />
                  )}
                  <div className="project-overlay">
                    <span className="project-category">
                      {project.category === 'design' ? 'Design' : 'Vídeo'}
                    </span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <button className="project-btn">Ver Projeto</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ✕
            </button>
            <h3>{selectedProject.title}</h3>
            <p className="modal-category">
              {selectedProject.category === 'design' ? 'Design' : 'Vídeo'}
            </p>

            {selectedProject.videoUrl && getYouTubeEmbed(selectedProject.videoUrl) && (
              <iframe
                src={getYouTubeEmbed(selectedProject.videoUrl)}
                className="modal-video"
                allowFullScreen
                title={selectedProject.title}
              />
            )}
            {selectedProject.videoUrl && getVimeoEmbed(selectedProject.videoUrl) && (
              <iframe
                src={getVimeoEmbed(selectedProject.videoUrl)}
                className="modal-video"
                allowFullScreen
                title={selectedProject.title}
              />
            )}
            {selectedProject.videoFile && (
              <video
                src={getFileUrl(selectedProject.videoFile)}
                controls
                className="modal-video"
              />
            )}

            <p className="modal-description">{selectedProject.description}</p>

            {selectedProject.externalUrl && (
              <a
                href={selectedProject.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
                style={{ display: 'inline-block', marginTop: '1rem' }}
              >
                Ver Externamente
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
