import { useForm } from 'react-hook-form';
import GlobalStyle from '../../App.CreateGlobalStyle';
import * as S from './AuthorizationLoginPage.Style';
import { postTodosUserLoginUp } from '../../api';
import { useState } from 'react';
import { useUserLoginLogout } from '../../components/Usercontext/Usercontext';
import { useNavigate } from 'react-router-dom';


export function AuthorizationLoginPage() {

  const [error, setError] = useState(null);

  const { changingUserInformation } = useUserLoginLogout();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    postTodosUserLoginUp({
      email: email,
      password: password
    })
      .then((response) => {
        console.log(response);

        localStorage.setItem('user', response.username);
        console.log(localStorage.getItem('user'))
        navigate('/MainPage');
      }).catch((error) => {
        console.log(error)
        setError(error.message);
      })
      ;
  }

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.ContainerEnter>
          <S.ModalBlock>
            <S.ModalFormLogin action="#" onSubmit={handleSubmit(onSubmit)}>
              <a href="../">
                <S.ModalLogo>
                  <S.Img src="../img/logo_modal.png" alt="logo" />
                </S.ModalLogo>
              </a>
              <S.ModalInput
                type="text"
                placeholder="Почта"
                value={email}
                {...register('login', {
                  required: '* Поле обязательно к заполнению'
                })}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.FillInTheField>
                {errors.login && <p>{errors.login.message || 'Error!'}</p>}
              </S.FillInTheField>

              <S.ModalInput
                type="password"
                placeholder="Пароль"
                value={password}
                {...register('password', {
                  required: '* Поле обязательно к заполнению'
                }
                )}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.FillInTheField>
                {errors.password && <p>{errors.password.message || 'Error!'}</p>}
              </S.FillInTheField>

              {error && <S.Error>{error}</S.Error>}

              <S.ModalInputEnter type="submit" onClick={changingUserInformation}
                value={'Войти'}
              />
              <S.ModalBtnSignup>
                <S.AModalBtnSignup to="/RegistrationPage">Зарегистрироваться</S.AModalBtnSignup>
              </S.ModalBtnSignup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerEnter>
      </S.Wrapper>
    </>
  );
}
