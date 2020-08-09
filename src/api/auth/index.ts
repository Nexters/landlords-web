import { apiBaseURL } from 'api/constants';
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

export const decodeTokenWithJWK = async (token: string) => {
  const client = jwksClient({
    jwksUri: `${apiBaseURL}/.well-known/jwks.json`,
  });

  const getJWK = async (header: any, callback: any) => {
    return client.getSigningKey(header.kid, (err, key) => new Promise((resolve, reject) => {
      if (err) {
        reject(err);
      }
      try {
        const signingKey = key.getPublicKey();
        resolve(callback(null, signingKey));
      } catch(e) {
        throw(e);
      }
    }));
  };

  const verifyJWT = async (token: string) => new Promise((resolve, reject) => {
    try {
      jwt.verify(token, getJWK, (err: any, decoded: any) => err ? reject(err) : resolve(decoded));
    } catch(e) {
    // TODO: 에러 발생시 사용자 alert
      console.log(e);
    }
  });

  const res = await verifyJWT(token);
  return res;
};
