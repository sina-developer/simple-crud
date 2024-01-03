import BaseApi from './BaseAPI';

class UpdateItemApi extends BaseApi {
  constructor(id, data, onSuccess, onFailed) {
    super(data, onSuccess, onFailed);
    this.url = '/product/' + id;
    this.method = 'put';
  }
}

export default UpdateItemApi;
