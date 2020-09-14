/* eslint-disable prettier/prettier */
module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFiles: [
        'C:/projetos/react native/southsystembooks/jest/setup.js',
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'C:/projetos/react native/southsystembooks/__mocks__/fileMock.js',
    },
};
