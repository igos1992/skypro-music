import GlobalStyle from '../../App.CreateGlobalStyle';
import * as S from './RegistrationPage.Style';

export function RegistrationPage() {
  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.ContainerSignup>
          <S.ModalBlock>
            <S.ModalFormLogin>
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
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Повторите пароль"
              />
              <S.ModalBtnSignupEnt>
                <S.AModalBtnSignupEnt href="../index.html">Зарегистрироваться</S.AModalBtnSignupEnt>
              </S.ModalBtnSignupEnt>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerSignup>
      </S.Wrapper>
    </>
  );
}
