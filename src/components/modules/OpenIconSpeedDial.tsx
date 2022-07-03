import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';
// import EditIcon from '@mui/icons-material/Edit';
import Backdrop from '@mui/material/Backdrop';
import DialerSipIcon from '@mui/icons-material/DialerSip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import DialpadIcon from '@mui/icons-material/Dialpad';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const actions = [
  { icon: <LinkedInIcon />, name: 'sepandpay' },
  { icon: <TelegramIcon />, name: '@sepandpay' },
  { icon: <InstagramIcon />, name: '@sepand_pay' },
  { icon: <DialpadIcon />, name: '021-88324060' },
  { icon: <AlternateEmailIcon />, name: 'info@sepandpay.com' }
];

export default function OpenIconSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        transform: 'translateZ(0px)',
        flexGrow: 1
      }}
    >
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<DialerSipIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
