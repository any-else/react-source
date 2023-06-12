export const fakeAuth = () =>
  new Promise((resolve: any) => {
    setTimeout(() => resolve("2342f2f1d131rf12"), 250);
  });
