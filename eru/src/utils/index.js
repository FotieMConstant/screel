// all global functions
// function to truncate text
export const truncateText = (payload, size) => {
  return payload.length > size ? payload.slice(0, size - 1) + "…" : payload;
};
