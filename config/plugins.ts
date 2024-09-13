export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: `https://${env('DEFAULT_STORAGE_CUSTOM_DOMAIN')}`,
        rootPath: '',
        s3Options: {
          credentials: {
            accessKeyId: env('DEFAULT_STORAGE_ACCESS_KEY_ID'),
            secretAccessKey: env('DEFAULT_STORAGE_SECRET_ACCESS_KEY'),
          },
          region: env('DEFAULT_STORAGE_REGION'),
          params: {
            Bucket: env('DEFAULT_STORAGE_BUCKET'),
          },
        },
      },
    },
  },
});
