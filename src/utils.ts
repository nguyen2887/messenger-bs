export const getCorsOrigin = (port: number) => {
  return [
    `http://localhost:${port}`,
    new RegExp(`/^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):${port}$/`),
  ];
};
