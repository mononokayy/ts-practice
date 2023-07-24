import { ChildAsFC } from "./Child";

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log('clicked')}>
        lkjlk
    </ChildAsFC>;
}

export default Parent;