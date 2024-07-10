import npm from '../../package.json';

export const environment = {
  production: true,
  type: 'production',
  encryptedKey: process.env.ENCRYPTED_KEY,
  version: npm.version,
  preferredCountries: ['us', 'in'],
  logo: '/assets/images/logo.svg',
  title: 'Vc Dynamic Widget',
  SUPABASE: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY
  }
};
