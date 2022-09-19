import React from 'react';
import {
  Backdrop,
  Box,
  Fade,
  Modal,
  Stack,
  useTheme,
  styled,
  Alert,
  Card,
  IconButton
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//import QR code generator
import { QRCodeSVG } from 'qrcode.react';

import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

interface PopUpValuesType {
  setOpen: Function;
  open: boolean;
  QR: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #8C7CF0',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
  direction: 'rtl',
  textAlign: 'right'
};

const PopUpView = (props: PopUpValuesType) => {
  const theme = useTheme();
  const ErrAlert = styled(Alert)`
    border: 1px solid green;
    color: ${theme.palette.mode === 'dark' ? '#57CA22' : 'green'};
    background-color: ${theme.palette.mode === 'dark'
      ? 'rgba(22, 122, 2, 0.185)'
      : '#aafbb5'};
    justify-content: center;
    flex-direction: row-reverse;

    svg {
      color: ${theme.palette.mode === 'dark' ? '#57CA22' : 'green'};
      padding-top: 1px;
    }
  `;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={() => {
          props.setOpen(false);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500], ml: 3 }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={`${props.QR}`}
                subheader={`ایجاد شده توسط: ${props.QR}`}
              />

              <CardContent>
                <Box
                  pt={4}
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                >
                  <Card>
                    <Box p={1}>
                      <QRCodeSVG value={`${props.QR}`} />
                    </Box>
                  </Card>
                </Box>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" color="error">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>راهنما:</Typography>
                  <Typography paragraph>
                    شما میتوانید این میز را به لیست دلخواه خود اضافه کنید یا
                    آنرا در شبکه های اجتماعی به اشتراک بگذارید.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
            {/* <Stack>
              <ErrAlert severity="error">
                میتوانید QR Code خود را به اشتراک بگذارید
              </ErrAlert>
            </Stack>

           
            <Box display="flex" flexDirection="row" justifyContent="center">
              <IconButton
                sx={{ m: 3 }}
                onClick={() => console.log('click whatsapp')}
                color="primary"
              >
                <WhatsAppIcon />
              </IconButton>

              <IconButton
                sx={{ m: 3 }}
                onClick={() => console.log('click whatsapp')}
                color="primary"
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                sx={{ m: 3 }}
                onClick={() => console.log('click whatsapp')}
                color="primary"
              >
                <LinkedInIcon />
              </IconButton>
            </Box> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PopUpView;
