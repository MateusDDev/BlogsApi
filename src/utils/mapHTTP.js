const messagesHTTP = {
  SUCCESS: 'SUCCESS',
  CONFLICT: 'CONFLICT',
  CREATED: 'CREATED',
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND',
};
  
const httpMap = {
  [messagesHTTP.SUCCESS]: 200,
  [messagesHTTP.CONFLICT]: 409,
  [messagesHTTP.CREATED]: 201,
  [messagesHTTP.BAD_REQUEST]: 400,
  [messagesHTTP.UNAUTHORIZED]: 401,
  [messagesHTTP.NOT_FOUND]: 404,
};
  
const mapStatusHTTP = (status) => httpMap[status] || 500;
  
module.exports = {
  messagesHTTP,
  mapStatusHTTP,
};