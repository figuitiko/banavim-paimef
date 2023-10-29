export const COLORS = {
  main: '#FFF',
  accent: '#F4F4F4',
  primary: '#0C231E',
  secondary: '#13322B',
  third: '#6A1B31',
  fourth: '#BC955C',
  darkText: '#111827'
} as const

export const PRIMARY_MENU = {
  about: 'Acerca del Programa',
  goals: 'Objetivos',
  indicators: {
    cases: 'Número de casos de violencia',
    agresors: 'Número de agresores',
    municipalities: 'Municipios atendidos'
  },
  georeferenced: 'Análisis Georreferenciado',
  downloads: 'Descargas de Datos',
  file: 'Ficha Tecnica de Indicadores'
} as const

export const HOME_FACTS = [
  {
    icon: 'World',
    number: 22610,
    description: 'Numeros de Casos de Violencia Registrados'
  },
  {
    icon: 'Balance',
    number: 18459,
    description: 'Casos de violencia perpetrados por agresores hombres'
  },
  {
    icon: 'Comment',
    number: 28298,
    description: 'Servicios de atención otorgados registrados'
  },
  {
    icon: 'LightingBolt',
    number: 1088,
    description: 'Casos de violencia perpetrados por agresoras mujeres'
  },
  {
    icon: 'Comment',
    number: 249,
    description: 'Órdenes de protección capturadas'
  },
  {
    icon: 'Comment',
    number: 126,
    description: 'Tipos de Violencia Registrados'
  }
] as const
