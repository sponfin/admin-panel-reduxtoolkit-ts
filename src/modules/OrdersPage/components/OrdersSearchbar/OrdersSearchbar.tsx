import React, { FC } from 'react';
import cn from 'classnames';
import { OrdersLoad } from 'modules/OrdersPage/components';
import { Button, Input } from 'common/components';
import { ReactComponent as IconSearch } from 'common/icons/search.svg';
import { ReactComponent as IconFilter } from 'common/icons/filter.svg';
import { useAppSelector, useAppDispatch } from 'modules/OrdersPage/store';
import {
  getValueOrdersFilters,
  getOrders,
} from 'modules/OrdersPage/store/selectors';
import {
  setValueOrdersSearch,
  clearValueOrdersSearch,
  toggleFilters,
  clearAllValueOrdersFilters,
} from 'modules/OrdersPage/store';

import { setActivePage } from 'modules/OrdersPage/store';

import styles from './OrdersSearchbar.module.css';

interface OrdersSearchbarProps {
  className?: string;
  children?: React.ReactNode;
  theme?: string;
  onClearAllFilters?: () => void;
  onChange?: () => void;
  onClear?: () => void;
  onChangeStatus?: () => void;
}

export const OrdersSearchbar: FC<OrdersSearchbarProps> = ({
  className,
  children,
  theme,
  onClearAllFilters,

  ...props
}) => {
  const dispatch = useAppDispatch();
  const { search, isVisibleFilters } = useAppSelector(getValueOrdersFilters);
  const { orders } = useAppSelector(getOrders);

  const handleChangeInputSerach: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    dispatch(setValueOrdersSearch(value));
    dispatch(setActivePage(1));
  };

  // const handleClear: React.ChangeEventHandler<HTMLInputElement> = ({
  //   currentTarget: { name },
  // }) => {
  //   dispatch(clearValueOrdersSearch({ name }));
  // };

  const handleClear = () => {
    dispatch(clearValueOrdersSearch());
  };

  const handleToggleFilters = () => {
    dispatch(toggleFilters());
  };

  const hanleClearAll = () => {
    dispatch(clearAllValueOrdersFilters());
    dispatch(setActivePage(1));
    // onClearAllFilters();
  };

  isVisibleFilters ? (theme = 'main') : (theme = 'blue');

  return (
    <div className={cn(styles._, className)} {...props}>
      <Input
        className={styles.searchbarInput}
        placeholder="Номер заказа или ФИО"
        leftIcon={IconSearch}
        onChange={() => handleChangeInputSerach}
        onClear={handleClear}
        name="search"
        value={search}
      />
      <Button
        className={styles.searchbarButtonFilter}
        icon={IconFilter}
        theme={theme}
        size="large"
        onClick={handleToggleFilters}
      >
        Фильтры
      </Button>
      {/* TODO Сделать сбор фильтров  */}
      <Button theme="blue" size="large" onClick={hanleClearAll}>
        Сбросить фильтры
      </Button>
      {orders.length === 0 && <OrdersLoad />}
      {children}
    </div>
  );
};
