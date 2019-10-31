import { createApp } from './app'

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();

    context.meta = app.$meta();

    router.push(context.url);

    router.onReady(() => {
      context.rendered = () => {
        context.state = store.state;
      };

      resolve(app);
    }, reject);
  })
}
