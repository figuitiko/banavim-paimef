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
  'orders',
  'services'
] as const
export const VIOLENCE_TYPES = [
  'Física',
  'Patrimonial',
  'Psicololgica',
  'Sexual',
  'Economica'
] as const

export const MAPPED_INDICATORS_AGRESSORS_VALUES = {
  age: 'age',
  sex: 'sex',
  civilStatus: 'civilStatus',
  dateCase: 'dateCase',
  isKnown: 'isKnown',
  scholarship: 'scholarship',
  municipalityName: 'municipalityName'
}

export const MAPPED_INDICATORS_AGRESSORS = {
  Escolaridad: MAPPED_INDICATORS_AGRESSORS_VALUES.scholarship,
  Genero: MAPPED_INDICATORS_AGRESSORS_VALUES.sex,
  EdoCivil: MAPPED_INDICATORS_AGRESSORS_VALUES.civilStatus,
  'Edad del Agresor': MAPPED_INDICATORS_AGRESSORS_VALUES.age,
  'Conoce al Agresor': MAPPED_INDICATORS_AGRESSORS_VALUES.isKnown,
  fecha_hechos: MAPPED_INDICATORS_AGRESSORS_VALUES.dateCase,
  Municipio: MAPPED_INDICATORS_AGRESSORS_VALUES.municipalityName
} as const

export const MAPPED_INDICATORS_CASES = {
  NomUsuarioCapCaso: 'name',
  Edad: 'age',
  Genero: 'sex',
  'Estado Civil': 'civilStatus',
  Escolaridad: 'scholarship',
  Fsica: 'isPhysical',
  Patrimonial: 'isPatrimonial',
  Psicolgica: 'isPsychological',
  Sexual: 'isSexual',
  Econmica: 'isEconomic',
  Otro: 'isOther',
  Agresores: 'amountAgressors',
  'Municipio del domicilio': 'municipalityName',
  'Conocimiento de autoridad': 'isKnownByAuthorities',
  'Vnculo con victima': 'linkWithVictim',
  'Modalidad de la Violencia': 'modality',
  'Fecha hechos': 'date'
} as const

export const MAPPED_INDICATORS_ORDERS = {
  'Municipio Evento': 'municipalityName',
  Nombre: 'victimName',
  Paterno: 'victimName',
  Materno: 'victimName',
  edad: 'age',
  'Fecha de recepcion': 'date',
  'Descripcion orden de procteccion': 'description',
  'Autoridad emisora': 'emisorAuthority',
  'Desc Tipo Orden': 'orderType'
} as const

export const MAPPED_INDICATORS_SERVICES = {
  Municipio: 'municipalityName',
  'Tipo de Servicio': 'serviceType',
  'Detalle del servicio': 'serviceDetail',
  'FechaCap Servicio': 'dateCapture',
  estatus: 'status'
} as const

export const FILE_NAMES = {
  agressors: 'agresores.csv',
  cases: 'casos.csv',
  services: 'servicios.csv',
  orders: 'ordenes.csv'
} as const

export const APP_MESSAGES = {
  FILE_NAME_NOT_MATCH: 'El nombre del archivo no coincide con el tipo de archivo seleccionado',
  FILE_TYPE_NOT_MATCH: 'El tipo de archivo seleccionado no es válido',
  FILE_EMPTY: 'El archivo seleccionado está vacío',
  DROPZONE_DROP: 'Arrastra y suelta el archivo aquí o has doble click para seleccionar el archivo'
} as const
