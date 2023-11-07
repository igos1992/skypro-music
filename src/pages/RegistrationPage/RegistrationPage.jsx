import { useContext, useEffect, useState } from 'react';
import GlobalStyle from '../../App.CreateGlobalStyle';
import * as S from './RegistrationPage.Style';
import { useForm } from 'react-hook-form';
import { postTodosUserSignUp } from '../../api'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/Usercontext/Usercontext';

export function RegistrationPage() {

  const { changingUserData } = useContext(UserContext)
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [username, setUsername] = useState("");
  const [offButton, setOffButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setError(null);
  }, [email, password, repeatPassword, username]);

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = () => {
    setOffButton(true)
    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
    } else {
      postTodosUserSignUp({
        email: email,
        password: password,
        username: username
      })
        .then((response) => {
          console.log(response);
          localStorage.setItem("user", response.username);
          changingUserData(localStorage.getItem('user'))
          console.log(localStorage.getItem('user'))
          navigate('/MainPage');
        }).catch((error) => {
          console.log(error)
          setError(error.message);
        })
        .finally(() => {
          setOffButton(false)
        }
        )
    }
  }

  console.log(offButton);

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.ContainerSignup>
          <S.ModalBlock>
            <S.ModalFormLogin onSubmit={handleSubmit(onSubmit)}>
              <a href="../">
                <S.ModalLogo>
                  <S.Img src="../img/logo_modal.png" alt="logo" />
                </S.ModalLogo>
              </a>
              <S.ModalInput
                type="email"
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
                type="text"
                placeholder="Имя"
                value={username}
                {...register('name', {
                  required: '* Поле обязательно к заполнению',
                  onChange: (event) => {
                    setUsername(event.target.value);
                  }
                })}
              />
              <S.FillInTheField>
                {errors.name && <p>{errors.name.message || 'Error!'}</p>}
              </S.FillInTheField>

              <S.ModalInput
                type="password"
                placeholder="Пароль"
                value={password}
                {...register('password', {
                  required: '* Поле обязательно к заполнению',
                  onChange: (event) => {
                    setPassword(event.target.value)
                  }
                })}
              />

              <S.FillInTheField>
                {errors.password && <p>{errors.password.message || 'Error!'}</p>}
              </S.FillInTheField>

              <S.ModalInput
                type="password"
                placeholder="Повторите пароль"
                {...register('repeatPassword', {
                  required: '* Поле обязательно к заполнению',
                  onChange: (event) => {
                    setRepeatPassword(event.target.value);
                  }
                })}
              />
              <S.FillInTheField>
                {errors.repeatPassword && <p>{errors.repeatPassword.message || 'Error!'}</p>}
              </S.FillInTheField>

              {error && <S.Error>{error}</S.Error>}
          
              <S.InputSubmit type="submit" disabled={offButton}>
                Зарегистрироваться
                </S.InputSubmit>

            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerSignup>
      </S.Wrapper>
    </>
  );
}
