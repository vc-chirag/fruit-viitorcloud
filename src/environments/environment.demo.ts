import npm from '../../package.json';

export const environment = {
  production: true,
  type: 'uat',
  encryptedKey: process.env.ENCRYPTED_KEY,
  version: npm.version,
  preferredCountries: ['us', 'in'],
  logo: '/assets/images/demo-logo.svg',
  title: 'Vc Dynamic Widget'
};
