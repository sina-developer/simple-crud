import BaseApi from './BaseAPI';

class AddItemApi extends BaseApi {
  constructor(data, onSuccess, onFailed) {
    super(data, onSuccess, onFailed);
    this.url = '/product';
    this.method = 'post';
  }
}

export default AddItemApi;
