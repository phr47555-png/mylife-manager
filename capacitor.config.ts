import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mylifemanager.app',
  appName: 'MyLife Manager',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    // Android specific options
  },
};

export default config;
