module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': 'mobile/ts/components',
          '@api': 'mobile/ts/api',
          '@typeDef': 'mobile/ts/typeDef.ts',
          '@assets': 'mobile/assets',
        },
      },
    ],
  ],
};
