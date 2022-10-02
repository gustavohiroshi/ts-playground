const Guard = {
  isNullable: (value: unknown) => {
    if (value == null || value == undefined) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(Guard.isNullable(null));
