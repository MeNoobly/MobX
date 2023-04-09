import React from "react";
import counter from "../store/counter";
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
    return (
        <div>
            {/* {`count = ${counter.count}`} */}
            {counter.total}
            <div>
                <button onClick={() => counter.increment()}>+</button>
                <button onClick={() => counter.decrement()}>-</button>
            </div>
        </div>
    );
});

export default Counter;
