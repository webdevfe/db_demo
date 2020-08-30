import React, { ReactElement } from 'react';
import {
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  makeStyles
} from '@material-ui/core';

interface BrandsProps {
  brandList: string[];
  history: { replace: Function };
}

const Brands = ({ brandList, history }: BrandsProps): ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='h5' component='h5'>
        Brands
      </Typography>
      <FormGroup className={classes.fg}>
        {brandList.map(value => (
          <FormControlLabel
            className={classes.item}
            value={value}
            control={<Checkbox color='primary' />}
            label={value}
            labelPlacement='end'
          />
        ))}
      </FormGroup>
      <div className={classes.ftr}>
        <Typography variant='h5' component='h5'>
          2017 Ram 1500 6.2L v8
        </Typography>
        <Button
          variant='contained'
          className={classes.nextBtn}
          onClick={() => history.replace('/details')}
        >
          Next
        </Button>
      </div>
      <strong className={classes.link} onClick={() => history.replace('/auth')}>
        Save it to my garage
      </strong>
    </>
  );
};

// @ts-ignore
const useStyles = makeStyles(() => ({
  nextBtn: { width: 220 },
  ftr: { display: 'flex', justifyContent: 'space-between', marginTop: 10 },
  item: { width: 85 },
  fg: { display: 'flex', flexDirection: 'row' },
  link: {
    color: 'blue',
    '&:hover': { textDecoration: 'underline', cursor: 'pointer' }
  }
}));

export default React.memo(Brands);
