class FacebookApi {
  constructor({ FacebookClient } = {}) {
    this.facebookClient = FacebookClient;
  }

  login() {
    return this.facebookClient.login()
  }
}

export default FacebookApi