import React, { Fragment } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material';

const IosSwitch = () => {
    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch
            focusVisibleClassName=".Mui-focusVisible"
            disableRipple
            {...props}
        />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: '#57CA22 !important',
                    opacity: 1,
                    border: 0
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5
                }
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#57CA22',
                border: '6px solid #fff'
            },

            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.3
            }
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: '#FF1943',
            opacity: 1
        }
    }));
    return (
        <Fragment>
            <FormGroup>
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    label=""
                />
            </FormGroup>
        </Fragment>
    );
};

export default IosSwitch;