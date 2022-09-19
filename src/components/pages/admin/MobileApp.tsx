import React, { useContext, useState } from 'react';
import {
  Card,
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  Button
} from '@mui/material';
import BottomNav from '../../../shared/BottomNav';
import Footer from '../../../shared/Footer';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import ProgressContext from 'src/context/ProgressContext';

import { IPhoneX } from 'react-device-frames';
import CaptureArea from './CaptureArea';
import TitleText from '../../../UI/TitleText';
import RtlVersion from '../../../theme/RtlVersion';
import ThemeStore from 'src/theme/classic/Store';

const colors = ['#9253a1', '#263238', '#009688'];

const MobileApp = () => {
  const progressContext = useContext(ProgressContext);
  const [background, setBackground] = useState('#111633');
  const [current, setCurrent] = useState(null);
  const [image, setImage] = React.useState<string>('');

  const onSubmit = () => {
    progressContext.onMobileApp(true);
  };

  return (
    <>
      <Box pt={2} sx={{ direction: 'rtl' }}>
        <TitleText header="انتخاب پالت اپلیکیشن" />
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Card>
                <Box pt={4} pr={4} pb={2}>
                  <Typography variant="h3">انتخاب رنگ</Typography>
                </Box>
                <Divider />
                <Box pt={4} pr={4} pl={4} pb={2}>
                  <Typography variant="h6">
                    در این بخش لطفاً تم رنگ منوی خود را از پالت های زیر انتخاب
                    کنید:
                  </Typography>
                </Box>

                <Box pt={4} pr={4} pb={2}>
                  <div className="container_plus">
                    {colors.map((color, index) => (
                      <div key={index} className="card">
                        <div
                          style={{
                            background: color,
                            filter: 'brightness(85%)',
                            boxShadow:
                              color === background ? '0 0 9px #8C7CF0' : '',
                            border: color === background ? '3px solid #fff' : ''
                          }}
                          className="box"
                          onClick={() => setBackground(color)}
                        />

                        <p
                          style={{
                            color: color === background ? '#8C7CF0' : color
                          }}
                          onClick={() => setCurrent(color)}
                        />
                      </div>
                    ))}
                  </div>
                </Box>

                <Box pt={4} pr={7} pb={2}>
                  <RtlVersion>
                    <Button
                      size="large"
                      variant="outlined"
                      sx={{ padding: 1 }}
                      endIcon={<DownloadDoneIcon />}
                      onClick={onSubmit}
                      color="success"
                    >
                      ثبت رنگ
                    </Button>
                  </RtlVersion>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <Box p={4}>
                  <>
                    <IPhoneX screenshot={image} />
                    <CaptureArea onImageChange={setImage}>
                      <div
                        style={{
                          background: background,
                          height: '256px'
                        }}
                      ></div>
                      <div
                        style={{
                          background: background,
                          zIndex: 0,
                          position: 'relative',
                          height: '10000px'
                        }}
                      >
                        <ThemeStore />
                      </div>
                    </CaptureArea>
                  </>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <BottomNav
          className="pt-5"
          nextStep={true}
          preStep={true}
          forLink="finish"
          backLink="tables"
          forText="اتمام نصب"
          backText="ساخت میز"
        />
      </Container>
      <Footer />
    </>
  );
};

export default MobileApp;
