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

export const LIST_MUNICIPALITIES = [
  'Canatlán',
  'Canelas',
  'Coneto de Comonfort',
  'Cuencamé',
  'Durango',
  'General Simón Bolívar',
  'Gómez Palacio',
  'Guadalupe Victoria',
  'Guanaceví',
  'Hidalgo',
  'Indé',
  'Lerdo',
  'Mapimí',
  'Mezquital',
  'Nazas',
  'Nombre de Dios',
  'Nuevo Ideal',
  'Ocampo',
  'El Oro',
  'Otáez',
  'Pánuco de Coronado',
  'Peñón Blanco',
  'Poanas',
  'Pueblo Nuevo',
  'Rodeo',
  'San Bernardo',
  'San Dimas',
  'San Juan de Guadalupe',
  'San Juan del Río',
  'San Luis del Cordero',
  'San Pedro del Gallo',
  'Santa Clara',
  'Santiago Papasquiaro',
  'Súchil',
  'Tamazula',
  'Tepehuanes',
  'Tlahualilo',
  'Topia',
  'Vicente Guerrero'
] as const

export const UPLOAD_ITEMS = [
  'agressors',
  'cases',
  'services',
  'orders'
] as const

export const MAPPED_INDICATORS_AGRESSORS = {
  Escolaridad: 'scholarship',
  Genero: 'sex',
  EdoCivil: 'civilStatus',
  'Edad del Agresor': 'age',
  VinculoCon: 'relativeLink',
  'Conoce al Agresor': 'isKnown',
  fecha_hechos: 'dateCase',
  Municipio: 'municipalityName'
} as const

export const MAPPED_INDICATORS_CASES = {
  agressors: MAPPED_INDICATORS_AGRESSORS
} as const
export const KEY_CASES = Object.keys(MAPPED_INDICATORS_CASES) as Array<(keyof typeof MAPPED_INDICATORS_CASES)>
export const FILE_NAMES = {
  agressors: 'agresores.csv',
  cases: 'casos.csv',
  services: 'servicios.csv',
  orders: 'ordenes.csv'
} as const

export const APP_MESSAGES = {
  FILE_NAME_NOT_MATCH: 'El nombre del archivo no coincide con el tipo de archivo seleccionado',
  FILE_EMPTY: 'El archivo seleccionado está vacío',
  DROPZONE_DROP: 'Arrastra y suelta el archivo aquí o has doble click para seleccionar el archivo'
} as const
