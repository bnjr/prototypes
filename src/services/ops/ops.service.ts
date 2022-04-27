import {Batch} from '../../models/local'
import {ApiService} from '../api/api.service'
import {OPSServiceResponse} from './ops-service.response'
export interface OPSService extends ApiService {
  createBatch(batch: Batch): Promise<OPSServiceResponse<Batch, OPSService>>
  updateBatch(batch: Batch): Promise<OPSServiceResponse<Batch, OPSService>>
}
