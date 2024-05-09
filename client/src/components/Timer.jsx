import { useState, useEffect } from "react";

const Timer = (props) => {

    const {time} = props;

    const [seconds, setSeconds] = useState(0);
    const [pauseToggle, setPauseToggle] = useState(false);
    
    const toggle = () => {
        setPauseToggle(!pauseToggle);
    }

    const reset = () => {
        setSeconds(0);
        setPauseToggle(false);
    }

    const addSecond = () => {
        setSeconds(seconds + 1);
    }

    const removeSecond = () => {
        if (seconds - 1 < 0) {
            setSeconds(0)
        } else {
            setSeconds(seconds - 1);
        }
    }

    const addMinute = () => {
        setSeconds(seconds + 60);
    }

    const removeMinute = () => {
        if (seconds - 60 < 0) {
            setSeconds(0)
        } else {
            setSeconds(seconds - 60);
        }
    }

    const addHour = () => {
        setSeconds(seconds + 3600);
    }

    const removeHour = () => {
        if (seconds - 3600 < 0) {
            setSeconds(0)
        } else {
            setSeconds(seconds - 3600);
        }
    }


    const formatTime = () => {
        const result = new Date(seconds * 1000)
            .toISOString()
            .slice(11, 19);
        return result;
    }
    


    useEffect(() => {
        let interval = null;
        if (pauseToggle && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
                console.log(seconds)
            }, 1000);
        } else if (!pauseToggle && seconds == 0) {
            clearInterval(interval);
        } else if (pauseToggle && seconds == 0) {
            clearInterval(interval);
            alert("Timer is complete!");
            toggle()
        }
        return () => clearInterval(interval);
    }, [pauseToggle, seconds]);


    return (
        <>
            <div className="w-48 bg-myColor-100 py-3 rounded mr-4">
                <div className="flex justify-center">
                    <div className="flex flex-col items-center justify-center w-4/5">
                        <div className="flex flex-row justify-evenly w-full">
                            <button className="transition ease-in delay-1 duration-1 bg-transparent hover:bg-myColor-500 text-myColor-700 font-semibold hover:text-white  px-2.5 border border-myColor-500 hover:border-transparent rounded" onClick={addHour}>+</button>
                            <button className="transition ease-in delay-1 duration-1 bg-transparent hover:bg-myColor-500 text-myColor-700 font-semibold hover:text-white  px-2.5 border border-myColor-500 hover:border-transparent rounded" onClick={addMinute}>+</button>
                            <button className="transition ease-in delay-1 duration-1 bg-transparent hover:bg-myColor-500 text-myColor-700 font-semibold hover:text-white  px-2.5 border border-myColor-500 hover:border-transparent rounded" onClick={addSecond}>+</button>
                        </div>
                        <div className="align-middle">
                            <p className="text-4xl">{formatTime(seconds)}</p>
                        </div>
                        <div className="flex flex-row justify-evenly py-1 w-full">
                            <button className="transition ease-in delay-1 duration-1 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white  px-3 border border-red-500 hover:border-transparent rounded" onClick={removeHour}>-</button>
                            <button className="transition ease-in delay-1 duration-1 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white  px-3 border border-red-500 hover:border-transparent rounded" onClick={removeMinute}>-</button>
                            <button className="transition ease-in delay-1 duration-1 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white  px-3 border border-red-500 hover:border-transparent rounded" onClick={removeSecond}>-</button>
                        </div>
                        <div className="flex justify-between w-full py-2">
                            <button className='transition ease-in delay-1 duration-1 shadow-lg shadow-myColor-600 bg-myColor-600 hover:bg-myColor-900 hover:shadow-myColor-900 text-myColor-50 font-bold py-2 px-4 rounded mr-3' onClick={toggle}>
                                {pauseToggle ? 'Pause' : 'Start'}
                            </button>
                            <button className='transition ease-in delay-1 duration-1 shadow-lg shadow-red-400 bg-red-400 hover:bg-[#b22222] hover:shadow-[#b22222] text-myColor-50 font-bold py-2 px-4 rounded mr-3' onClick={reset}>
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timer