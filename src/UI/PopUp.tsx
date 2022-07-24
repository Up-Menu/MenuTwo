import { Fragment } from 'react';
import {
  Alert,
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal,
  Stack,
  styled,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';

// import icons
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useTypedDispatch } from 'src/store';
import { userDeleteCategory, userDeleteFood } from 'src/store/actions';

interface PopUpValuesType {
  setOpen: Function;
  open: boolean;
  setID: Function;
  ID: string;
  setList: Function;
  method: string;
  List: object[];
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

const PopUp = (props: PopUpValuesType) => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();
  const ErrAlert = styled(Alert)`
    border: 1px solid red;
    color: ${theme.palette.mode === 'dark' ? '#FF1943' : 'red'};
    background-color: ${theme.palette.mode === 'dark'
            ? 'rgba(122, 2, 2, 0.3)'
            : '#fbaaaa'};
    justify-content: center;
    flex-direction: row-reverse;

    svg {
      color: ${theme.palette.mode === 'dark' ? '#FF1943' : 'red'};
      padding-top: 1px;
    }
  `;

  const removeConfirmation = () => {
    let newList = [...props.List];
    newList = newList.filter((item: any) => item.id !== props.ID);
    props.setList(newList);
    if (props.method === 'category') {
      dispatch(userDeleteCategory(props.ID, (notification) => notification));
    } else if (props.method === 'table') {
      // DeleteTableItem()
    } else {
      dispatch(userDeleteFood(props.ID, (notification) => notification));
    }
    props.setOpen(false);
  };
  return (
    <Fragment>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
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
            <Stack>
              <ErrAlert severity='error'>توجه کنید!</ErrAlert>
            </Stack>

            <Fragment>
              <Typography
                id='transition-modal-description'
                sx={{ mt: 2, textAlign: 'center', direction: 'rtl' }}
              >
                آیا از انتخاب خود مطمئن هستید؟
              </Typography>
              <Stack direction='row' justifyContent='center' spacing={2} pt={4}>
                <Tooltip title='بله' arrow>
                  <IconButton
                    onClick={removeConfirmation}
                    sx={{ mr: 1 }}
                    color='success'
                  >
                    <DoneIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title='خیر' arrow>
                  <IconButton
                    onClick={() => {
                      props.setOpen(false);
                    }}
                    sx={{ mr: 1 }}
                    color='error'
                  >
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Fragment>
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default PopUp;
