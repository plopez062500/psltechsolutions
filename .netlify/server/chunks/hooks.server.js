import "./index.js";
const handle = async function({ resolve, event }) {
  const response = await resolve(event);
  return response;
};
export {
  handle
};
