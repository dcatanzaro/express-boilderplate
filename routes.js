module.exports = (app) => {
    const UserService = require("./services/UserService");
    const UserServiceInstance = new UserService();

    const UserController = require("./controllers/UserController");
    const UserInstance = new UserController(UserServiceInstance);

    app.get("/", UserInstance.getUser);
};
