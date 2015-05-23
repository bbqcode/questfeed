export default function(sequelize, DataTypes) {
    return sequelize.define("Quest", {
        id: DataTypes.UUID,

        name: DataTypes.STRING,
        description: DataTypes.STRING,
        experience: DataTypes.INTEGER,

        latitude: DataTypes.FLOAT,
        longitude: DataTypes.FLOAT,

        isPublic: DataTypes.BOOLEAN
    });
}
