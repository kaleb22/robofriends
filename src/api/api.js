export const apiCall = (link) =>
  fetch(link).then(Response => Response.json());