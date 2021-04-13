const { UserTc } = require("../model/user");
require("../mutation/user.mutation");

const UserQuery = {
  userById: UserTc.getResolver("findById"),
  userByIds: UserTc.getResolver("findByIds"),
  userOne: UserTc.getResolver("findOne"),
  userMany: UserTc.getResolver("findMany"),
  userCount: UserTc.getResolver("count"),
  userConnection: UserTc.getResolver("connection"),
  userPagination: UserTc.getResolver("pagination"),
};

const UserMutation = {
  userCreateOne: UserTc.getResolver("createOne"),
  userCreateMany: UserTc.getResolver("createMany"),
  userUpdateById: UserTc.getResolver("updateById"),
  userUpdateOne: UserTc.getResolver("updateOne"),
  userUpdateMany: UserTc.getResolver("updateMany"),
  userRemoveById: UserTc.getResolver("removeById"),
  userRemoveOne: UserTc.getResolver("removeOne"),
  userRemoveMany: UserTc.getResolver("removeMany"),
  fakeData: UserTc.getResolver("user"),
};

module.exports = { UserQuery, UserMutation };