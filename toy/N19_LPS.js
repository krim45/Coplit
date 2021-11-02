const LPS = function (str) {
  let save = '';
  let prefix = '';
  let suffix = '';

  for (let i = 0; i < str.length / 2; i++) {
    if (i !== str.length - 1 - i) {
      prefix += str[i];
      suffix = str[str.length - 1 - i] + suffix;
      if (prefix === suffix) {
        save = prefix;
      }
    }
  }

  return save.length
};
