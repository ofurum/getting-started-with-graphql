const faker = require("faker");
// const { UserTC, UserSchema } = require("../model/user");


const resolver = function () {};
const{ UserTc, UserSchema } = require("../model/user");
resolver.fakeData = UserTc.addResolver({
  name: "user",
  type: UserTc,
  args: { record: UserTc.getInputType() },
  resolve: async ({ source, args }) => {
    let user = new UserSchema({
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      profileImage: faker.random.image(),
    });
    return await user.save();
  },
});

module.exports = resolver;
