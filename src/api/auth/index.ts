import { apiBaseURL } from 'api/constants';
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

export const decodeTokenWithJWK = async (token: string) => {
  const client = jwksClient({
    jwksUri: `${apiBaseURL}/.well-known/jwks.json`,
  });

  const getJWK = async (header: any, callback: any) => {
    return client.getSigningKey(
      header.kid,
      (err, key) =>
        new Promise((resolve, reject) => {
          if (err) {
            console.error(err);
            reject(err);
          }
          try {
            const signingKey = key.getPublicKey();
            resolve(callback(null, signingKey));
          } catch (e) {
            console.error('getPublicKey(): ', e);
          }
        }),
    );
  };

  const verifyJWT = async (token: string) =>
    new Promise((resolve, _) => {
      jwt.verify(token, getJWK, (err: any, decoded: any) => {
        if (err) {
          window.location.href = `${apiBaseURL}/oauth/kakao`;
        } else {
          resolve(decoded);
        }
      });
    });

  const res = await verifyJWT(token);
  return res;
};
