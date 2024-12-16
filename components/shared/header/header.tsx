import { HeaderNavigation, Container } from "@/components/shared";
import { Logo } from "../logo";
import { Button } from "@/components/ui/button";

export const Header = () => {

    return (
        <header
        // className="border-b-[2px] border-b-regal_yellow"
        >
            <Container
                className="flex justify-between items-center py-[2rem]"
            >
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