const maskEmail = (email: string): string => {
  let [text, domain] = email.split("@");
  return `${text.slice(0, 2).padEnd(text.length, "*")}@${domain}`;
};

export {};
