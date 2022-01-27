export const users = [
    {
      id: 1,
      name: 'Miguel Enrique',
      speciality: 'Estudiante',
      description: 'Estudiante de la carrera profesional de Ingeniería Informática y de Sistemas de la Universidad Nacional San Antonio Abad del Cusco',
      profile: {
        image: 'unnamed.jpg',
        background: 'descarga.jfif',
      },
      social: [
        { id: 1, icon: 'twitter',  name: 'Twitter',  link: { text: 'twitter.com/miguel-student',   href: '#' }},
        { id: 2, icon: 'linkedin', name: 'LinkedIn', link: { text: 'linkedin.com/miguel-student',  href: '#' }},
        { id: 3, icon: 'youtube',  name: 'YouTube',  link: { text: 'youtube.com/miguel-student',   href: '#' }},
      ],
      contact: [
        { id: 1, icon: 'cellphone',  name: 'Numero Celular',  text: '962188082' },
        { id: 2, icon: 'email',      name: 'Email',   text: 'email@gmail.com' },
        { id: 3, icon: 'address',    name: 'Current Address', text: '71 Pilgrim Avenue Chevy Chase, MD 20815' },
      ],
      experience: [
        { id: 1, time: '2017 - Present', career: 'UI/UX Designers', place: 'IronSketch' },
        { id: 2, time: '2015 - 2017', career: 'Art & Multimedia', place: 'Oxford University' },
        { id: 3, time: '2013 - 2015', career: 'Web Designer', place: 'WebDev Company' },
        { id: 4, time: '2009 - 2013', career: 'UI/UX Designer ', place: 'Design ArtData' }
      ],
      education: [
        { id: 1, time: '2008 - 2009', career: 'Special schools', place: 'Edison Schools' },
        { id: 1, time: '2007 - 2008', career: 'Technical schools', place: 'Jules E. Mastbaum Technical High School' },
        { id: 1, time: '2005 - 2007', career: 'High schools', place: 'Benjamin Franklin High School' },
        { id: 1, time: '1996 - 2004', career: 'Middle schools', place: 'Bethune, Mary Mcleod School' }
      ]
    }
  ]