import { Children } from "react"

const Container = ({Children, fluid}) => {
    return <div className={`${fluid ? "w-full" : "container"} mx-auto`}>
        {Children}
    </div>
}

export default Container;