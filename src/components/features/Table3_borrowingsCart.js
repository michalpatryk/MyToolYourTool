import React, {useState, useEffect} from 'react';
import axiosAPI from '../../API/ourAPI/API';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import TableRow from '@material-ui/core/TableRow';

const StyledTableRow = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.action.hover,
    },
  }))(TableRow);

const styles = (theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {

    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    root: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    }},
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

const sample = [
  ['Łopata small', '0'],
  ['Grabki XXL', '1'],
  ['Grabki XXL', 1],

];

function createData(id,name,status) {
  return { id,name,status };
}

const rows = [];

// for (let i = 0; i < 200; i += 1) {
//   const randomSelection = sample[Math.floor(Math.random() * sample.length)];
//   rows.push(createData(i, ...randomSelection));
// }

export default function ReactVirtualizedTable() {
  const [borrowings, setBorrowings] = useState();
  useEffect(()=>{
    //setRows([]);
    axiosAPI.get('https://my-tool-your-tool-dev.herokuapp.com/reservations/my-reservations')
    .then(res => {
      res.data.map((key) => {
        axiosAPI.get('https://my-tool-your-tool-dev.herokuapp.com/offers/'+key.offerId)
        .then(res2 => {
          rows.push(createData(res.data.id, res2.data.toolName, 'test'))
          console.log(res.data)
        })
        .catch(err => {

        })
        //console.log(key.offerId);
      })
      setBorrowings(res.data);
      //console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  },[]);

  return (
    <Paper style={{ height: 750, width: '100%' }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 1200,
            label: 'Offer',
            dataKey: 'name',
          },
          {
            width: 120,
            label: 'Review',
            dataKey: 'status',
          },
        ]}
      />
    </Paper>
  );
}
