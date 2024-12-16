import { HeaderNavigation, Container } from "@/components/shared";
import { Logo } from "../logo";
import { Button } from "@/components/ui/button";

export const Header = () => {

    return (
        <header>
            <Container
                className="flex justify-between items-center py-[2rem]"
            >
                <Logo />
                <nav>
                    <HeaderNavigation />
                </nav>
                <Button variant="link">
                    Зв&apos;язатись
                </Button>
            </Container>
        </header>
    )
}