/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('g_addresses', [
      {
        street: 'Av. Presidente Vargas',
        number: '2301',
        neighborhood: 'Malheiros',
        zipcode: '98015075',
        reference: 'Próximo a escola Iná Caino',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        street: 'Rua Coroado',
        number: '118',
        neighborhood: 'São Jorge',
        zipcode: '98010630',
        reference: 'Próximo a escola Gabriel Anes da Silva',
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});
  },

  down() {},
};
