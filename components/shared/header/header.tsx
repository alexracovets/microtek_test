import { HeaderNavigation, Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared";

export const Header = () => {

    return (
        <header>
            <Container className="flex justify-between items-center py-[2rem]">
                <Logo />
                <nav className="relative">
                    <HeaderNavigation />
                </nav>
                <Button variant="link">
                    Зв&apos;язатись
                </Button>
            </Container>
        </header>
    )
}