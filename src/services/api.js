export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 2,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 3,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 4,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 5,
            content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Lorem Ipsum is simply dummy...',
            labels: [],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 8,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 9,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            labels: [],
          },
          {
            id: 12,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }