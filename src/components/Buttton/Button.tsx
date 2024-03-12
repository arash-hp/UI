import { FC } from "react"

type Props = {
    text:string
}

 const Button: FC<Props> = ({text}) => {
    return <div>{text}</div>
}

export default Button