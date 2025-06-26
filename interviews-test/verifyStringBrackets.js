function verifyString(str) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0) {
        return false; // if the return is zero that means you're closing something without being opened.
      }

      // verify if the top of stack match with the char with is opening
      if (stack.pop() !== map[char]) {
        console.log("entrou aqui");
        return false;
      }
    }
  }

  // return true if the stack is empty
  return stack.length === 0;
}

console.log("() [] {}:", verifyString("() [] {}")); // Saída esperada: true
console.log("(()[]{}] :", verifyString("(()[]{}]")); // Saída esperada: false
console.log("((({}))) :", verifyString("((({})))")); // Saída esperada: true
console.log("{[()]}   :", verifyString("{[()]}")); // Saída esperada: true
console.log("([)]    :", verifyString("([)]")); // Saída esperada: false
console.log("        :", verifyString("")); // Saída esperada: true (string vazia é válida)
console.log("{        :", verifyString("{"));
