import { ProfileContainer, SocialMediaContainer } from '../../styles/components/ProfileHeader/ProfileHeader.style';
import { SocialMediaIcon } from './SocialMediaIcons';
import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';

export function ProfileHeader() {
    return (
        <ProfileContainer>
            <img src="/profile.png" alt="Eduarda" />
            <h2>Eduarda Vieira</h2>
            <p>Tecnica em Desenvolvimento de Sistemas</p>
            <SocialMediaContainer>
                <SocialMediaIcon
                    link="https://github.com/eduardavieira-dev"
                    icon={<SlSocialGithub />}
                />
                <SocialMediaIcon
                    link="https://instagram.com/eduardavieira.dev"
                    icon={<SlSocialInstagram />}
                />
                <SocialMediaIcon
                    link="https://github.com/eduardavieira-dev"
                    icon={<SlSocialLinkedin />}
                />
            </SocialMediaContainer>
        </ProfileContainer>
    );
}
