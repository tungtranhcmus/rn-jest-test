class Users {
  static all() {
    return fetch('https://reactnative.dev/movies.json').then(res => res.json());
  }
}

export default Users;
