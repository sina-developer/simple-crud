import axios from 'axios';

class BaseApi {
  constructor(params, onSuccess, onFailed) {
    this.params = params;
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
    this.method = 'get';
    this.url = '';
  }

  setMethod(method) {
    this.method = method;
  }

  async run() {
    try {
      let response = await axios[this.method](this.url);
      this.onSuccess(response);
    } catch (error) {
      this.onFailed(error);
    }
  }
}

export default BaseApi;
