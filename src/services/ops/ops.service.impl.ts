import {OPSService} from './ops.service'
import {Batch} from '../../models/local'
import {OPSServiceResponse} from './ops-service.response'
import {AccountServiceImpl} from '../account/account.service.impl'
import {ServiceTypes} from '../api/api.service'

export class OPSServiceImpl extends AccountServiceImpl implements OPSService {
  constructor() {
    super(ServiceTypes.OPS_SERVICE)
  }
  createBatch(): Promise<OPSServiceResponse<Batch, OPSService>> {
    throw new Error('Method not implemented.')
  }
  updateBatch(): Promise<OPSServiceResponse<Batch, OPSService>> {
    throw new Error('Method not implemented.')
  }
}
