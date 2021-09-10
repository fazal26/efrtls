export const getMatches = (data: Object) => {
  return null;
};

fetch("URL_GOES_HERE", {
  method: "post",
  headers: new Headers({
    Authorization: "Basic " + btoa("username:password"),
    "Content-Type": "application/x-www-form-urlencoded",
  }),
  body: "A=1&B=2",
});
