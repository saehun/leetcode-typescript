const Solution = (S: string): string => {
  // remove non-digit character and make into array
  const digits = S.replace(/[^\d]/g, "").split("");

  const { group } = digits.reduce((acc, digit, i) => {
    acc.part += digit;
    if (i === digits.length - 1 || acc.part.length === 3) {
      acc.group.push(acc.part);
      acc.part = "";
    }
    return acc;
  }, { group: [], part: "" });

  const last = group[group.length - 1];
  // if one digit left at last
  if (last.length === 1) {
    const secondLast = group[group.length - 2];
    // split last and second last digits into 2 by 2
    group[group.length - 1] = secondLast[2] + last;
    group[group.length - 2] = secondLast.slice(0, 2);
  }

  return group.join("-");
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
