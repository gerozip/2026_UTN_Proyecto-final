const contacts = [
    {
        id: 1,
        name: 'Miguel Ángel',
        phone: '123456789',
        email: 'miguel.angel@example.com',
        last_connection: 'Hace 2 horas',
        profile_picture: 'https://ui-avatars.com/api/?name=MA&background=567BCD&color=ffffff&size=200',
        is_pinned: true,
        is_muted: false,
        is_blocked: false,
        highlighted_messages: [2],
        media: [],
        messages: [
            {
                id: 1,
                text: 'Hola, ¿todo bien?',
                send_by_me: true,
                created_at: '2024-06-01T10:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Sí, todo perfecto. ¿Y vos qué tal?',
                send_by_me: false,
                created_at: '2024-06-01T10:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Bien, trabajando en unos proyectos',
                send_by_me: true,
                created_at: '2024-06-01T10:10:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Excelente, cualquier cosa me cuentas',
                send_by_me: false,
                created_at: '2024-06-01T10:15:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 2,
        name: 'Amatista Russo',
        phone: '123976789',
        email: 'amatista.russo@example.com',
        last_connection: 'Hace 5 horas',
        profile_picture: 'https://ui-avatars.com/api/?name=AR&background=E91E63&color=ffffff&size=200',
        is_pinned: false,
        is_muted: false,
        is_blocked: false,
        highlighted_messages: [],
        media: [],
        messages: [
            {
                id: 1,
                text: 'Hola! Cómo estás?',
                send_by_me: true,
                created_at: '2024-06-01T10:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Muy bien! ¿Vos?',
                send_by_me: false,
                created_at: '2024-06-01T10:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Yo también bien, gracias por preguntar',
                send_by_me: true,
                created_at: '2024-06-01T10:10:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 3,
        name: 'Mike Dean',
        phone: '1123456789',
        email: 'mike.dean@example.com',
        last_connection: 'Hace 30 minutos',
        profile_picture: 'https://ui-avatars.com/api/?name=MD&background=FF9800&color=ffffff&size=200',
        is_pinned: false,
        is_muted: false,
        is_blocked: false,
        highlighted_messages: [],
        media: [],
        messages: [
            {
                id: 1,
                text: 'Hola! ¿Cómo estuvo tu día?',
                send_by_me: false,
                created_at: '2024-06-02T14:30:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Todo bien, bastante productivo',
                send_by_me: true,
                created_at: '2024-06-02T14:35:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Que bueno! Yo también logré avanzar bastante',
                send_by_me: false,
                created_at: '2024-06-02T14:40:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 4,
        name: 'Ricardo Iorio',
        phone: '1134567801',
        email: 'ricardo.iorio@example.com',
        last_connection: 'Hace 1 hora',
        profile_picture: 'https://ui-avatars.com/api/?name=RI&background=9C27B0&color=ffffff&size=200',
        is_pinned: false,
        is_muted: false,
        is_blocked: false,
        highlighted_messages: [],
        media: [],
        messages: [
            {
                id: 1,
                text: 'Che, ¿viste el partido?',
                send_by_me: false,
                created_at: '2024-06-02T15:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Sí! Fue increíble, ¿no?',
                send_by_me: true,
                created_at: '2024-06-02T15:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Totalmente, qué gol el del final',
                send_by_me: false,
                created_at: '2024-06-02T15:10:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 5,
        name: 'Benito Benavidez',
        phone: '1145678902',
        email: 'benito.benavidez@example.com',
        last_connection: 'Hace 3 horas',
        profile_picture: 'https://ui-avatars.com/api/?name=BB&background=4CAF50&color=ffffff&size=200',
        is_pinned: false,
        is_muted: false,
        is_blocked: false,
        highlighted_messages: [],
        media: [],
        messages: [
            {
                id: 1,
                text: 'Ey! ¿Qué tal todo?',
                send_by_me: true,
                created_at: '2024-06-02T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Ey! Muy bien, ¿vos?',
                send_by_me: false,
                created_at: '2024-06-02T12:10:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'De maravilla! Conseguí las entradas para el show',
                send_by_me: true,
                created_at: '2024-06-02T12:15:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 6,
        name: 'Diego Fernández',
        phone: '1156789003',
        email: 'diego.fernandez@example.com',
        last_connection: 'Hace 45 minutos',
        profile_picture: 'https://ui-avatars.com/api/?name=DF&background=2196F3&color=ffffff&size=200',
        is_pinned: false,
        is_muted: false,
        is_blocked: false,
        highlighted_messages: [],
        media: [],
        messages: [
            {
                id: 1,
                text: 'Hola Diego, ¿me pasas esos archivos?',
                send_by_me: true,
                created_at: '2024-06-02T15:30:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Claro, te los envío en un momento',
                send_by_me: false,
                created_at: '2024-06-02T15:35:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Ok, gracias!',
                send_by_me: true,
                created_at: '2024-06-02T15:40:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 7,
        name: 'Lucía Rodríguez',
        phone: '1167890104',
        email: 'lucia.rodriguez@example.com',
        last_connection: 'Hace 2 horas',
        profile_picture: 'https://ui-avatars.com/api/?name=LR&background=F44336&color=ffffff&size=200',
        is_pinned: false,
        is_muted: false,
        is_blocked: false,
        highlighted_messages: [],
        media: [],
        messages: [
            {
                id: 1,
                text: 'Hola! ¿Viste que subieron las notas?',
                send_by_me: false,
                created_at: '2024-06-02T13:45:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Sí acabo de verlas, muy bien!',
                send_by_me: true,
                created_at: '2024-06-02T13:50:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Verdad? Me alegra mucho por vos',
                send_by_me: false,
                created_at: '2024-06-02T13:55:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 8,
        name: 'Pablo Sánchez',
        phone: '1178901205',
        email: 'pablo.sanchez@example.com',
        last_connection: 'Hace 4 horas',
        profile_picture: 'https://ui-avatars.com/api/?name=PS&background=00BCD4&color=ffffff&size=200',
        is_pinned: false,
        is_muted: false,
        is_blocked: false,
        highlighted_messages: [],
        media: [],
        messages: [
            {
                id: 1,
                text: 'Pablo, el proyecto está casi listo',
                send_by_me: true,
                created_at: '2024-06-02T11:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Excelente noticia! ¿Para cuándo?',
                send_by_me: false,
                created_at: '2024-06-02T11:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Para el próximo lunes como mucho',
                send_by_me: true,
                created_at: '2024-06-02T11:10:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 9,
        name: 'Valentina Perez',
        phone: '1189012306',
        email: 'valentina.perez@example.com',
        last_connection: 'Hace 1 hora',
        profile_picture: 'https://ui-avatars.com/api/?name=VP&background=FFEB3B&color=000000&size=200',
        is_pinned: false,
        is_muted: false,
        is_blocked: false,
        highlighted_messages: [],
        media: [],
        messages: [
            {
                id: 1,
                text: 'Hola Valen! Cómo estás?',
                send_by_me: true,
                created_at: '2024-06-02T14:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola! Muy bien, ¿y vos?',
                send_by_me: false,
                created_at: '2024-06-02T14:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Bien! Nos vemos en la reunión?',
                send_by_me: true,
                created_at: '2024-06-02T14:10:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 10,
        name: 'Javier Morales',
        phone: '1190123407',
        email: 'javier.morales@example.com',
        last_connection: 'Hace 6 horas',
        profile_picture: 'https://ui-avatars.com/api/?name=JM&background=8BC34A&color=ffffff&size=200',
        is_pinned: false,
        is_muted: false,
        is_blocked: false,
        highlighted_messages: [],
        media: [],
        messages: [
            {
                id: 1,
                text: 'Che, ¿me das tu número de teléfono?',
                send_by_me: true,
                created_at: '2024-06-02T09:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Claro! Es 11 xxxx xxxx, ¿y el tuyo?',
                send_by_me: false,
                created_at: '2024-06-02T09:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Perfecto, te llamo después entonces',
                send_by_me: true,
                created_at: '2024-06-02T09:10:00Z',
                is_read: true
            }
        ]
    }
]

export default contacts