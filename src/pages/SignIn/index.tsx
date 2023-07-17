import * as S from './styles';
import { ErrorLabel } from '@/components/ErrorLabel';
import { Input } from '@/components/Input';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { SingInProps } from './interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/contexts/auth';
import { useTheme } from 'styled-components';
import { Spinner } from 'phosphor-react';

export function SignIn() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { singIn, loading, error } = useAuth();
  const singInSchema = yup.object({
    email: yup
      .string()
      .required(t('singIn.errors.emailRequired') || '')
      .email(t('singIn.errors.emailError') || ''),
    password: yup.string().required(t('singIn.errors.passwordRequired') || ''),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingInProps>({
    mode: 'onChange',
    resolver: yupResolver(singInSchema),
  });

  const onSubmit = useCallback(
    async (data: SingInProps) => {
      await singIn(data);
    },
    [singIn],
  );

  return (
    <S.Container>
      <S.Content>
        <S.Logo src="/logo.png" alt="Faça seu login" />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.GeneralError>
            {!loading && !!error && (
              <ErrorLabel error={t(`login.error.${error}`)} type="large" />
            )}
          </S.GeneralError>
          <Input
            placeholder={t('singIn.input.placeholderEmail') || ''}
            error={
              errors.email && typeof errors.email.message === 'string'
                ? errors.email.message
                : ''
            }
            icon="/email.png"
            {...register('email')}
          />
          <Input
            placeholder={t('singIn.input.placeholderPassword') || ''}
            error={
              errors.password && typeof errors.password.message === 'string'
                ? errors.password.message
                : ''
            }
            icon="/lock.png"
            type="password"
            {...register('password')}
          />
          <S.ContainerForgot>
            <a
              href={import.meta.env.VITE_URL_FORGOT_PASSWORD}
              target="_blank"
              rel="noreferrer"
            >
              {t('singIn.forgot')}
            </a>
          </S.ContainerForgot>
          <S.Btn disabled={loading}>
            <img src="/singin.png" alt={t('singIn.btnSubmit') || ''} />
            <S.ContainerSpinner>
              {loading ? (
                <Spinner color={colors.white} size={40} className="spinner" />
              ) : (
                <span>{t('singIn.btnSubmit') || ''}</span>
              )}
            </S.ContainerSpinner>
          </S.Btn>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
