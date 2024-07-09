interface Item {
  title: string;
  author?: string;
  returnWindowClosed: string;
  price: number;
}

interface Order {
  deliveredDate: string;

  orderPlaced: string;
  total: number;
  shipTo: string;
  orderNumber: string;

  items: Item[];
}

const orderHistory: Order[] = [
  {
    orderPlaced: 'August 4, 2020',
    total: 34.0,
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',

    deliveredDate: 'Aug 8, 2020',

    items: [
      {
        title: 'JavaScript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        returnWindowClosed: 'Sep 7, 2020',
        price: 31.55,
      },
    ],
  },
  {
    orderPlaced: 'July 19, 2020',
    total: 44.53,
    shipTo: 'JS Masher',
    orderNumber: '113-9984268-1280257',

    deliveredDate: 'Jul 20, 2020',

    items: [
      {
        title: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        returnWindowClosed: 'Aug 19, 2020',
        price: 41.33,
      },
    ],
  },
  {
    orderPlaced: 'Jul 4, 2020',
    total: 17.22,
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',

    deliveredDate: 'Jul 7, 2020',

    items: [
      {
        title:
          'Gamecube Controller Adapter, Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        returnWindowClosed: 'Aug 5, 2020',
        price: 15.98,
      },
    ],
  },
  {
    orderPlaced: 'Jul 3, 2020',
    total: 138.93,
    shipTo: 'JS Masher',
    orderNumber: '113-2833177-2648248',

    deliveredDate: 'Jul 5, 2020',

    items: [
      {
        title:
          'GameCube Controller - Super Smash Bros. Edition(Nintendo Switch)',
        returnWindowClosed: 'Aug 4, 2020',
        price: 94.95,
      },
      {
        title: 'The Art of Sql',
        author: 'Faroult Stephane',
        returnWindowClosed: 'Aug 4, 2020',
        price: 33.99,
      },
    ],
  },
];
