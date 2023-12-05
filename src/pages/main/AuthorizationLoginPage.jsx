import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../../App.CreateGlobalStyle';
import { UserContext } from '../../Usercontext/Usercontext';
import { setAuth } from '../../redux/music/authSlice';
import { postTodosUserLoginUp } from '../../api';
import { useGetTokenMutation } from '../../redux/music/serviceQuery';
import * as S from './AuthorizationLoginPage.Style';

export function AuthorizationLoginPage() {

  const [getToken] = useGetTokenMutation()
  const { changingUserData } = useContext(UserContext)
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [offButton, setOffButton] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit
  } = useForm({
    mode: "onBlur"
  });

  const responseToken = async () => {
    await getToken({ email, password })
      .unwrap()
      .then((token) => {
        dispatch(
          setAuth({
            access: token.access,
            refresh: token.refresh,
            user: JSON.parse(localStorage.getItem("user")),
          })
        );
      })
      .catch((error) => {
        return error;
      }).finally(() => {
        setOffButton(false)
      });
  };

  const onSubmit = () => {
    setOffButton(true)
    postTodosUserLoginUp({
      email: email,
      password: password
    })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response));
        changingUserData(JSON.parse(localStorage.getItem('user')))
        navigate('/');
      }).catch((error) => {
        setError(error.message);
      }).finally(() => {
        setOffButton(false)
      });
    responseToken()
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
                  required: '* Поле обязательно к заполнению',
                  onChange: (event) => {
                    setEmail(event.target.value);
                  }
                })}
              />
              <S.FillInTheField>
                {errors.login && <p>{errors.login.message || 'Error!'}</p>}
              </S.FillInTheField>
              <S.ModalInput
                type="password"
                placeholder="Пароль"
                value={password}
                {...register('password', {
                  required: '* Поле обязательно к заполнению',
                  onChange: (event) => {
                    setPassword(event.target.value);
                  }
                }
                )}
              />
              <S.FillInTheField>
                {errors.password && <p>{errors.password.message || 'Error!'}</p>}
              </S.FillInTheField>
              {error && <S.Error>{error}</S.Error>}
              <S.ModalInputEnter type="submit" disabled={offButton}>
                Войти
              </S.ModalInputEnter>
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
