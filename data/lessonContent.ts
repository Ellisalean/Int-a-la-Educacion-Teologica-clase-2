import { Lesson } from '../types';

export const COUNSELING_LESSON: Lesson = {
  id: 'intro-educacion-cristiana-ch1',
  title: 'Introducción a la Educación Cristiana',
  subtitle: 'Latin Theological Seminary',
  totalSlides: 18,
  slides: [
    {
      id: 'slide-1',
      type: 'intro',
      title: 'Introducción a la Educación Cristiana',
      subtitle: 'Introducción General',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/f3028127-b198-4692-9c0f-c770c9e032d5_rw_1920.jpg?h=3f447481ba91cd39dd43c9aea1fd65e4', position: 'background' },
      content: 'Un estudio centrado en Dios y las Escrituras para entender la educación cristiana.'
    },
    {
      id: 'slide-2',
      type: 'visual-info',
      title: 'Introducción',
      subtitle: 'El llamado a enseñar',
      visual: { type: 'image', source: 'https://comex-assets.s3.amazonaws.com/comex-assets/web/posts/5068/economia-090318-102544.jpg', position: 'left' },
      content: 'La importancia de la educación en el ministerio cristiano a menudo se malentiende. La educación no es solo una área del ministerio, sino una función vital que la iglesia debe cumplir en el contexto del Reino de Dios y la historia de la redención. La Gran Comisión (Mateo 28:19-20) es nuestro mandato pedagógico.'
    },
    {
      id: 'slide-3',
      type: 'interactive-reveal',
      title: 'I. Una Aproximación a la Definición',
      subtitle: 'Etimología y Raíz Bíblica',
      visual: { type: 'image', source: 'https://picsum.photos/seed/bible2/1200/800', position: 'background' },
      interaction: {
        type: 'grid-cards',
        revealItems: [
          { title: 'Educare', text: 'Criar, nutrir, alimentar. Acción externa.', icon: 'ArrowDown', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtLmkWzuWaZHK1Mlxvv4HwyZaf4thtHX3MA&s=600&auto=format&fit=crop' },
          { title: 'Exducere', text: 'Sacar, llevar, conducir. Facilitar lo que ya se posee.', icon: 'ArrowUp', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop' },
          { title: 'Efesios 4:13', text: 'Epignōseōs (Ciencia), Teleion (Maduro), Metron (Estándar/Medida).', icon: 'BookOpen', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/45f3f9f3-535a-48e6-9b26-8844c193bdf8_rw_1200.jpg?h=a8433ae0be00b761e1a002ee3a3d430a' }
        ]
      }
    },
    {
      id: 'slide-4',
      type: 'visual-info',
      title: 'Definiendo la Educación Cristiana',
      subtitle: 'Orden metodológico',
      visual: { type: 'image', source: 'https://www.aliatuniversidades.com.mx/hs-fs/hubfs/Imported_Blog_Media/Imagen1-24-de-mayo-EDUCACION.jpg?width=744&height=400&name=Imagen1-24-de-mayo-EDUCACION.jpg', position: 'right' },
      content: 'La educación cristiana es el orden metodológico que gobierna soberanamente el proceso de formación de los miembros del pueblo de Dios conforme al modelo consumado en Jesucristo.'
    },
    {
      id: 'slide-5',
      type: 'visual-info',
      title: 'II. Filosofía Cristiana de la Educación',
      subtitle: '¿Qué es filosofía?',
      visual: { type: 'image', source: 'https://picsum.photos/seed/philosophy/1200/800', position: 'left' },
      content: 'Etimológicamente: "Amor a la sabiduría". En la práctica, es la manera o la forma en que hacemos algo. Una filosofía cristiana de la educación significa: Hacer educación a la manera de Dios.'
    },
    {
      id: 'slide-6',
      type: 'visual-info',
      title: 'Desafíos a la Filosofía Cristiana',
      subtitle: 'Derribando el dualismo',
      visual: { type: 'image', source: 'https://cdn.euroinnova.edu.es/img/subidasEditor/el%20texto%20del%20p%C3%A1rrafo%20(96)-1634063306.webp', position: 'right' },
      content: 'Evitar la falsa separación entre lo "secular" y lo "sagrado". Cristo es Señor de toda área de la vida, incluyendo la educación. No debemos tener un doble estándar de exigencia.'
    },
    {
      id: 'slide-7',
      type: 'visual-info',
      title: 'III. Sustento Bíblico-Teológico',
      subtitle: 'Un trasfondo necesario',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/065c5e44-cfba-4f2c-b701-771914319b44_rw_1200.jpg?h=2a4f59cf33568b9c5a685bd32ea79463', position: 'background' },
      content: 'La educación cristiana responde a una relación pactal entre Dios y su pueblo. Entender la educación a través de la historia de la redención (Creación, Caída, Restauración, Glorificación).'
    },
    {
      id: 'slide-8',
      type: 'visual-info',
      title: 'A. El Fin Principal del Hombre',
      subtitle: '¿Para qué fuimos creados?',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/4f0b56bf-8414-4020-9cd0-eb493349f6cd_rw_1920.jpg?h=f7bf4cf3d5ac459be9b7e5d0ca14d8b2', position: 'left' },
      content: 'Humanismo: Antropocéntrico (el hombre es el fin). Educación Teológica: Teocéntrico (Dios es el fin). El Catecismo Menor de Westminster: "El fin principal de la existencia del hombre es glorificar a Dios, y gozar de él para siempre".'
    },
    {
      id: 'slide-9',
      type: 'stepped-overlay',
      title: 'La Afectación Educativa (Isaías 43:7/Hegeman)',
      subtitle: 'Crear, Formar, Hacer',
      visual: { type: 'image', source: 'https://picsum.photos/seed/impact/1200/800', position: 'background' },
      interaction: {
        type: 'stepped-reveal',
        revealItems: [
          { title: 'Ser', text: 'Efesios 4:13', longContent: 'Hacia un varón perfecto, a la medida de la estatura de la plenitud de Cristo.', icon: 'User', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/9098b031-31b0-4e66-9c25-80b850fff573_rw_1920.jpg?h=85469a4ce70b0c980ddcbc24a05b8a93' },
          { title: 'Saber', text: 'Juan 17:3', longContent: 'La esencia de la vida eterna definida en términos de conocimiento de Dios y Jesucristo.', icon: 'Book', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/a24feb00-1514-4d69-aaba-659839fee0d9_rw_1920.jpg?h=7080a31512160e3ab7f00732bdba8583' },
          { title: 'Hacer', text: '2 Corintios 10:5', longContent: 'Capacita para llevar toda cosa a la obediencia de Cristo.', icon: 'Activity', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/b1a6143a-7316-4d39-bd6b-61a6242d5748_rw_1920.jpg?h=b1e347dd27c67cb8d3ea5b7547128eb1' }
        ]
      }
    },
    {
      id: 'slide-10',
      type: 'visual-info',
      title: 'B. Cómo Glorificar a Dios',
      subtitle: 'Tres etapas complementarias',
      visual: { type: 'image', source: 'https://picsum.photos/seed/glorify/1200/800', position: 'right' },
      bullets: [
        '1. Conocerle (Juan 17:3 - Vida Eterna es conocimiento)',
        '2. Amarle',
        '3. Obedecerle'
      ]
    },
    {
      id: 'slide-11',
      type: 'visual-info',
      title: '1. Conocer a Dios',
      subtitle: 'La esencia de la vida eterna',
      visual: { type: 'image', source: 'https://picsum.photos/seed/know/1200/800', position: 'left' },
      content: 'El conocimiento de Dios se efectúa en el entendimiento humano, no en los sentimientos. El Espíritu Santo habilita nuestra mente para conocerle. Debemos alabar a Dios por permitirnos entenderle y conocerle (Jeremías 9:23-24).'
    },
    {
      id: 'slide-12',
      type: 'visual-info',
      title: '2. Amar a Dios',
      subtitle: 'Un acto de la voluntad',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/ead79127-475d-4e2a-85f6-182a189c48ab_rw_1200.jpg?h=42547a46480d6f87972110506042d479', position: 'right' },
      content: 'El amor bíblico no es un simple sentimiento. Juan 14:15: "Si me amáis, guardad mis mandamientos". El amor se manifiesta a través de actos concretos de obediencia a Su Palabra.'
    },
    {
      id: 'slide-13',
      type: 'visual-info',
      title: '3. Obedecer a Dios',
      subtitle: 'La fase concluyente',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/885dcef8-ad53-4002-bef1-da7455914677_rw_1920.jpg?h=413d68e1074e4473de1d5f33af298baa', position: 'background' },
      content: 'Conocer y Amar nos capacita para Obedecer. La educación en la verdad es sacrificial porque exige entrega total de dones y habilidades. Se requiere pagar el precio para ser libres y discípulos verdaderos (Juan 8:32). ¡Estamos llamados a hacer discípulos!'
    },
    {
      id: 'slide-14',
      type: 'intro',
      title: 'La Unidad en la Educación Teológica',
      subtitle: 'Capítulo 2: La Unidad en la Educación Teológica',
      visual: { type: 'image', source: 'https://noticias-pe.laiglesiadejesucristo.org/media/960x540/Unidad-libertad-y-caridad-1.jpg', position: 'background' },
      content: 'La unidad esencial ya nos fue dada como parte del cuerpo de Cristo.'
    },
    {
      id: 'slide-15',
      type: 'visual-info',
      title: 'I. ¿Crear o Procurar?',
      subtitle: 'El llamado a la unidad',
      visual: { type: 'image', source: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop', position: 'left' },
      content: 'Es incorrecto pensar en crear unidad. Nuestro llamado es a procurar tal unidad (Spoudazontes: esmerarse, diligenciar, activamente). Somos procuradores, no creadores de la unidad.'
    },
    {
      id: 'slide-16',
      type: 'visual-info',
      title: 'II. Unidad en la Historia Bíblica',
      subtitle: 'Contenido y Propósito',
      visual: { type: 'image', source: 'https://images.squarespace-cdn.com/content/v1/5148b380e4b0106646129f8e/1522112597605-HH7YESCGK8T6TDXHQ4UB/la-manera-de-lograr-unidad.jpg', position: 'right' },
      content: 'Desde el Edén hasta Cristo, la educación bíblica muestra unidad teológica centrada en Dios. Elementos: Contenido (la Palabra de Dios) y Propósito (perfeccionar a su pueblo).'
    },
    {
      id: 'slide-17',
      type: 'interactive-reveal',
      title: 'III. Componentes de la Unidad',
      subtitle: 'Juan 17:23',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/ead79127-475d-4e2a-85f6-182a189c48ab_rw_1200.jpg?h=42547a46480d6f87972110506042d479', position: 'background' },
      interaction: {
        type: 'grid-cards',
        revealItems: [
          { title: 'La Base', text: '“Yo en ellos” - Cristo en control del proceso.', icon: 'User', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/ead79127-475d-4e2a-85f6-182a189c48ab_rw_1200.jpg?h=42547a46480d6f87972110506042d479' },
          { title: 'El Propósito', text: '“Sean perfectos en unidad” - Voluntad, doctrina y conducta.', icon: 'Target', image: 'https://todoesposible.blog/wp-content/uploads/2022/03/Excelencia-min.png' },
          { title: 'El Fruto', text: '“Que el mundo conozca” - Testimonio práctico.', icon: 'Globe', image: 'https://smart-lighting.es/wp-content/uploads/2017/11/Fotolia_55943449_M.jpg' }
        ]
      }
    },
    {
      id: 'slide-18',
      type: 'visual-info',
      title: 'Conclusión: Santidad para la Unidad',
      subtitle: 'Requisito previo',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/f3028127-b198-4692-9c0f-c770c9e032d5_rw_1920.jpg?h=3f447481ba91cd39dd43c9aea1fd65e4', position: 'background' },
      content: 'No puede haber unidad si no hay santidad. La unidad es la meta, pero requiere santidad como requisito previo (Hebreos 12:14).'
    }
  ]
};
