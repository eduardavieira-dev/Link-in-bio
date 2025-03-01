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
                    link="https://discord.com/users/eduardavieira07"
                    text="Conecte-se comigo no discord"
                />
                <LinkButton
                    link="https://instagram.com/eduardavieira.dev"
                    text="Acompanhe meu studygram"
                />
               
              </LinksContainer>
            </MainContainer>
        </>
    );
}
