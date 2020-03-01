import * as facker from 'faker/locale/ko';
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Profile } from './entity/Profile';
import { User } from './entity/User';

(async() => {
    try {
        const connection = await createConnection();
        const profile = await Profile.create({
            name: facker.internet.userName(),
            age: facker.random.number({min: 17, max: 100})
        }).save();

        const user = await User.create({
            email: facker.random.uuid() + facker.internet.email(),
            password: facker.internet.password(),
            profile,
        }).save();

        console.log(await User.find())
        console.log(await User.find({relations: ['profile']}))
        // await user.remove();
        // console.log(await User.find())
        // console.log(await Profile.find())
        await connection.close();
    } catch(error) {
        console.log(error);
    }
})();