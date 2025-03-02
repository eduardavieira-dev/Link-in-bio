import { Footer } from "./components/Footer";
import { LinkButton } from "./components/LinkButton";
import { ProfileHeader } from "./components/ProfileHeader";
import { links } from "./data/links";
import { LinksContainer, MainContainer } from "./styles/pages/Home/home.style";

export function App() {
    return (
        <>
            <MainContainer>
              <ProfileHeader/>
              <LinksContainer>
                 {links.map(({id, link, text}) => (
                    <LinkButton
                    //props
                        key={id}
                        link={link}
                        text={text}
                    />
                 ))}
              </LinksContainer>
              <Footer/>
            </MainContainer>
        </>
    );
}
