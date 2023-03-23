function palindrome(str) {
  if (str.length % 2 == 0) {
    for (i = 0; i < str.length / 2; i++) {
      if (str.charAt(i) != str.charAt(str.length - i - 1)) {
        console.log("它不是回文");
        return;
      }
    }
    console.log("它是回文");
  } else {
    for (i = 0; i < (str.length - 1) / 2; i++) {
      if (str.charAt(i) != str.charAt(str.length - i - 1)) {
        console.log("它不是回文");
        return;
      }
    }
    console.log("它是回文");
  }
}

palindrome("hello");
palindrome("hellolleh");
palindrome("heyyeh");
palindrome("hello olleh");
palindrome("hello lleh");
