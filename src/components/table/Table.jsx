import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = (data) => {
    
    return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Регион</TableCell>
                        <TableCell className='tableCell'>Год</TableCell>
                        <TableCell className='tableCell'>Показатель</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.data.map((row) => (
                        <TableRow key={row['Регион']+row['Год']+row['Показатель']} >
                            <TableCell className='tableCell'>{row['Регион']}</TableCell>
                            <TableCell className='tableCell'>{row['Год']}</TableCell>
                            <TableCell className='tableCell'>{row['Показатель']}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;