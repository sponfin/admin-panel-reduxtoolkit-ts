export interface IOrders {
  num: string;
  date: string;
  status: string;
  position: number | string;
  sum: number | string;
  fio: string;
}

export interface IFilters {
  dateFrom: string;
  dateTo: string;
  sumFrom: string;
  sumTo: string;
  statusOrder: string[];
}

export interface IOrdersFormShow {
  num: string;
  isShow: boolean;
}
