const AlbumsPayloadSchema = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const AlbumsValidator = {
    validateAlbumPayload: (payload) => {
        const validationResult = AlbumsPayloadSchema.validate(payload);
        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
    },
};

module.exports = AlbumsValidator;