import BaseApi from './BaseAPI';

class DeleteItemApi extends BaseApi {
  constructor(id, onSuccess, onFailed) {
    super({}, onSuccess, onFailed);
    this.url = '/product/' + id;
    this.method = 'delete';
  }
}

export default DeleteItemApi;
