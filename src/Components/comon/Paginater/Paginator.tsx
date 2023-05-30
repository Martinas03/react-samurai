import React, {useState} from 'react';
import s from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let [index, setIndex] = useState(1)
    let diapason = 10

    let pageCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.numbers}>
            <button onClick={() => setIndex(1)}>to begin</button>
            <button disabled={index === 1} onClick={() => setIndex(index - diapason)}>back</button>
            {pages.map((p, i) => {
                let iPlusOne = i + 1
                if (iPlusOne >= index && iPlusOne < (index + diapason)) {
                    return <span key={i} className={
                        p === currentPage ?
                            s.selectedPage
                            : ''
                    } onClick={() => {
                        onPageChanged(p)
                    }}>{p}</span>
                } else {
                    return <>
                    </>
                }

            })}

            <button disabled={index + diapason >= pageCount} onClick={() => setIndex(index + diapason)}>next</button>
            <button onClick={() => setIndex(Math.floor(pageCount / diapason) * diapason + 1)}>to end</button>
        </div>
    );
};

export default Paginator;