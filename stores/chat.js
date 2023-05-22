import { defineStore } from 'pinia'

const useChatStore = defineStore('chat', {
  state: () => ({
    members: {
      ids: [
        'ac5730f8-f6e9-4631-9b39-d5079d897554',
        '90f199ef-143a-4114-8fcc-0d839f4f2304',
        '2cb699ac-c208-44e6-8d76-07d87592e950',
        'e42867a2-9db1-448a-b310-07a911bb4e51',
        'ba846270-654c-403c-916f-c38924bc1a76',
        '8fbae869-434b-42e9-b87a-9f9ecad5932b',
        '3ee8d464-bc2d-4886-b6e0-789f100d03b5',
        '6f4567d9-3ab3-473f-9ca4-c1b39ea3e842',
      ],

      all: {
        'ac5730f8-f6e9-4631-9b39-d5079d897554': {
          id: 'ac5730f8-f6e9-4631-9b39-d5079d897554',
          name: 'Edith Miller',
          role: 'Team Leader',
          location: 'Home',
          department: 'D4',
          status: 'On a break',
          active: true,
        },
        '90f199ef-143a-4114-8fcc-0d839f4f2304': {
          id: '90f199ef-143a-4114-8fcc-0d839f4f2304',
          name: 'Frederick Brayton',
          role: 'Agent',
          location: 'Office',
          department: 'D3',
          status: 'In a meeting',
          active: false,
        },
        '2cb699ac-c208-44e6-8d76-07d87592e950': {
          id: '2cb699ac-c208-44e6-8d76-07d87592e950',
          name: 'Jo H. Woody',
          role: 'Agent',
          location: 'Office',
          department: 'D2',
          status: 'Troubleshooting',
          active: false,
        },
        'e42867a2-9db1-448a-b310-07a911bb4e51': {
          id: 'e42867a2-9db1-448a-b310-07a911bb4e51',
          name: 'Tyler Moore',
          role: 'Agent',
          location: 'Home',
          department: 'D2',
          status: null,
          active: true,
        },
        'ba846270-654c-403c-916f-c38924bc1a76': {
          id: 'ba846270-654c-403c-916f-c38924bc1a76',
          name: 'Olivia Romo',
          role: 'Manager',
          location: 'Office',
          department: 'D1',
          status: 'In a meeting',
          active: false,
        },
        '8fbae869-434b-42e9-b87a-9f9ecad5932b': {
          id: '8fbae869-434b-42e9-b87a-9f9ecad5932b',
          name: 'Lloyd Shellenbarger',
          role: 'IT',
          location: 'Home',
          department: 'D1',
          status: null,
          active: false,
        },
        '3ee8d464-bc2d-4886-b6e0-789f100d03b5': {
          id: '3ee8d464-bc2d-4886-b6e0-789f100d03b5',
          name: 'Hilda Ramos',
          role: 'IT',
          location: 'Home',
          department: 'D1',
          status: null,
          active: false,
        },
        '6f4567d9-3ab3-473f-9ca4-c1b39ea3e842': {
          id: '6f4567d9-3ab3-473f-9ca4-c1b39ea3e842',
          name: 'Troy Coughlan',
          role: 'IT',
          location: 'Office',
          department: 'D1',
          status: null,
          active: true,
        },
      },
    },
  }),

  getters: {
    memberCount: (state) => state.members.ids.length,

    members: (state) => state.members.ids.map((id) => state.members.all[id]),
  },
})

export default useChatStore
