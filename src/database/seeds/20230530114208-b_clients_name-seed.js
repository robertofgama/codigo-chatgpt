/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('b_clients_name', [
      {
        name: 'Cliente 1',
        nick_name: 'cliente1',
        obs: 'Observação 1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cliente 2',
        nick_name: 'cliente2',
        obs: 'Observação 2',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cliente 3',
        nick_name: 'cliente3',
        obs: 'Observação 3',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cliente 4',
        nick_name: 'cliente4',
        obs: 'Observação 4',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cliente 5',
        nick_name: 'cliente5',
        obs: 'Observação 5',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cliente 6',
        nick_name: 'cliente6',
        obs: 'Observação 6',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cliente 7',
        nick_name: 'cliente7',
        obs: 'Observação 7',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cliente 8',
        nick_name: 'cliente8',
        obs: 'Observação 8',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cliente 9',
        nick_name: 'cliente9',
        obs: 'Observação 9',
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});
  },

  down() {},
};
