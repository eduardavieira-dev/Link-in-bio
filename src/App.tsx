import { LinkButton } from "./components/LinkButton";
import { ProfileHeader } from "./components/ProfileHeader";
import { LinksContainer, MainContainer } from "./styles/pages/Home/home.style";

export function App() {
    return (
        <>
            <MainContainer>
              <ProfileHeader/>
              <LinksContainer>
                <LinkButton
                    link="https://github.com/eduardavieira-dev"
                    text="Meus projetos no GitHub"
                />
                <LinkButton
                    link="https://github.com/eduardavieira-dev"
                    text="Conecte-se comigo no discord"
                />
                <LinkButton
                    link="https://github.com/eduardavieira-dev"
                    text="Acompanhe meu studygram"
                />
               
              </LinksContainer>
            </MainContainer>
        </>
    );
}
