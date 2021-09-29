import { useState, useEffect } from 'react';
import * as _ from 'lodash';

interface IUser {
  id: number,
  name: {
    first: string,
    last?: string,
  },
  age: number,
  type: string
}

const users = [
  {
    id: 0,
    name: {
      first: 'Tim',
      last: 'Winfred'
    },
    age: 31,
    type: 'human'
  },
  {
    id: 1,
    name: {
      first: 'Jojo'
    },
    age: 7,
    type: 'dog',
  },
  {
    id: 2,
    name: {
      first: 'Noodle'
    },
    age: 1.5,
    type: 'dog'
  },
  {
    id: 3,
    name: {
      first: 'Sam'
    },
    age: 1,
    type: 'fish'
  },
  {
    id: 4,
    name: {
      first: 'Tina',
      last: 'Winfred'
    },
    age: 56,
    type: 'human'
  },
  {
    id: 5,
    name: {
      first: 'Taz'
    },
    age: 3,
    type: 'guinea pig'
  }
];

const loadRandomUser = (): Promise<IUser> => { // Mock API endpoint
  const randomNumber = _.random(0, users.length - 1);

  return new Promise((resolve) => {
    setTimeout(() => { // Simulate API response time
      resolve(users[randomNumber]);
    }, _.random(100, 1000));
  });
}

const loadUsersByType = (type: string): Promise<IUser[]> => { // Mock API endpoint
  const filteredUsers: IUser[] = _.filter(users, { type });

  return new Promise((resolve) => {
    setTimeout(() => { // Simulate API response time
      resolve(filteredUsers);
    }, _.random(100, 1000));
  })
}

function LodashContainer() {
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const [isLoadingRandomUser, setIsLoadingRandomUser] = useState<boolean>(true);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>();
  const [isLoadingFilteredUsers, setIsLoadingFilteredUsers] = useState<boolean>(true);

  useEffect(() => {
    if (!selectedUser) {
      setIsLoadingRandomUser(true);

      loadRandomUser().then(user => {
        setSelectedUser(user);
        setIsLoadingRandomUser(false);
      });
    }
  }, [selectedUser]);

  useEffect(() => {
    if (!filteredUsers) {
      const userType = users[_.random(0, users.length - 1)].type;

      setIsLoadingFilteredUsers(true);

      loadUsersByType(userType).then(users => {
        setFilteredUsers(users);
        setIsLoadingFilteredUsers(false);
      });
    }
  }, [filteredUsers]);

  return (
    <section>
      <h2>3. Using Lodash to make some magic happen.</h2>
      <div>
        <h3>Let's play with _.random()</h3>
        <div style={{ height: '60px' }}>
          <button onClick={() => setSelectedUser(undefined)}>Generate a new random user</button>
          {isLoadingRandomUser && <p>Loading new user...</p>}
          {selectedUser && <p><strong>Random User:</strong> {selectedUser.name.first} {selectedUser.name?.last} is a {selectedUser.type} who is {selectedUser.age} {selectedUser.age !== 1 ? 'years' : 'year'} old</p>}
        </div>
      </div>
      <div>
        <h3>Let's play with _.filter()</h3>
        <div style={{ height: '150px' }}>
          <button onClick={() => setFilteredUsers(undefined)}>Generate a new group of users filtered by type</button>
          {isLoadingFilteredUsers && <p>Loading filtered users...</p>}
          {filteredUsers && <p><strong>Filtered users:</strong></p>}
          {filteredUsers?.map(user => <p key={user.id}>{user.name.first} is a {user.type}</p>)}
        </div>
      </div>
    </section>
  )
}

export default LodashContainer;