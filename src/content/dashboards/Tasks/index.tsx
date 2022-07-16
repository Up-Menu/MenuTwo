import { ChangeEvent, useState } from 'react';
import Footer from 'src/shared/Footer';
import { Grid, Tab, Tabs, Container, Card, Box, styled } from '@mui/material';
import TaskSearch from './TaskSearch';
import ProgressBar from 'src/components/pages/admin/progress/ProgressBar';
import TitleText from 'src/UI/TitleText';

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      padding: 0 ${theme.spacing(2)};
      position: relative;
      bottom: -1px;

      .MuiTabs-root {
        height: 44px;
        min-height: 44px;
      }

      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          min-height: 4px;
          height: 4px;
          box-shadow: none;
          bottom: -4px;
          background: none;
          border: 0;

          &:after {
            position: absolute;
            right: 50%;
            width: 28px;
            content: ' ';
            margin-right: -14px;
            background: ${theme.colors.primary.main};
            border-radius: inherit;
            height: 100%;
          }
      }

      .MuiTab-root {
          &.MuiButtonBase-root {
              height: 44px;
              min-height: 44px;
              background: ${theme.colors.alpha.white[50]};
              border: 1px solid ${theme.colors.alpha.black[10]};
              border-bottom: 0;
              position: relative;
              margin-left: ${theme.spacing(1)};
              font-size: ${theme.typography.pxToRem(14)};
              color: ${theme.colors.alpha.black[80]};
              border-bottom-right-radius: 0;
              border-bottom-left-radius: 0;

              .MuiTouchRipple-root {
                opacity: .1;
              }

              &:after {
                position: absolute;
                right: 0;
                left: 0;
                width: 100%;
                bottom: 0;
                height: 1px;
                content: '';
                background: ${theme.colors.alpha.black[10]};
              }

              &:hover {
                color: ${theme.colors.alpha.black[100]};
              }
          }

          &.Mui-selected {
              color: ${theme.colors.alpha.black[100]};
              background: ${theme.colors.alpha.white[100]};
              border-bottom-color: ${theme.colors.alpha.white[100]};

              &:after {
                height: 0;
              }
          }
      }
  `
);

function DashboardTasks() {
  const [currentTab, setCurrentTab] = useState<string>('analytics');
  const tabs = [{ value: 'analytics', label: 'میزان پیشرفت شما' }];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <Box sx={{ direction: 'rtl' }}>
      <TitleText header="پنل ادمین رستوران | خوش آمدید" />
      <Container maxWidth="lg">
        <TabsContainerWrapper>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </TabsContainerWrapper>

        <Grid container spacing={2}>
          <Grid item xs={12} /* md={6} */>
            <Card variant="outlined">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={0}
              >
                {currentTab === 'analytics' && (
                  <>
                    <Grid item xs={12}>
                      <Box p={4}>
                        <ProgressBar />
                      </Box>
                    </Grid>
                  </>
                )}
                {currentTab === 'taskSearch' && (
                  <Grid item xs={12}>
                    <Box p={4}>
                      <TaskSearch />
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}

export default DashboardTasks;
