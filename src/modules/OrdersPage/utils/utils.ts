export const dateStringToMilliseconds = (date: string) => {
  if (date !== undefined) {
    const year = date.substr(6, 4);
    const month = date.substr(3, 2);
    const day = date.substr(0, 2);
    const dateParse = year + '-' + month + '-' + day;
    return Date.parse(dateParse);
  } else return 0;
};

export const inSearch = (num: string, fio: string, search: string) => {
  if (num.includes(search) || fio.toLowerCase().includes(search)) return true;
};

export const inRange = (
  value: string | number,
  from: string,
  to: string,
  type: string
) => {
  switch (type) {
    case 'DATE':
      if (
        value !== '' &&
        from !== '' &&
        to === '' &&
        typeof value === 'string'
      ) {
        if (dateStringToMilliseconds(value) >= dateStringToMilliseconds(from))
          return true;
        else return false;
      }
      if (
        value !== '' &&
        from === '' &&
        to !== '' &&
        typeof value === 'string'
      ) {
        if (dateStringToMilliseconds(value) <= dateStringToMilliseconds(to))
          return true;
        else return false;
      }
      if (
        value !== '' &&
        from !== '' &&
        to !== '' &&
        typeof value === 'string'
      ) {
        if (
          dateStringToMilliseconds(value) >= dateStringToMilliseconds(from) &&
          dateStringToMilliseconds(value) <= dateStringToMilliseconds(to)
        )
          return true;
        else return false;
      }
      if (from === '' && to === '') {
        return true;
      }
      break;
    case 'SUM':
      if (value !== '' && from !== '' && to === '') {
        if (value >= from) return true;
        else return false;
      }
      if (value !== '' && from === '' && to !== '') {
        if (value <= to) return true;
        else return false;
      }
      if (value !== '' && from !== '' && to !== '') {
        if (value >= from && value <= to) return true;
        else return false;
      }
      if (from === '' && to === '') {
        return true;
      }
      break;
    default:
      return true;
  }
};

export const inStatus = (stausOrder: string, statusArr: string[]) => {
  if (statusArr.includes(stausOrder) === true) return true;
  else if (!statusArr.length) return true;
  else return false;
};

export const sortDesc = (a: any, b: any) => (b > a ? 1 : -1);
export const sortAsce = (a: any, b: any) => (a > b ? 1 : -1);

export const sorting = (keySort: any, typeSort: any) => (a: any, b: any) => {
  let A = a[keySort];
  let B = b[keySort];

  if (keySort === 'num') {
    A = Number(a[keySort]);
    B = Number(b[keySort]);
  }

  if (keySort === 'date') {
    A = dateStringToMilliseconds(a[keySort]);
    B = dateStringToMilliseconds(b[keySort]);
  }
  if (typeSort === 'desc') return sortDesc(A, B);
  else return sortAsce(A, B);
};
