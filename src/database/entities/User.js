export default function(sequelize, DataTypes) {
    return sequelize.define("User", {
        id: DataTypes.UUID,

        googleId: DataTypes.STRING
    });
}
