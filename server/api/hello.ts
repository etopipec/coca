import { defineWrappedResponseHandler } from "../utils/handler";

export default defineWrappedResponseHandler((event) => {
  return {
    hello: 'world',
  }
});
