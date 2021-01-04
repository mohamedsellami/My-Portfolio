import React, { useEffect, useState } from 'react';
import './Loader.scss';
import CheckIcon from '@material-ui/icons/Check';

function Loader() {

    const [ count, setCount ] = useState(0);

    useEffect(() => {
        let counter = 0;
        let intorval = setInterval(()=>{
            counter += 1;
            setCount(counter);
            document.querySelector(".prograss-loader").style.strokeDashoffset = `calc(440 - (440 * ${counter}) / 100)`;
            if(counter === 100){
                clearInterval(intorval)
                setTimeout(()=>{
                    setCount(101);
                    document.querySelector('.loder-container .circle').style.backgroundColor = "#6fb332";
                }, 500);
                setTimeout(()=>{
                        document.querySelector(".loder-container").style.opacity = '0';
                }, 900);
                setTimeout(()=>{
                    document.querySelector(".app").style.display = 'block';
                    document.querySelector(".loder-container").remove();
                }, 1000)
            }
        }, 10)
    }, [])
    return (
        <div className="loder-container">
            <div className="circle">
                <svg className="circle-svg">
                    <circle cx="70" cy="70" r="70" className="prograss-loader"></circle>
                </svg>
                {count === 101 ? <CheckIcon/> : <span>{count}%</span>}
            </div>
            
        </div>
    )
}

export default Loader
