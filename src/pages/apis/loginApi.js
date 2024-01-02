import BaseApi from './BaseAPI';

class LoginApi extends BaseApi {
  constructor(...args) {
    super(...args);
    this.url = '/User/1';
  }
}

export default LoginApi;
