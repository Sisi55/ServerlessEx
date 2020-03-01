import * as facker from 'faker/locale/ko';
import "reflect-metadata";
import { Connection, createConnection, getManager } from 'typeorm';
import { Group } from './entity/Group';
import { Profile } from './entity/Profile';
import { User } from './entity/User';

(async() => {
    let connection: Connection;
    try {
        connection = await createConnection();
        const profile = await Profile.create({
            name: facker.internet.userName(),
            age: facker.random.number({min: 17, max: 100})
        }).save();

        const groups: Group[] = [
            await Group.create({
                name: '탁구동호회'
            }).save(),
            await Group.create({
                name: '농구동호회'
            }).save(),
        ];

        const user = await User.create({
            email: facker.random.uuid() + facker.internet.email(),
            password: facker.internet.password(),
            profile,
            groups,
        }).save();

        console.log(await User.find({relations: ['groups']}));
        console.log(await Group.find({relations: ['users']}));
        await user.remove();
        console.log(await User.find());
        console.log(await Group.find());
        console.log(await getManager().query('SELECT * FROM `group_users_user`'));
    } catch(error) {
        console.log(error);
    } finally {
        await connection.close();
    }
})();