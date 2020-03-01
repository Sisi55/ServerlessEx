import * as faker from 'faker/locale/ko';
import "reflect-metadata";
import { Between, createConnection, Equal, getManager, getRepository, In, IsNull, LessThan, LessThanOrEqual, Like, MoreThan, MoreThanOrEqual, Not, Raw } from 'typeorm';
import { User } from "./entity/User";

const addUser = async () => {
  await User.create({
    email: faker.random.uuid() + faker.internet.email(),
    password: faker.internet.password(),
    age: faker.random.number({min: 17, max: 100}),
    name: faker.internet.userName(),
  }).save()
};

(async() => {
  try {
    const connection = await createConnection();

    const userCount = await User.count();
    console.log("User Count :" + userCount);
    if (userCount < 5) {
      for (let i = 1; i < 5; i++) {
        await addUser()
      }
    }

    // find
    let users = await User.find();
    console.log("users", users);

    users = await getManager().find(User);
    console.log("users", users);

    // select
    users = await User.find({select:["id", "name", "age"]})
    console.log("select", users);

    users = await getRepository(User).find();
    console.log("users", users);

    // where
    let where = await User.find({where: {id: users[0].id, name: users[0].name}});
    console.log("user", where);

    where = await User.find({id: users[0].id, name: users[0].name });
    console.log("user", where);

    // find one
    let user = await User.findOne(1);
    console.log("user", user);

    user = await User.findOne({where: { name: users[0].name}});
    console.log("user", user);

    user = await User.findOne({id: users[0].id, name: users[0].name});
    console.log("user", user);

    user = await User.findOne({ name: users[0].name })
    console.log("user", user); 

    // where and
    const whereAnd = await User.find({where: {
      age: users[0].age, name: users[0].name
    }});
    console.log("whereAnd", whereAnd);

    // where or
    const whereOr = await User.find({where: [
      {name: users[0].name},
      {name: users[1].name},
      {age: users[0].age},
    ]});
    console.log("whereOr", whereOr);
    
    // Order
    const order = await User.find({order: {
      name: "DESC", id: "ASC"
    }});
    console.log("order", order);

    // skip and take
    const skipTake = await User.find({skip: 2, take: 5});
    console.log("skipTake", skipTake);

    // not
    const not = await User.find({id: Not(1)});
    console.log("not", not);

    // more less
    const moreless = await User.find({
      where: [
        {id: LessThan(2)},
        {id: MoreThan(4)},
      ]
    });
    console.log("moreless", moreless);

    // more less equal
    const moreLessEqual = await User.find({
      where: [
        {id: LessThanOrEqual(2)},
        {id: MoreThanOrEqual(4)},
      ]
    })
    console.log("moreLessEqual", moreLessEqual);

    // Equal
    const equal = await User.find({
      name: Equal(users[1].name)
    });
    console.log("equal", equal);

    // Like
    const like = await User.find({
      name: Like(`%${users[1].name}%`)
    });
    console.log("like", like);

    // Between
    const between = await User.find({
      id: Between(2,4)
    });
    console.log("between", between);

    // In
    const inName = await User.find({
      id: In([1, 2, 4])
    });
    console.log("inName", inName);

    // IsNull
    const isNull = await User.find({
      name: IsNull()
    });
    console.log("isNull", isNull);

    const notNull = await User.find({
      name: Not(IsNull())
    });
    console.log("notNull", notNull);

    // raw
    const raw = await User.find({
      age: Raw(users[1].age + " + 4")
    });
    console.log("raw", raw);

    const now = await User.find({
      createdAt: Raw(alias => `${alias} < NOW()`),
      age: Raw('`User`.`age` < 50'),
    });
    console.log("now", now);

    let deletedAt = await User.find({
      deletedAt: Raw(alias => `${alias} < NOW()`)
    });
    console.log("now", deletedAt);

    deletedAt = await User.find({
      deletedAt: "deletedAt < NOW()"
    });
    console.log("now", deletedAt);

    const inSelect = await User.find({
      age: Raw('(SELECT `age` FROM `user` WHERE `id`=1)')
    });
    console.log("inSelect", inSelect);

    await connection.close();
  } catch(error) {
    console.log(error);
  }
})();
