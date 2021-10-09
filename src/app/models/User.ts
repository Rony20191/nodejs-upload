import Sequelize, { Model } from 'sequelize';
import database from '../../database';

class User extends Model {
    public id!: number;
    public firstName!: string;
}
User.init({
    firstName: {
        type: Sequelize.STRING
    }
},{
   sequelize: database.connection,
})