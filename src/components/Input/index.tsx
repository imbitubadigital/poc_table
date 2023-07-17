import { forwardRef, ForwardRefRenderFunction } from 'react';
import { ErrorLabel } from '../ErrorLabel';
import { InputProps } from './interfaces';
import * as S from './styles';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, icon = '', ...rest }: InputProps,
  ref,
) => {
  return (
    <S.Container>
      <S.ContainerInput>
        <input type="text" ref={ref} {...rest} />
        {!!icon && (
          <S.ContainerIcon>
            <img src={icon} alt="Icon" />
          </S.ContainerIcon>
        )}
      </S.ContainerInput>
      <S.ContainerError>
        {!!error && <ErrorLabel error={error} />}
      </S.ContainerError>
    </S.Container>
  );
};

export const Input = forwardRef(InputBase);
