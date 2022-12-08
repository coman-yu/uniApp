const routerFuncs = ['navigateTo', 'redirectTo', 'switchTab'];

routerFuncs.forEach((item) => {
  uni.addInterceptor(item, {
    invoke(args) {
      console.log(args);
      return false;
    },
  });
});
