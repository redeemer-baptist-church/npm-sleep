module.exports = {
  // TODO: calling this as shown does NOT actually block the thread; figure out why
  //  .then(async () => await sleep(3000))
  sleep: function sleep(ms) {
    // inspired by https://stackoverflow.com/a/39914235/421313
    return new Promise(resolve => setTimeout(resolve, ms))
  },
}
