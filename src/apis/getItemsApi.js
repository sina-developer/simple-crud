import BaseApi from './BaseAPI';

class GetItemsApi extends BaseApi {
  constructor(onSuccess, onFailed) {
    super({}, onSuccess, onFailed);
    this.url = '/product';
  }
}

export default GetItemsApi;
