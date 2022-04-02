import "../index.css"
import Jan2022 from "./calendar/January2022"
import Feb2022 from "./calendar/February2022"
import Mar2022 from "./calendar/March2022"
import Apr2022 from "./calendar/April2022"

var months = [Jan2022, Feb2022, Mar2022, Apr2022]
let today = new Date();
let month = today.getMonth();
let Month = months[month]

function decrementMonth(){
    month -= 1
    Month = months[month]
    console.log(month)
}

function incrementMonth(){
    month += 1
    Month = months[month]
    console.log(month)
}

const UserPortal = () => {
    const Month = months[month];
    return(<>
        <div style={{display: "inline-block"}}>
            <button onClick={decrementMonth}>Previous</button><Month /><button onClick={incrementMonth}>Next</button>
        </div>
    </>)
}

export default UserPortal;