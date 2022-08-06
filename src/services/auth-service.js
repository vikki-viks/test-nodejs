const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ApiError = require("../error/ApiError");

const generateJwt = (uid) => {
  const expiresIn = process.env.EXPIRES_IN;

  return {
    expiresIn,
    token: jwt.sign({ uid }, process.env.SECRET_KEY, {
      expiresIn,
    }),
  };
};
class AuthService {
  async register({ email, password, nickname }) {
    const candidate = await userRepo.findByEmail(email);

    if (candidate) {
      throw ApiError.badRequest("Пользователь с таким email уже существует");
    }

    if (!email || !password || !nickname) {
      throw ApiError.badRequest("Неверный email или пароль");
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const user = await userRepo.create({
      email,
      password: hashPassword,
      nickname,
    });

    return generateJwt(user.uid);
  }

  async login({ email, password }) {
    const user = await userRepo.findByEmail(email);

    if (!user) {
      throw ApiError.internal("Пользователь не найден");
    }

    const comparePassword = bcrypt.compareSync(password, user.password);

    if (!comparePassword) {
      throw ApiError.internal("Указан неверный пароль");
    }

    return generateJwt(user.id);
  }
}

module.exports = new AuthService();
