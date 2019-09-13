import { createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (_data, [_, __, { req }]) => {
    return req.user;
  },
);
