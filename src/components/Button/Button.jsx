import { Button } from "./Button.styled.jsx";
import { GreenButton } from "./Button.styled.jsx";
import { FaAngellist } from "react-icons/fa";


export const ButtonElement = ({type}) => {
    return ( <>
    <Button type={type}>
        <FaAngellist size="16px"/>
        Click me
        </Button>
    <Button as="a" href="#">Click me</Button>
    <GreenButton>Click me</GreenButton>
    </>
    )
}