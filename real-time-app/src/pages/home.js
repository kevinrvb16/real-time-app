import { useEffect, useState } from 'react';
import {api} from '../api/client'
import './index.css';
const Home = () => {
    const [harlo, setHarlo] = useState({});
    const getCharacterDetails = async () => {
        const {data} = await api.get()
        console.log(data['1'])
        setHarlo(data['1'])
    }
    useEffect( () => {
        getCharacterDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <div className="card text-bg-info mb-3 width-75-percent text-center" >
                <div className="card-body">
                    <h2 className="card-title">{harlo.workCenterName}</h2>
                    <h4>{harlo.currentState?.stateReasonCode}</h4>
                    <h4>{harlo.productionOrder?.productionOrder}</h4>
                    <h4>{harlo.productionOrder?.productName}</h4>
                    <h3>Qtd. Produzida</h3>
                    <h4>{harlo.shiftProduction?.goodCount}</h4>
                    <h4>{harlo.shiftProduction?.kpiOeeGoal}%  OEE</h4>              
                    <h4>{harlo.productionOrder?.completedQuantity},00 / {harlo.productionOrder?.plannedQuantity},00</h4>              
                </div>
            </div>
        </div>
    )
}

export default Home;