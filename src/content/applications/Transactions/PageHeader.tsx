import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useTypedSelector } from 'src/store';
import images from 'src/widgets/importer';

function PageHeader() {
  const logData: any = useTypedSelector((state) => state);
  const user = {
    name: logData.googleData.payload
      ? `${logData.googleData.payload.firstName} ${logData.googleData.payload.lastName}`
      : 'Sepand User',
    avatar: logData.googleData.payload
      ? logData.googleData.payload.profile
      : images['avatars/profile_default.png']
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Transactions
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, these are your recent transactions
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          endIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Create transaction
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
