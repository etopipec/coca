import type { EventHandler, EventHandlerRequest } from 'h3';

export const defineWrappedResponseHandler = <T extends EventHandlerRequest, D> (
  handler: EventHandler<T, D>
): EventHandler<T, D> => 
  defineEventHandler<T>(async event => {
    try {
      console.log('Start request ...');
      const response = await handler(event);
      console.log('End request ...');
      return { response };
    } catch (err) {
      console.log(err);
      return { err };
    }
  })
