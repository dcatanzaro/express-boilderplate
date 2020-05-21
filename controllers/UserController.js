class UserControllers {
    constructor(userService) {
        this.userService = userService;
    }

    getUser = (req, res) => {
        const user = this.userService.getUser();

        return res.json({ info: user });
    };
}

module.exports = UserControllers;
