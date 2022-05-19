import cn from 'classnames';
import { FC } from 'react';
import {
  OrdersSearchbar,
  OrdersFiltersPanel,
} from 'modules/OrdersPage/components';

import { useAppSelector } from 'modules/OrdersPage/store';
import { getValueOrdersFilters } from 'modules/OrdersPage/store/selectors';
import { IFilters } from 'modules/OrdersPage/types';

import { useState } from 'react';

import styles from './OrdersFilters.module.css';

const xor = (arr: string[], item: string) =>
  arr.includes(item) ? arr.filter(i => i !== item) : arr.concat(item);

interface OrdersFiltersProps {
  className: string;
}

export const OrdersFilters: FC<OrdersFiltersProps> = ({ className }) => {
  const initialState: IFilters = {
    dateFrom: '',
    dateTo: '',
    sumFrom: '',
    sumTo: '',
    statusOrder: [],
  };

  const [filters, setFilters] = useState<IFilters>(initialState);

  const handleChangeCheckboxStatus: React.ChangeEventHandler<
    HTMLInputElement
  > = ({ target: { value } }) => {
    setFilters({
      ...filters,
      statusOrder: xor(filters.statusOrder, value),
    });
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleClear: React.MouseEventHandler<HTMLButtonElement> = ({
    currentTarget: { name },
  }) => {
    setFilters({
      ...filters,
      [name]: '',
    });
  };

  const handleClearAllFilters = () => {
    setFilters(initialState);
  };

  const { isVisibleFilters } = useAppSelector(getValueOrdersFilters);

  return (
    <div className={cn(styles._, className)}>
      <OrdersSearchbar onClearAllFilters={handleClearAllFilters} />
      {isVisibleFilters && (
        <OrdersFiltersPanel
          className={styles.blockFiltersPanel}
          onChange={handleChange}
          onClear={handleClear}
          filters={filters}
          onChangeStatus={handleChangeCheckboxStatus}
        />
      )}
    </div>
  );
};
