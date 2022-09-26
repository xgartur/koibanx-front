import { faker } from '@faker-js/faker';

const generateStore = (n: number) => {
  console.log("Generate store")
  let stores = []
  for (let index = 0; index < n; index++) {
    stores.push({
      id: faker.database.mongodbObjectId(),
      commerce: faker.company.name(),
      cuit: faker.lorem.word(),
      concept: [
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
      ],
      balance: '$ 132',
      active: faker.helpers.arrayElement(['si', 'no']),
      lastSell: '12/32/45'
    })
  }
  return stores
}

export { generateStore }
