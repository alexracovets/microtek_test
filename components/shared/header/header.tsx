import { HeaderNavigation, Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared";

export const Header = () => {

    return (
        <header>
            <Container className="flex justify-between items-center py-[2rem]">
                <Logo />
                <div className="flex justify-end items-center gap-x-[4rem]">
                    <nav className="relative">
                        <HeaderNavigation />
                    </nav>
                    <Button variant="link">
                        Зв&apos;язатись
                    </Button>
                </div>
            </Container>
        </header>
    )
}