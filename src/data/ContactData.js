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
    }
]

export default contacts