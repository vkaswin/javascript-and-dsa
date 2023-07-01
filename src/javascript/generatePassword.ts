/*

Generate random password

*/

type IConfig = {
  includeUpperCase?: boolean;
  includeSpecialCharacter?: boolean;
  includeNumber?: boolean;
  charLength: number;
};

export const generatePassword = (config: IConfig) => {
  let { charLength, includeNumber, includeSpecialCharacter, includeUpperCase } =
    config;

  let chars = "abcdefghijklmnopqrstuvwxyz";

  if (includeNumber) chars += "0123456789";
  if (includeSpecialCharacter) chars += "!@#$%^&*";
  if (includeUpperCase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let password = "";

  for (let i = 0; i < charLength; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
};

console.log(
  generatePassword({
    charLength: 15,
    includeNumber: true,
    includeUpperCase: true,
    includeSpecialCharacter: true,
  })
);
