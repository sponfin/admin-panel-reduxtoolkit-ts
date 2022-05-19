import cn from 'classnames';
import { FC } from 'react';
import { Input, Dropdown, ControlLabel, Checkbox } from 'common/components';
import { IFilters } from 'modules/OrdersPage/types';

import { useState } from 'react';

import styles from './DropdownStatus.module.css';
interface DropdownStatusProps {
  className: string;
  valueStatus: string[];
  onChangeStatus: () => void;
  filters: IFilters;
  name: string;
}

export const DropdownStatus: FC<DropdownStatusProps> = ({
  className,
  valueStatus,
  onChangeStatus,
  name,

  filters,
}) => {
  const [isDroped, setDroped] = useState(false);

  const handleDropClick = () => {
    setDroped(!isDroped);
  };

  return (
    <div className={cn(styles._, className)}>
      <Input
        className={styles.input}
        name="statusOrder"
        value={valueStatus}
        onDropClick={handleDropClick}
        isDroped={isDroped}
        placeholder="Выберите статус заказа"
        onChange={() => {}}
      >
        {isDroped && (
          <Dropdown className={styles.dropdown}>
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Новый"
                  checked={filters.statusOrder.includes('Новый')}
                />
              }
              label="Новый"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Расчет"
                  checked={filters.statusOrder.includes('Расчет')}
                />
              }
              label="Расчет"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Подтержден"
                  checked={filters.statusOrder.includes('Подтержден')}
                />
              }
              label="Подтвержден"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Отложен"
                  checked={filters.statusOrder.includes('Отложен')}
                />
              }
              label="Отложен"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Выполнен"
                  checked={filters.statusOrder.includes('Выполнен')}
                />
              }
              label="Выполнен"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Отменен"
                  checked={filters.statusOrder.includes('Отменен')}
                />
              }
              label="Отменен"
            />
          </Dropdown>
        )}
      </Input>
    </div>
  );
};
