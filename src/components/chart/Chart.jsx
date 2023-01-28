import './chart.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ResponsiveContainer } from 'recharts';


const Chart = ({data, aspect, title}) => {

    let new_data = [];
    data.reduce(function(res, value) {
    if (!res[value['Год']]) {
        res[value['Год']] = { year: value['Год'], total: 0 };
        new_data.push(res[value['Год']])
    }
    res[value['Год']].total += Number(value['Показатель']);
    return res;
    }, {});

    return (
        <div className='chart'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="60%" aspect={aspect} >
                <BarChart width="100%" height="100%" data={new_data} margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
                    <XAxis dataKey="year"/>
                    <YAxis/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Tooltip />
                    <Bar dataKey="total" fill="#8884d8">
                        <LabelList dataKey="total" position="top" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;