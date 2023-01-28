import Widget from '../../components/widget/Widget';
import Chart from '../../components/chart/Chart';
import './home.scss';
import Select from 'react-select'
import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import csv from './data.csv';
import Table from '../../components/table/Table';

const Home = () => {

    const[data, setData] = useState([])
    const[newData, setNewData] = useState([])
    const [selectedOptions, setSelectedOptions] = useState(null);

    useEffect(() => {
        d3.csv(csv).then(data => {
            setData(data);
            let regions = []
            data.map(function(el) {
                return (
                regions.push({value: el['Регион'], label: el['Регион']})
                )
            });            
            let region = [
                ...new Map(regions.map((item) => [item["label"], item])).values(),
            ];
            setSelectedOptions(region)
        });
    }, []);

    const handleChange = (selectedOption) => {
        let temp = []
        for(let [, value] of Object.entries(selectedOption)) {
            let t = data.filter(function (el) {
                return el['Регион'] === value.label;
            }) 
            for(let [, value1] of Object.entries(t)) {
                temp.push(value1)
            }
        }
        setNewData(temp)
    };

    return (
        <div className='home'>
            <div className="homeContainer">
                <div className="widgets">
                    <Select 
                        placeholder='Выбор регионов'
                        isMulti
                        options={selectedOptions} 
                        onChange={handleChange}
                    />
                </div>
                <div className="widgets">
                    <Widget all={data} part={newData} type='2023'/>
                </div>

                <div className='widgets'>
                    <Chart data={newData.length ? newData : data} aspect={1/1} title='Показатели по годам'/>
                </div>
            </div>
            <div className="homeContainer">
                <div className="listContainer">
                    <div className="listTitle">Показатели по регионам и годам</div>
                    <Table data={newData.length ? newData : data}/>
                </div>
            </div>
        </div>
    );
};

export default Home;