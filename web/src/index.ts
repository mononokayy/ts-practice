import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'newest name', age: 0 });

user.on('save', () => {
    console.log(user);
})

user.save();