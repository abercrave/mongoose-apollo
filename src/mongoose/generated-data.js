import faker from 'faker';

const divisions = ['CompHealth', 'Weatherby Healthcare'];

const recordCounts = {
  presents: 15000,
  providers: 5000,
  requests: 1000,
};

const requests = Array(recordCounts.requests)
  .fill(null)
  .map((item, index) => ({
    id: index,
    createdAt: faker.date.past(1),
    presents: [],
  }));

const providers = Array(recordCounts.providers)
  .fill(null)
  .map((item, index) => ({
    id: index,
    name: faker.name.findName(),
  }));

const presents = Array(recordCounts.presents)
  .fill(null)
  .map((item, index) => {
    const present = {
      id: index,
      division: faker.random.arrayElement(divisions),
      provider: faker.random.arrayElement(providers).id,
      request: faker.random.arrayElement(requests).id,
    };

    const requestIndex = requests.findIndex(request => request.id === present.request);

    if (requestIndex > -1) {
      requests[requestIndex].presents.push(present.id);
    }

    return present;
  });

export { presents, providers, requests };
