import React, { useState, useEffect } from 'react';
import axiosAPI from '../../API/ourAPI/API';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const StyledTableRow = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.action.hover,
    },
  }))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.back,
    },
    body: {
      fontSize: 16,
    },
  }))(TableCell);
  
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
function createData( offer,link,status) {
    return {offer,link, status };
  }
  function createOffer(toolName, description, toolQuality){
    return {toolName, description, toolQuality};
  }
  const rows = [
    createData('Łopata XXL','https://inpost.pl/wysylam', 'Borrowed',),
    createData('Szpadel zielony','http://db.zmitac.aei.polsl.pl/', 'Free'),
];
  
  const useStyles2 = makeStyles({
    table: {
      minWidth: 500,
    },
  });

export default function CustomPaginationActionsTable() {
  
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [items, setItems] = React.useState([]);
  // const items = [
  //   createOffer('jeden', 'dwa', 'trzy'),
  // ];
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() =>{
    axiosAPI.get('https://my-tool-your-tool-dev.herokuapp.com/offers/myoffers')
    .then(res => {
      setItems(res.data)
      console.log(items)
    })
    .catch(error => {
    })
  },[])
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
        <TableRow>
            <StyledTableCell>Offer</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">Quality</StyledTableCell>
          </TableRow>
          {(rowsPerPage > 0
            // ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            // : rows
            ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
             : items
          ).map((item) => (
            <StyledTableRow key={item.name}>
            <TableCell numeric component="a" href={item ['link']}>{item.toolName}</TableCell>
            <TableCell numeric component="a"  align="right" href={item ['link']}>Edit</TableCell>
            <TableCell numeric component="a"  align="right" href={item ['link']}>Delete</TableCell>
            <TableCell style={{ width: 160 }} align="right"> {item.toolQuality} </TableCell>
            </StyledTableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
