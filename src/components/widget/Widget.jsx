import './widget.scss';


const Widget = ({ all, part, type }) => {

    let all_new_data = [];
    all.reduce(function(res, value) {
        if (value['Год'] === '2023') {
            if (!res[value['Год']]) {
                res[value['Год']] = { year: value['Год'], total: 0, num: 0 };
                all_new_data.push(res[value['Год']])
            }
            res[value['Год']].total += Number(value['Показатель']);
            res[value['Год']].num += 1;
        }
    return res;
    }, {});

    let part_new_data = [];
    part.reduce(function(res, value) {
        if (value['Год'] === '2023') {
            if (!res[value['Год']]) {
                res[value['Год']] = { year: value['Год'], total: 0, num: 0 };
                part_new_data.push(res[value['Год']])
            }
            res[value['Год']].total += Number(value['Показатель']);
            res[value['Год']].num += 1;
        }
    return res;
    }, {});

    const amount = part_new_data.length ? Math.round(part_new_data[0].total / part_new_data[0].num) : 'Регионы не выбраны';
    const average = all_new_data.length ? Math.round(all_new_data[0].total / all_new_data[0].num) : 0
    const styles = average < amount ? { color: "green" } : { color: "red" }

    let data;
    switch (type) {
        case '2023':
            data = {
                title: 'Числовой показатель со средним значением по выбранным регионам за 2023 год',
            };
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter" style={styles}>
                    {amount}
                </span>
            </div>
        </div>
    );
};

export default Widget;