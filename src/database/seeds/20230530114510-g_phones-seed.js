/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('g_phones', [
      {
        phone_number: '000000000',
        cod_area: '55',
        cod_country: '55',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        phone_number: '111111111',
        cod_area: '55',
        cod_country: '55',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        phone_number: '222222222',
        cod_area: '55',
        cod_country: '55',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        phone_number: '333333333',
        cod_area: '55',
        cod_country: '55',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        phone_number: '444444444',
        cod_area: '55',
        cod_country: '55',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down() {},
};
