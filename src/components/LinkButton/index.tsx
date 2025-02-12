import { Button } from "../ProfileHeader/LinkButton/LinkButton.style";

interface LinkButtonProps{
    link: string;
    text: string;

}

export function LinkButton({ link, text }: LinkButtonProps){
    return(
         <Button href={link} target="_blank">
           {text}
         </Button>
    );
}