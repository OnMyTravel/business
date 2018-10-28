class FacebookAccess {
  constructor({ userId, accessToken } = {}) {
    this.userId = userId;
    this.accessToken = accessToken;
  }
}

module.exports = FacebookAccess