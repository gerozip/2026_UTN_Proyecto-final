const contacts = [
    {
        id: 1,
        name: 'Darth Vader',
        phone: '123456789',
        email: 'geronimo@example.com',
        last_connection: 'Hace 2 horas',
        profile_picture: 'https://media.revistagq.com/photos/62a0a996223a33e985e4d59a/1:1/w_900,h_900,c_limit/1072434_110615-cc-Darth-Vader-Thumb.jpg',
        messages: [
            {
                id: 1,
                text: 'Holaaaaaa',
                send_by_me: true,
                created_at: '2024-06-01T10:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: '*respira profundamente* Hola Gerónimo, ¿cómo estás? *vuelve a respirar profundamente*',
                send_by_me: false,
                created_at: '2024-06-01T10:05:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 2,
        name: 'Among Us',
        phone: '123976789',
        email: 'geronimo@example.com',
        last_connection: 'Hace 5 horas',
        profile_picture: 'https://i.pinimg.com/originals/7e/4f/f2/7e4ff250698c20b2e10ab47e58f399c6.jpg',
        messages: [
            {
                id: 1,
                text: 'Que onda',
                send_by_me: true,
                created_at: '2024-06-01T10:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Tu sanja redonda',
                send_by_me: false,
                created_at: '2024-06-01T10:05:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 3,
        name: 'Michael Jackson',
        phone: '1123456789',
        email: 'michael.jackson@example.com',
        last_connection: 'Hace 30 minutos',
        profile_picture: 'https://i2.wp.com/people.com/thmb/kH5WPADak70KeWwlyIOA4Lbz4Ng=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(709x499:711x501)/michael-jackson-210aa5866c7d4dd58de8e3af57fe919a.jpg',
        messages: [
            {
                id: 1,
                text: 'Hola! ¿Cómo estuvo tu día? HEE-HEE',
                send_by_me: false,
                created_at: '2024-06-02T14:30:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Todo bien, ¿y el tuyo? HEE-HEE',
                send_by_me: true,
                created_at: '2024-06-02T14:35:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Excelente, gracias por preguntar! HEE-HEE',
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
        profile_picture: 'https://assets.dev-filo.dift.io/img/2017/07/13/19990016_738228829694010_8391623111574881389_n_x1x_sq.jpg',
        messages: [
            {
                id: 1,
                text: 'OID MORTALES, EL GRITO SAGRAAAAAAAADO',
                send_by_me: false,
                created_at: '2024-06-02T15:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'IORIO, NO PUEDE SER SOS VOS',
                send_by_me: true,
                created_at: '2024-06-02T15:05:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 5,
        name: 'Ana Martínez',
        phone: '1145678902',
        email: 'ana.martinez@example.com',
        last_connection: 'Hace 3 horas',
        profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
        messages: [
            {
                id: 1,
                text: 'Te mando el proyecto actualizado',
                send_by_me: true,
                created_at: '2024-06-02T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Perfecto! Lo reviso ahora',
                send_by_me: false,
                created_at: '2024-06-02T12:10:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Muy bien, solo un pequeño ajuste en la línea 45',
                send_by_me: false,
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
        profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diego',
        messages: [
            {
                id: 1,
                text: 'Hey! Seguís en la comunidad?',
                send_by_me: false,
                created_at: '2024-06-02T15:30:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Claro que sí! Vos también?',
                send_by_me: true,
                created_at: '2024-06-02T15:35:00Z',
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
        profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucia',
        messages: [
            {
                id: 1,
                text: '¡Hola! ¿Viste el último video?',
                send_by_me: false,
                created_at: '2024-06-02T13:45:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'No, ¿cuál es? Pasame el link',
                send_by_me: true,
                created_at: '2024-06-02T13:50:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Te lo envío por correo',
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
        profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pablo',
        messages: [
            {
                id: 1,
                text: 'Necesito tu ayuda con algo',
                send_by_me: false,
                created_at: '2024-06-02T11:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Claro, ¿qué necesitas?',
                send_by_me: true,
                created_at: '2024-06-02T11:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Es sobre el tema que conversamos el otro día',
                send_by_me: false,
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
        profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Valentina',
        messages: [
            {
                id: 1,
                text: 'También estoy interesada en el proyecto!',
                send_by_me: false,
                created_at: '2024-06-02T14:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Genial! Te mando los detalles',
                send_by_me: true,
                created_at: '2024-06-02T14:05:00Z',
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
        profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Javier',
        messages: [
            {
                id: 1,
                text: 'Che, ¿cómo andas?',
                send_by_me: true,
                created_at: '2024-06-02T09:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Todo bien! Vos?',
                send_by_me: false,
                created_at: '2024-06-02T09:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'De lujo, me alegra saber de vos!',
                send_by_me: true,
                created_at: '2024-06-02T09:10:00Z',
                is_read: true
            }
        ]
    }
]

export default contacts