import { memo } from "react";

const Small = memo(({ value }: { value: number }) => {
    console.log('Me volvi a renderizar');
    return (
        <div>
            <small>{value}</small>
        </div>
    )
});

export default Small;
