import { createConnection } from "typeorm";

(async() => {
  try {
    const connection = await createConnection();
    const queryRunner = connection.createQueryRunner()
    await queryRunner.dropDatabase('test');
    await queryRunner.createDatabase('test');
    await connection.close();
  } catch (error) {
    console.log(error);
  }
})();