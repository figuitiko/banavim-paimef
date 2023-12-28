import { type AccordionComponentProps, type KpiItem } from '@/types'

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
  // about: 'Acerca del Programa',
  // goals: 'Objetivos',
  indicators: {
    cases: 'Número de casos de violencia',
    agressors: 'Perfil de los agresores',
    victims: 'Perfil de las Victimas',
    services: 'Servicios de atención otorgados',
    orders: 'Órdenes de protección capturadas'
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
  municipalityName: 'municipalityName',
  relationship: 'relationship'
}

export const MAPPED_INDICATORS_AGRESSORS = {
  Escolaridad: MAPPED_INDICATORS_AGRESSORS_VALUES.scholarship,
  Genero: MAPPED_INDICATORS_AGRESSORS_VALUES.sex,
  EdoCivil: MAPPED_INDICATORS_AGRESSORS_VALUES.civilStatus,
  'Edad del Agresor': MAPPED_INDICATORS_AGRESSORS_VALUES.age,
  'Conoce al Agresor': MAPPED_INDICATORS_AGRESSORS_VALUES.isKnown,
  fecha_hechos: MAPPED_INDICATORS_AGRESSORS_VALUES.dateCase,
  Municipio: MAPPED_INDICATORS_AGRESSORS_VALUES.municipalityName,
  VinculoConVictima: MAPPED_INDICATORS_AGRESSORS_VALUES.relationship
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
  DATA_NOT_FOUND: 'No se encontraron datos',
  DISCLAIMER_TITLE: 'exención de responsabilidad',
  DISCLAIMER_CONTENT: 'La legalidad, veracidad y calidad de la información publicada es responsabilidad del Instituto Estatal de las Mujeres de Durango, Banco Estatal de Datos e Información sobre Casos de Violencia contra las Mujeres de Durango como entidad pública que captura los casos de violencia hacía las mujeres, se apega a la normatividad vigente en temas de protección de datos personales de las mujeres que son atendidas en la institución. ',
  AGRESSORS_BY_AGE: 'Agresores por edad',
  AGRESSORS_BY_MUNICIPALITY: 'Agresores por municipio',
  AGRESSORS_BY_GENDER: 'Agresores por género',
  AGRESSORS_BY_SCHOLARSHIP: 'Agresores por escolaridad',
  AGRESSORS_BY_RELATIONSHIP: 'Agresores por vínculo con la víctima',
  VICTIMS_BY_AGE: 'Víctimas por edad',
  VICTIMS_BY_MUNICIPALITY: 'Víctimas por municipio',
  VICTIMS_BY_GENDER: 'Víctimas por género',
  VICTIMS_BY_SCHOLARSHIP: 'Víctimas por escolaridad',
  VICTIMS_BY_CIVIL_STATUS: 'Víctimas por estado civil',
  VICTIMIS_BY_AMOUNT_AGRESSORS: 'Víctimas por cantidad de agresores',
  CASES_BY_MUN: 'Casos por municipio',
  SERVICES_BY_TYPE: 'Servicios por tipo',
  SERVICES_BY_MUN: 'Servicios por municipio',
  SERVICES_BY_STATUS: 'Servicios por estatus',
  ORDERS_BY_TYPE: 'Órdenes por tipo',
  ORDERS_BY_AGE: 'Órdenes por edad',
  ORDERS_BY_AUTHORITY: 'Órdenes por autoridad emisora',
  ORDERS_BY_MUN: 'Órdenes por municipio'
} as const
export const INTERNAL_LINKS = {
  age: 'Rango de edad',
  mun: 'Por Municipio',
  gender: 'Por Género',
  scholarship: 'Por Escolaridad',
  relationship: 'Por Vínculo con la víctima',
  amount: 'Por Cantidad de Agresores',
  civilStatus: 'Por Estado Civil',
  type: 'Por Tipo',
  status: 'Por Estatus',
  authority: 'Por Autoridad Emisora'
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
]
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

export const VIOLENCE_CONTENT = [
  {
    title: 'Violencia Física',
    content: 'Es cualquier acción u omisión que dañe la integridad física de la mujer, causándole dolor o sufrimiento físico, o bien, que atente contra su salud física o su seguridad corporal.'
  },
  {
    title: 'Violencia Psicológica',
    content: 'Es cualquier acción u omisión que dañe la estabilidad psicológica, que puede consistir en: negligencia, abandono, descuido reiterado, celotipia, insultos, humillaciones, devaluación, marginación, indiferencia, infidelidad, comparaciones destructivas, rechazo, restricción a la autodeterminación y amenazas, las cuales conllevan a la víctima a la depresión, al aislamiento, a la devaluación de su autoestima e incluso al suicidio.'
  },
  {
    title: 'Violencia Patrimonial',
    content: 'Es cualquier acción u omisión que afecta la supervivencia de la víctima. Se manifiesta en: la transformación, sustracción, destrucción, retención o distracción de objetos, documentos personales, bienes y valores, derechos patrimoniales o recursos económicos destinados a satisfacer sus necesidades y puede abarcar los daños a los bienes comunes o propios de la víctima.'
  },
  {
    title: 'Violencia Sexual',
    content: 'Es cualquier acto que degrada o daña el cuerpo y/o la sexualidad de la víctima y que por tanto atenta contra su libertad, dignidad e integridad física. Es una expresión de abuso de poder que implica la supremacía masculina sobre la mujer, al denigrarla y concebirla como objeto.'
  },
  {
    title: 'Violencia Económica',
    content: 'Es toda acción u omisión del agresor que afecta la supervivencia económica de la víctima. Se manifiesta a través de limitaciones encaminadas a controlar el ingreso de sus percepciones económicas, así como la percepción de un salario menor por igual trabajo, dentro de un mismo centro laboral.'
  }
] satisfies AccordionComponentProps['accordionItems']

