import cn from 'classnames';
import { FC } from 'react';
import { ReactComponent as IconXLarge } from 'common/icons/x-large.svg';
import { useAppSelector, useAppDispatch } from 'modules/OrdersPage/store';
import { getShowOrderForm } from 'modules/OrdersPage/store/selectors';
import { closeOrderForm } from 'modules/OrdersPage/store';

import styles from './OrderForm.module.css';

interface OrderFormProps {
  show: boolean;
}

export const OrderForm: FC<OrderFormProps> = ({ show }) => {
  const handleClick = () => {
    dispatch(closeOrderForm());
  };
  const classOrderForm = cn(styles._, {
    [styles.show]: show,
  });

  const classOverlay = cn({
    [styles.overlay]: show,
  });
  const dispatch = useAppDispatch();
  const { num } = useAppSelector(getShowOrderForm);
  return (
    <div className={classOverlay}>
      <div className={classOrderForm}>
        <div className={styles.header}>
          Заявка #{num}
          <button className={styles.btnClear} onClick={handleClick}>
            <IconXLarge className={styles.btnClearIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};
