import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { formatCamelCaseString } from '../utils';

const MetricsTabPanel = (props: any): ReactElement => {
  const { index, metrics } = props;
  const classes = useStyles();
  const header = Object.keys(metrics[0]);
  return (
    <div
      role="tabpanel"
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.root}
    >
    {(
      <Box p={3}>
        <h5>Metrics</h5>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {header.map((key, i) => (<TableCell component="th" key={i}>{formatCamelCaseString(key)}</TableCell>))}
              </TableRow>
            </TableHead>
            <TableBody>
              {metrics.map((metric: any, i: number) => (
                <TableRow key={i}>
                  {header.map((key, j) => (
                    <TableCell scope="row" key={j}>
                      {metric[key]}
                    </TableCell>
                  ))}
                </TableRow>))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )}
    </div>
  );
}

MetricsTabPanel.propTypes = {
  index: PropTypes.any.isRequired,
  item: PropTypes.any,
  metrics: PropTypes.any.isRequired,
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
export default MetricsTabPanel;
