const prisma = require('../config/prsima');

class UserModel {
  async findUserByEmail(userMail) {
    return await prisma.user.findUnique({
      where: { userMail },
    });
  }

  async createUser(data) {
    return await prisma.user.create({
      data,
    });
  }
}

module.exports = new UserModel();
