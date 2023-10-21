import GlobalStyle from '../../App.CreateGlobalStyle';
import * as S from './AuthorizationLoginPage.Style';

export function AuthorizationLoginPage ({ handleLogin }) {
  return (
    <>
    <GlobalStyle />
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <a href="../">
              <S.ModalLogo>
                <S.Img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalInput
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter onClick={handleLogin} to="/">
            Войти
            </S.ModalBtnEnter>
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
