const isMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    isMac,
    isDev
};