import { Typography } from '@mui/material';
import { useTypedSelector } from 'src/store';

function PageHeader() {
  const logData: any = useTypedSelector((state) => state);
  const user = {
    name: logData.googleData.payload
      ? `${logData.googleData.payload.firstName} ${logData.googleData.payload.lastName}`
      : 'Catherine Pike',
    avatar: logData.googleData.payload
      ? logData.googleData.payload.profile
      : '/static/images/avatars/1.jpg'
  };

  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        User Settings
      </Typography>
      <Typography variant="subtitle2">
        {user.name}, this could be your user settings panel.
      </Typography>
    </>
  );
}

export default PageHeader;
