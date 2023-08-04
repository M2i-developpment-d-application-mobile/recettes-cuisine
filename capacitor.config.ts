import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'recettes-cuisine',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
