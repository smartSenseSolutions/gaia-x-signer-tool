import { Router } from 'express'
import STController from './SignerToolController'
import SignerToolValidations from '../../../utils/validators/SignerToolValidations'
import { checkResults } from '../../../utils/validators/commonValidation'
import { ROUTES } from '../../../utils/constants'
const router: Router = Router()

router.post(ROUTES.V1_APIS.LEGAL_PARTICIPANT, SignerToolValidations.GXLegalParticipant, checkResults, STController.GXLegalParticipant)
router.post(ROUTES.V1_APIS.SERVICE_OFFERING, SignerToolValidations.ServiceOffering, checkResults, STController.ServiceOffering)
router.post(ROUTES.V1_APIS.VERIFY, SignerToolValidations.Verify, checkResults, STController.Verify)
router.post(ROUTES.V1_APIS.CREATE_WEB_DID, SignerToolValidations.CreateWebDID, checkResults, STController.CreateWebDID)
router.post(ROUTES.V1_APIS.GET_TRUST_INDEX, SignerToolValidations.TrustIndex, checkResults, STController.GetTrustIndex)

export default router
