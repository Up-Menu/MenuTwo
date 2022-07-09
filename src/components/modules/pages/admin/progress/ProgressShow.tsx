import React, { useContext } from 'react';
import CircularProgress, {
  CircularProgressProps
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProgressContext from 'src/contexts/ProgressContext';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);
  const progressContext = useContext(ProgressContext);

  const progressArr: boolean[] = [
    progressContext.finishInstallation,
    progressContext.mobileApp,
    progressContext.testOrders,
    progressContext.deliveryZone,
    progressContext.tableManager,
    progressContext.createRestaurant,
    progressContext.selectOrder,
    progressContext.themeSelection,
    progressContext.addMenu
  ];

  const count1 = progressArr.filter((value) => value === true).length;
  console.log(count1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(() => count1 * 11.1111111111);
      console.log(progress);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, [count1]);

  return <CircularProgressWithLabel color="success" value={progress} />;
}
