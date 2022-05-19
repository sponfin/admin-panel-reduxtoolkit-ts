import cn from 'classnames';

import { ReactComponent as IconXLarge } from 'common/icons/x-large.svg';
import { ReactComponent as IconLocked } from 'common/icons/locked.svg';
import { ReactComponent as IconDrop } from 'common/icons/v_arrow.svg';

import styles from './Input.module.css';
import { FC } from 'react';

interface InputProps {
  isError?: boolean;
  disabled?: boolean;
  placeholder: string;
  type?: string;
  value: string | string[];
  leftIcon?: any;
  className: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDropClick?: () => void;
  name: string;
  classTitle?: string;
  children?: React.ReactNode;
  isDroped?: boolean;
}

export const Input: FC<InputProps> = ({
  isError = false,

  disabled = false,
  placeholder = 'Введите',
  type = 'text',
  value,
  leftIcon: LeftIcon,

  className,
  onChange = () => {},
  onClear,
  onDropClick,
  name,
  classTitle,
  children,
  isDroped = false,
  ...props
}) => {
  const classWrapperInputDate = cn(styles._, className);

  const classThemeInput = cn(styles.input, {
    [styles.inputLeftIcon]: LeftIcon,
    [styles.input_error]: isError,
    [styles.input_locked]: disabled,
  });

  const classBtnDropIcon = cn(styles.btnDropIcon, {
    [styles.btnDropIconRotate]: isDroped,
  });

  return (
    <div className={classWrapperInputDate}>
      <div className={styles.wrapper}>
        {children}
        {LeftIcon && <LeftIcon className={styles.iconLeft} />}

        <input
          value={value}
          className={cn(classThemeInput, classTitle)}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          onChange={onChange}
          name={name}
          {...props}
        />

        {value && name !== 'statusOrder' && (
          <button className={styles.btnClear} name={name} onClick={onClear}>
            <IconXLarge className={styles.btnClearIcon} />
          </button>
        )}

        {name === 'statusOrder' && (
          <button className={styles.btnDrop} name={name} onClick={onDropClick}>
            <IconDrop className={classBtnDropIcon} />
          </button>
        )}

        {disabled && <IconLocked className={styles.iconLocked} />}
      </div>
    </div>
  );
};
