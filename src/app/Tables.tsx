import React, { useState, useEffect } from 'react';
import { Paper, Grid, Tabs, Tab } from '@material-ui/core';
import { TableProps, MetricsProps } from '../types';
import { makeStyles } from '@material-ui/styles';
import TableTabPanel from './TableTabPanel';
import MetricsTabPanel from './MetricsTabPanel';

const Tables = () => {
  const [tables, setTables] = useState<Array<TableProps>>([]);
  const [table, setTable] = useState<number>(0);
  const [metrics, setTableMetrics] = useState<Array<MetricsProps>>([]);
  const classes = useStyles();

  const fetchTables = async () => {
    //const data = await fetch(`https://.../tables`);
    const data = await fetch('http://localhost:4000/tables');
    const res = await data.json();
    setTables(res);
  }

  const fetchTableData = async (newValue: number) => {
    //const data = await fetch(`https://.../metrics/${newValue+1}`)
    const data = await fetch(`http://localhost:4000/table/${newValue}`);
    const res = await data.json();
    setTableMetrics(res);
  }

  useEffect(() => {
    fetchTables();
    fetchTableData(0);
  }, []);

  const handleChange = (e: any, newValue: number) => {
    fetchTableData(newValue);
    setTable(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  return (
      <Paper square>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item md={2} sm={2} xs={12}>
            <div className={classes.root}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={table}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                {tables.map((item: TableProps, i) => (
                  <Tab label={item.table.split('_').join(' ')} {...a11yProps(i)} key={i} />
                ))}
              </Tabs>
            </div>
          </Grid>
          <Grid item md={10} sm={10} xs={12} container direction="row">
            <Grid item md={3} sm={12} xs={12}>
              {tables.map((item:TableProps, i) => (
                <TableTabPanel value={item.table.split('_').join(' ')} table={table}
                  item={item} {...a11yProps(i)} index={i} key={i}/>
              ))}
            </Grid>
            <Grid item md={9} sm={12} xs={12}>
              {metrics.length > 0 ? <MetricsTabPanel metrics={metrics}
                {...a11yProps(0)} index={0}/> : null}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
    display: 'flex',
    height: 230,
    '& .MuiTabs-root': {
      width: '100%',
    },
  },

  tabs: {
    borderRight: `1px solid #ccc`,
    '& button span.MuiTab-wrapper': {
      flexDirection: 'row',
      justifyContent: 'left',
      fontSize: '14px',
    },
  },
}));

export default Tables;
