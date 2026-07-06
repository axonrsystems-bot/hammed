export interface Project {
  id: string
  title: string
  client: string
  category: string
  tech: string[]
  url: string
  challenge: string
  outcomes: Array<{ value: string; label: string }>
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  initial: string
}

export interface Service {
  number: string
  title: string
  description: string
  outcomes: string[]
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface TrustStat {
  value: string
  label: string
}
