import * as facker from 'faker/locale/ko';
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { Post } from './entity/Post';
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

        const user = await User.create({
            email: facker.random.uuid() + facker.internet.email(),
            password: facker.internet.password(),
            profile,
        }).save();

        const post = await Post.create({
            title: '제목',
            content: '내용',
            user
        }).save();

        console.log(await Post.find({relations: ['user', 'user.profile']}))
        await user.remove();
        console.log(await Post.find({relations: ['user', 'user.profile']}))
    } catch(error) {
        console.log(error);
    } finally {
        await connection.close();
    }
})();