const projectId = 'tdcw2j5b'
const dataset = 'production'
const apiVersion = '2024-01-01'
const baseUrl = `https://${projectId}.api.sanity.io`

const client = {
  fetch: async (query, params = {}) => {
    const encodedQuery = encodeURIComponent(query)
    const paramString = Object.entries(params)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(JSON.stringify(v))}`)
      .join('&')
    const url = `${baseUrl}/v${apiVersion}/data/query/${dataset}?query=${encodedQuery}${paramString ? '&' + paramString : ''}`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Sanity API error: ${res.status}`)
    const data = await res.json()
    return data.result
  },
}

export const urlFor = (source) => {
  if (!source?.asset?._ref) return ''
  const ref = source.asset._ref
  const [, id, dimensions, format] = ref.match(/^image-(\w+)-(\d+x\d+)-(\w+)$/) || []
  if (!id) return ''
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`
}

export const getFileUrl = (fileRef) => {
  if (!fileRef?.asset?._ref) return null
  const ref = fileRef.asset._ref
  const [, id, format] = ref.match(/^file-(\w+)-(\w+)$/) || []
  if (!id) return null
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${format}`
}

export default client
