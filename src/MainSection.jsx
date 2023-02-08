import React, { useState } from 'react'
import Inbox from './Inbox'
import Next7Days from './Next7Days'
import Today from './Today'

const list = [
    { number: 1, title: "lets complete this", date: new Date("11/25/2022") },
    { number: 2, title: "Should sleept at 9", date: new Date("02/02/2023") },
    { number: 3, title: "Lets us complete react", date: new Date("01/30/2023") }
]
export default function MainSection(props) {
    const [filteredList, setFilteredList] = useState(list)
    const addToList = (obj) => {
        list.push(obj);
        setFilteredList(list);
    };
    return (
        <div>
            {props.active === "INBOX" && (
                <Inbox list={filteredList} append={addToList} />
            )}
            {props.active === "TODAY" && (
                <Today list={filteredList} />
            )}
            {props.active === "NEXT" && (
                <Next7Days list={filteredList} />
            )}
        </div>
    )
}
