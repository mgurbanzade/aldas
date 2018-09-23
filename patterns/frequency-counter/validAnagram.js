const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  if (str1 === str2) return true;

  let str1chars = {};
  let str2chars = {};

  for (let i of str1) {
    str1chars[i] = (str1chars[i] || 0) + 1;
  }

  for (let i of str2) {
    str2chars[i] = (str2chars[i] || 0) + 1;
  }

  for (let i in str1chars) {
    if (str1chars[i] !== str2chars[i]) return false;
  }

  return true;
};

validAnagram('texttwisttime', 'timetwisttext');

