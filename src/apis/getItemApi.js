import BaseApi from './BaseAPI';

class GetItemApi extends BaseApi {
  constructor(id, onSuccess, onFailed) {
    super({}, onSuccess, onFailed);
    this.url = '/product/' + id;
  }
}

export default GetItemApi;
