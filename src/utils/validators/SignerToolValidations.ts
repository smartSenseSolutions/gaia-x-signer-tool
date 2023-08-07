import { body } from 'express-validator'
import Utils from '../common-functions'
import { AppConst } from '../constants'
import { logger } from '../logger'

class SignerToolValidation {
	GXLegalParticipant = [
		body('issuer').not().isEmpty().trim().escape(),
		body('verificationMethod').not().isEmpty().trim().escape(),
		body('privateKey').not().isEmpty().trim().escape(),
		body('vcs.legalParticipant').isObject(),
		body('vcs.legalRegistrationNumber').isObject(),
		body('vcs.gaiaXTermsAndConditions').isObject()
	]
	ServiceOffering = [
		body('privateKey').not().isEmpty().trim().escape(),
		body('issuer').not().isEmpty().trim().escape(),
		body('verificationMethod').not().isEmpty().trim().escape(),
		body('legalParticipantURL')
			.not()
			.isEmpty()
			.trim()
			.custom(async (value, { req }) => {
				if (!Utils.IsValidURL(value)) {
					logger.error(__filename, 'ServiceOfferingValidation', `❌ Invalid legal participant self description url format`, req.custom.uuid)
					throw new Error('Invalid legal participant self description url format')
				}
			}),
		body('vcs.serviceOffering').isObject()
	]
	Verify = [
		body('policies')
			.exists()
			.isArray()
			.custom((obj) => {
				if (obj.length == 0) {
					return false
				}
				for (const policy of obj) {
					if (!AppConst.VERIFY_LP_POLICIES.includes(policy)) {
						return false
					}
				}

				return true
			}),
		body('participantUrl').exists().isString().isURL()
	]
	CreateWebDID = [
		body('domain').not().isEmpty().trim(),
		body('services')
			.isArray()
			.custom(async (services) => {
				if (services) {
					for (let index = 0; index < services.length; index++) {
						await body(`services[${index}].type`).not().isEmpty().trim().escape()
						await body(`services[${index}].serviceEndpoint`).isURL()
					}
				} else {
					return true
				}
			})
			.optional()
	]
	TrustIndex = [body('participantSD').not().isEmpty().trim(), body('serviceOfferingSD').not().isEmpty().trim()]
}
export default new SignerToolValidation()
