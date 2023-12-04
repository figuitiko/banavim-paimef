import { type KpiItem } from '@/types'

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
  georeferenced: 'Análisis Georreferenciado'
  // downloads: 'Descargas de Datos',
  // file: 'Ficha Tecnica de Indicadores'
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
  HEADING_HOME: 'Programa de Apoyo a las Instancias de Mujeres en las Entidades Federativas (PAIMEF).',
  SUBHEADING_HOME: 'El núcleo de nuestra iniciativa radica en la análisis y utilización estratégica de los datos recopilados en el Banco Nacional de Datos e Información sobre Casos de Violencia contra las Mujeres (BANAVIM). A través de esta plataforma, ofrecemos herramientas especializadas para la formulación y evaluación de políticas públicas dirigidas a combatir la violencia contra las mujeres en áreas locales específicas, siempre guiados por una perspectiva fundamentada en los principios de género y derechos humanos.',
  SUBHEADING_HOME_2: 'Datos a destacar',
  HIGHLIGHT_HEADING_HOME: 'Empoderando Cambios Positivos: Transformando Datos en Acciones Concretas.',
  FILE_NAME_NOT_MATCH: 'El nombre del archivo no coincide con el tipo de archivo seleccionado',
  FILE_TYPE_NOT_MATCH: 'El tipo de archivo seleccionado no es válido',
  FILE_EMPTY: 'El archivo seleccionado está vacío',
  DROPZONE_DROP: 'Arrastra y suelta el archivo aquí o has doble click para seleccionar el archivo',
  TITLE_VIOLENCE_TYPE: 'Casos de violencia por tipo',
  TITLE_VIOLENCE_MODALITY: 'Casos de violencia por modalidad',
  DATA_NOT_FOUND: 'No se encontraron datos'
} as const

export const TextsSectionIcons = {
  totalCases: {
    text: 'Número de casos de violencia registrados',
    icon: 'world'
  },
  totalOrders: {
    text: 'Órdenes de protección capturadas',
    icon: 'scale'
  },
  totalServices: {
    text: 'Servicios de atención otorgados registrados ',
    icon: 'comment'
  },
  totalAgressorsWomen: {
    text: 'Casos de violencia perpetrados por agresoras mujeres',
    icon: 'user'
  },
  totalAgressorMen: {
    text: 'Casos de violencia perpetrados por agresores hombres',
    icon: 'user'
  }
} as const

export const kpiItemsViolence = [
  {
    value: 1,
    label: 'PISICOLÓGICA'
  },
  {
    value: 2,
    label: 'FÍSICA'
  },
  {
    value: 3,
    label: 'ECONÓMICA'
  },
  {
    value: 4,
    label: 'PATRIMONIAL'
  },
  {
    value: 5,
    label: 'SEXUAL'
  }
] satisfies KpiItem[]

export const kpiViolenceTypeMapper = {
  violenceCasePhysical: 'Física',
  violenceCasePsychological: 'Psicológica',
  violenceCasePatrimonial: 'Patrimonial',
  violenceCaseSexual: 'Sexual',
  violenceCaseEconomic: 'Económica'
} as const

export const rgbaColorsViolenceTypes = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(255, 205, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(153, 102, 255, 0.5)',
  'rgba(201, 203, 207, 0.5)'
] as const

export const VIOLENCE_MODALITIES = [
  'Laboral',
  'Escolar/Docente',
  'comunidad',
  'Institucional',
  'Feminicida',
  'Familiar',
  'Digital/Ciberntica'
] as const

export const VIOLENCE_MODALITIES_MAPPER = {
  violenceModalityLabor: 'Laboral',
  violenceModalitySchool: 'Escolar/Docente',
  violenceModalityCommunity: 'Comunidad',
  violenceModalityInstitutional: 'Institucional',
  violenceModalityFeminicide: 'Feminicida',
  violenceModalityFamily: 'Familiar',
  violenceModalityDigital: 'Digital/Cibernética'
} as const
