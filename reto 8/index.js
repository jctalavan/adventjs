let part = "uwu";

function checkPart(part) {
  const isPalindromo = (str) => {
    return str === str.split("").reverse().join("");
  };

  if (isPalindromo(part)) return true;

  return part.split("").some((element, partIndex) => {
    let partialPart = part
      .split("")
      .filter((element, index) => index != partIndex)
      .join("");

    if (isPalindromo(partialPart)) return true;
  });
}

console.log(checkPart(part));
