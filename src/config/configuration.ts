import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  MONGO_DB_HOST: Joi.string().required(),
  MONGO_DB_PORT: Joi.number().required(),
  MONGO_DB_USERNAME: Joi.string().required(),
  MONGO_DB_PASSWORD: Joi.string().required(),
});
