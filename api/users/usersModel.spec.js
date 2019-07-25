const db = require('../data/dbConfig');
const Users = require('./usersModel');

beforeEach(async () => {
  await db('users').truncate();
});

describe('create user', () => {
  it('add a new user to the db', async() => {
    let users = await Users.getAll();
    expect(users).toHaveLength(0);

    await Users.insert({ name: 'Marty' });
    await Users.insert({ name: 'Twummy' });
    await Users.insert({ name: 'Mensah' });
    users = await Users.getAll();

    expect(users).toHaveLength(3);
  });

  it('add a specific user', async () => {
    let users = await Users.getAll();
    expect(users).toHaveLength(0);

    await Users.insert({ name: 'Marty' });
    await Users.insert({ name: 'Twummy' });
    await Users.insert({ name: 'Mensah' });
    users = await Users.getAll();

    expect(users[0].name).toBe('Marty');
    expect(users[1].name).toBe('Twummy');
    expect(users[2].name).toBe('Mensah');
  })
})

describe('delete user', () => {
  it('deletes a user with the passed id', async() => {
    let users = await Users.getAll();
    expect(users).toHaveLength(0);

    await Users.insert({ name: 'Marty' });
    users = await Users.getAll();

    await Users.remove(users[0].id)
    users = await Users.getAll();

    expect(users).toHaveLength(0);
  });
})
