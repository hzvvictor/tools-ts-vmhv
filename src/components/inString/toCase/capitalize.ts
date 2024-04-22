const capitalize = (string: string) => {
  if (!string || string?.length < 2) return string;

  const search = /((\d*[A-Z]+\d*)?[a-z\d]+)|[A-Z]+/g;
  const newString = string.replace(search, (match, ...args) => {
     //console.log({ match, args });
    if (match.length > 1) return get(match);
    return get(match);
  });
  return newString;

};
/* const arr = ['u ', 'test ArrFasd_ASD', 'test arr', 'test-arr', 'test_arr', 'cat flag', 'cat_flag', 'catFlag']
arr.forEach((str) => { console.log({ str: capitalize(str) }) }); */
//console.log(capitalize('CatPermission'));
export default capitalize;

function get(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
