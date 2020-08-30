import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const TableTabPanel = (props: any): ReactElement => {
  const { index, table, item } = props;
  //console.log('item',item);
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.root}
    >
    {table === index && (
      <Box p={3}>
        <h5>Schema: {item.schema}</h5>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell component="th">Name</TableCell>
                <TableCell component="th">Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {item.columns.map((column: any, i: number) => (
                <TableRow key={column.name}>
                  <TableCell scope="row">
                    {column.name}
                  </TableCell>
                  <TableCell scope="row">
                    {column.type}
                  </TableCell>
                </TableRow>))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )}
    </div>
  );
}

TableTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  table: PropTypes.number,
  item: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& h5': {
      fontWeight: 'normal',
      textTransform: 'uppercase',
    },
    '& table': {
      backgroundColor: '#e6e3e3',
    },
    '& thead th': {
      textTransform: 'capitalize',
      backgroundColor: '#ccc',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    '& th': {
      padding: '.2em .5em',
      border: '1px solid #999',
    },
    '& td': {
      textTransform: 'lowercase',
      border: '1px solid #999',
      padding: '.2em .5em',
    }
  },

  title: {
    fontSize: 14,
  },
}));
export default TableTabPanel;