export const VIOLENCE_MODALITIES_CONTENT = [
  {
    title: 'Violencia Laboral',
    content: 'Es toda acción u omisión en el trabajo que daña la integridad física, psicológica, moral, económica o sexual de la víctima, así como el derecho a un ambiente laboral digno y saludable.'
  },
  {
    title: 'Violencia Escolar/Docente',
    content: 'Es toda acción u omisión que daña la integridad física, psicológica, moral, económica o sexual de la víctima, así como el derecho a un ambiente laboral digno y saludable.'
  },
  {
    title: 'Violencia Comunidad',
    content: 'Es toda acción u omisión que daña la integridad física, psicológica, moral, económica o sexual de la víctima, así como el derecho a un ambiente laboral digno y saludable.'
  },
  {
    title: 'Violencia Institucional',
    content: 'Es toda acción u omisión de las y los servidores públicos de cualquier orden de gobierno que discrimina o tiene como fin dilatar, obstaculizar o impedir el goce y ejercicio de los derechos humanos de las mujeres, así como su acceso al disfrute de políticas públicas de igualdad.'
  },
  {
    title: 'Violencia Feminicida',
    content: 'Es la forma extrema de violencia de género contra las mujeres, producto de la violación de sus derechos humanos, en los ámbitos público y privado, conformada por el conjunto de conductas misóginas que pueden conllevar impunidad social y del Estado y puede culminar en homicidio y otras formas de muerte violenta de mujeres.'
  },
  {
    title: 'Violencia Familiar',
    content: 'Es el acto abusivo de poder u omisión intencional, dirigido a dominar, someter, controlar o agredir de manera física, verbal, psicológica, patrimonial, económica, sexual o simbólica a las mujeres, dentro o fuera del domicilio familiar, que daña la dignidad, integridad, libertad y/o la seguridad de las mujeres, así como su derecho al pleno desarrollo.'
  },
  {
    title: 'Violencia Digital/Cibernética',
    content: 'Es el uso de tecnologías de información y comunicación para ejercer violencia psicológica, emocional, sexual, patrimonial, económica, laboral o feminicida.'
  }
] satisfies AccordionComponentProps['accordionItems']

export const VIOLENCE_RGB_COLORS = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(255, 205, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(54, 162, 235, 0.5)'
]

export const AGRESSORS_AGE_RANGES = [
  '0-17',
  '18-30',
  '31-50',
  '51-70',
  '71 y más',
  'Sin especificar'
] as const

export const AGRESSORS_AGE_RANGES_MAPPER = {
  agressorsAgeRange1: '0-17',
  agressorsAgeRange2: '18-30',
  agressorsAgeRange3: '31-50',
  agressorsAgeRange4: '51-70',
  agressorsAgeRange5: '71 y más',
  agressorsAgeRange6: 'Sin especificar'
} as const

export const AGRESSORS_AGE_RANGES_RGB_COLORS = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(255, 205, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(153, 102, 255, 0.5)'
]

export const SERVICES_TYPE_RGB_COLORS = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(255, 205, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(153, 102, 255, 0.5)'
]
export const AGRESSORS_BY_GENDER_RGBA = [
  'rgba(54, 162, 235, 0.5)',
  'rgba(255, 206, 86, 0.5)',
  'rgba(255, 99, 132, 0.5)'
]

export const VICTIMS_BY_GENDER_RGBA = [
  'rgba(255, 99, 132, 0.5)'
]

export const AMOUNT_MAPPER = {
  1: '1 agresor',
  2: '2 agresores',
  3: '3 agresores',
  4: '4 agresores',
  5: '5 agresores'
} as const

export const COOR_MAPS = [
  ['38%', '39%'],
  ['29%', '13%'],
  ['58%', '58.5%'],
  ['34%', '65%'],
  ['49%', '23%'],
  ['84%', '45%'],
  ['28%', '31%'],
  ['60%', '48%'],
  ['40%', '29%'],
  ['68%', '16%'],
  ['35%', '21%'],
  ['66%', '30%'],
  ['19%', '37%'],
  ['62%', '35%'],
  ['56%', '30%'],
  ['47%', '57%'],
  ['53%', '37%'],
  ['21%', '48%'],
  ['32%', '53%'],
  ['72%', '47%'],
  ['57%', '34%'],
  ['62%', '56%'],
  ['49%', '39%'],
  ['21%', '34%'],
  ['53%', '74%'],
  ['45%', '42%'],
  ['63%', '59.5%']
] as const
