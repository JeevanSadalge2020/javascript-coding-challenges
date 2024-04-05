var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  if (check_strings(s, t)) return check_strings(t, s);
  return check_strings(s, t);

  function check_strings(str1, str2) {
    let i = 0;
    let new_map = new Map();
    while (i < t.length) {
      if (!new_map.has(str1[i])) {
        // If our map do not have a CharacterData, then add it to the map
        new_map.set(str1[i], str2[i]);
      } else {
        // Check if the current character is equal to the character mapped previously
        if (str2[i] !== new_map.get(str1[i])) {
          return false;
        }
      }
      i++;
    }
    return true;
  }
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("egg", "adds"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));
console.log(isIsomorphic("library", "privacy"));
