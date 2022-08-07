const isNumRange = (query, result) => {
  if (query) {
    result();
  }
  return query;
};

function passOrNot(num, num2) {
  const operator = [
    {
      oper: num < 0 || num2 < 0 || num > 100 || num2 > 100,
      callback() {
        alert('Do not Jake');
      },
    },
    {
      oper: num < 40 || num2 < 40,
      callback() {
        console.log('fail');
      },
    },
    {
      oper: num + num2 < 120,
      callback() {
        console.log('nonepass');
      },
    },
    {
      oper: true,
      callback() {
        console.log('pass');
      },
    },
  ];
  operator.some((obj) => isNumRange(obj.oper, obj.callback));
}

passOrNot(73, -1);
