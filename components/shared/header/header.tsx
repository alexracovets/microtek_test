import { HeaderNavigation, Container } from "@/components/shared";
import { Logo } from "../logo";

export const Header = () => {

    return (
        <header>
            <Container
                className="flex justify-between items-center"
            >
                <Logo />
                <nav>
                    <HeaderNavigation />
                </nav>
            </Container>
        </header>
    )
}