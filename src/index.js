'use strict';

export default function throwIf(err) {
  if (err === undefined)
    return;

  if (err instanceof Error)
    throw err;
  else if (typeof err === 'string')
    throw new Error(err);
  else if (err.toString() === '[object Object]')
    throw new Error(JSON.stringify(err));
  else if (Array.isArray(err))
    throw new Error(err.toString());
}
