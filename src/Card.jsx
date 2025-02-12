import Count from "./Count";
import CounterButtons from "./CounterButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card(){
    return(<>
    <div className="card">
<Title/>
<Count/>
<ResetButton/>
<CounterButtons/>    
</div>
    </>)
}